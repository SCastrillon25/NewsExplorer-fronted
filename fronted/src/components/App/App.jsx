import { useState, useEffect, use } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar";
import { NewsSearch } from "../NewsSearch/NewsSearch";
import { api } from "../../utils/api";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";
import { Footer } from "../Footer/Footer";
import { SearchNewsPage } from "../../page/SearchNewsPage/SearchNewsPage";
import { Modal } from "../Popup/Modal";
import { ModalSignIn } from "../Popup/ModalSignIn/ModalSignIn";
import { ModalSignUp } from "../Popup/ModalSingUp/ModalSingUp"
import { ModalPhoneVist } from "../Popup/ModalPhoneVist/ModalPhoneVist";
import { Registerffully } from "../Popup/Registerffully/Registeffully";
import { Register } from "../../page/Register/Register";
import { Loguin } from "../../page/Loguin/Loguin";
import { NewsContext } from "../../contexts/NewsContext";
import { ProtectedRoute } from "../ProtectedRoutes/ProtectedRoute";
import { Protected } from "../../page/Protected/Protected"
import { Home } from "../../page/Home/Home";
import * as auth from "../../utils/auth"
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(null);
  const [register, setRegister] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [aboutAuthor, setAboutAuthor] = useState(true);
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [titleWhite, setTitleWhite] = useState(false)
  const [token, setToken] = useState(() => 
    localStorage.getItem("jwt") || ""
  );

const handleSearch = (searchKeyword) => {
  setKeyword(searchKeyword);
  setError("");
  setArticles([]);
  {isLogin ? setIsLoading(true) : setIsLogin(false)};
  {isLogin ? navigate("home-save-news") : navigate("News")};

  api.searchNews(searchKeyword)
    .then((data) => {
      setArticles(data.data || [])
    })
    .catch((err) => {
      console.error("Error al buscar noticias:", err);
      setError(
        err?.error?.message ||
        err?.message ||
        "No fue posible cargar las noticias."
      );
    })
    .finally(() => {
      setIsLoading(false);
    });
  
};  

  const handleRegister = async ({ email, password, username }) => {
    try {
      const data = await auth.register({
        email,
        password,
        username,
      });
      setModal(null);
      setIsHome(true)
      setIsLogin

      navigate("/success");
      console.log("REGISTRO EXITOSO:", data);

      return data;

    } catch(error) {
      console.error("ERROR DEL REGISTRO:", error);
    }
  };

  const handleLoguin = async ({ email, password }) => {
    try {
      const data = await auth.authorize({
        email,
        password,
      });

      if (!data.token) {
        throw new Error("No se recibió el token");
      };

      localStorage.setItem("jwt", data.token);
      setToken(data.token);
      
      const newsSaved = await api.getArticles();
      setSavedArticles(newsSaved);
      setIsLogin(true);
      setAboutAuthor(false);
      setIsHome(false);

      setModal(null);
      navigate('/saved-news');
    } catch(error) {
      setIsLogin(false);
      setIsHome(true)
      console.error("ERROR DE LOGIN", error);
    };
  };
  
  const handleSaveArticle = async (article) => {
    console.log("guandando");
    const articleToSave = {
      keyword,
      image: article.image,
      title: article.title,
      published_at: article.published_at,
      source: article.source,
      description: article.description,
      url: article.url,
    };

    try {
      const saveArticle = await api.saveArticle(articleToSave);
      console.log("guardando " + saveArticle)

      setSavedArticles((prev) => [
        ...prev,
        saveArticle,
      ])
    } catch(error) {
      console.error("Error al guardar el articulo:", error);
      setError(
        error?.message || "No fue posible guardar la noticia."
      );
    };
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      await api.deleteArticle(articleId)

      setSavedArticles((prev) => {
        return prev.filter((article) => article._id !== articleId)
      })
    } catch(error) {
      console.error("Error al eliminar article:", error)
      setError(error?.message || "No fue posible eliminar la noticia.");
    }
  };

  function navigateToHome() {
    if (isLogin) {
      setIsHome(true);
      setAboutAuthor(true);
      setModal(null);
      return navigate('/home-save-news');
              
    } else {
      setModal(null);
      return navigate("/")
    }
    
  };

  function navigateToSavedNews() {
    if (isLogin) {
      setIsHome(false);
      setAboutAuthor(false)
      return navigate('/saved-news');
    } else {
      setModal(null);
      return navigate("/")
    }
  };

  function handleLogout() {
    localStorage.removeItem("jwt");
    setToken("");
    setSavedArticles([]);
    setRegister(false);
    setIsLogin(false);
    setIsHome(true);
    setAboutAuthor(true);
    setModal(null);
    setTitleWhite(false);
    navigate("/");
  };

  function handleCloseModal() {
    setModal(null);
    setTitleWhite(false);
    
    if (
        location.pathname === "/signin" ||
        location.pathname === "/signup" ||
        location.pathname === "/success"
    ) {
        navigate("/");
    }
  };

  const signIn = { 
    title: "Sign in",
    children: 
      <ModalSignIn 
        handleLoguin={handleLoguin}
        handleOpenModal={() => navigate("/signup")} />
  }

  const signUp = {
    title: "Sign up",
    children: 
      <ModalSignUp 
        handleRegister={handleRegister}
        handleOpenModal={() => navigate("/signin")} /> 
  }

  const registerfull = {
  title: "Registration successfully completed!",
          children: 
            <Registerffully 
              handleOpenModal={() => navigate("/signin")}
            />  
  }

  const phoneVistNoLogin = {
    title: "NewsExplorer",
    children: 
      <ModalPhoneVist
        isLogin={isLogin}
        navigateToHome={navigateToHome}
        navigateToSavedNews={navigateToSavedNews}
        handleCloseModal={handleCloseModal}
        handleLogout={handleLogout}
        handleOpenModal={
          () => {
            setModal(null);
            setTitleWhite(false);
            setIsLogin(false)
            navigate("/signin")
          }
        }/>
  }

    const phoneVistLogin = {
    title: "NewsExplorer",
    children: 
      <ModalPhoneVist  
        handleLogout={handleLogout}
        navigateToHome={navigateToHome}
        navigateToSavedNews={navigateToSavedNews}
        isLogin={isLogin}
      />
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
  
    if(!jwt) return;
  
    auth.checkToken(jwt)
      .then(() => {
        setToken(jwt);
        return api.getArticles();
      })
      .then((data) => {
        setSavedArticles(data)
        setIsLogin(true)
      })
      .catch((error) => {
        localStorage.removeItem("jwt");
        setToken("");
        setSavedArticles([]);
        setIsLogin(false);
        setAboutAuthor(false);
        navigate("/signin")
        console.error("Error al obtener usuario:", error);
      });
  }, []);


  useEffect(() => {
    if (location.pathname === "/") {
      setRegister(false)
      setIsHome(true)
      setIsLogin(false)
      setAboutAuthor(true)
      setModal(null)
    } else if (location.pathname === "/signin") {
      setModal(signIn)
      setIsHome(true)
      setRegister(false)
      setIsLogin(false)
      setAboutAuthor(true)
    } else if (location.pathname === "/signup") {
      setModal(signUp)
      setIsHome(true)
      setRegister(false)
      setIsLogin(false)
      setAboutAuthor(true)
    } else if (location.pathname === "/success") {
      setModal(registerfull)
      setIsHome(true)
      setRegister(false)
      setIsLogin(false)
      setAboutAuthor(true)
    } else if (location.pathname === "/News") {
      setIsHome(true)
      setRegister(false)
      setIsLogin(false)
      setAboutAuthor(true)    
    } else if (location.pathname === "/saved-news") {
      setRegister(true)
      setIsLogin(true)
      setIsHome(false)
      setModal(null)
      setAboutAuthor(false)
    } else if (location.pathname === "/home-save-news") {
      setIsHome(true)
      setIsLogin(true)
      setAboutAuthor(true)
    } else {
      setModal(null);
    }
  }, [location.pathname]);

  function activeModalPhoneVist() {
      {isLogin ? setModal(phoneVistLogin) : setModal(phoneVistNoLogin)};
      setTitleWhite(true);
  }



  return (
    <div className="app">
      <NavBar 
        handleCloseModal={handleCloseModal}
        handleOpenModal={() => navigate("/signin")} 
        navigateToHome={navigateToHome}
        navigateToSavedNews={navigateToSavedNews}
        register={register}
        isHome={isHome}
        isLogin={isLogin}
        activeModalPhoneVist={activeModalPhoneVist}
        handleLogout={handleLogout}
      />


      <Routes>
        <Route 
          path="/" 
          element={ 
            <>
              <NewsSearch handleSearch={handleSearch}/>
              <AboutAuthor aboutAuthor={aboutAuthor}/>
            </>
          }
        />
        <Route 
          path="/signin" 
          element={
            <>
                <NewsSearch handleSearch={handleSearch} />
                <AboutAuthor aboutAuthor={aboutAuthor} />
            </>
          }
          
        />
        <Route 
          path="/signup" 
          element={ 
            <Register 
              handleRegister={handleRegister}
            />
          }
        />
        <Route 
          path="/News" 
          element={
            <>
              <NewsSearch handleSearch={handleSearch}/>
              <NewsContext.Provider
                value={{
                  register,
                  isLogin,
                  keyword,
                  articles,
                  isLoading,
                  error,
                  isSaved,
                  isHome,
                  isLogin,
                  handleDeleteArticle,
                }}  
              >
              <SearchNewsPage />

            </NewsContext.Provider>
              <AboutAuthor aboutAuthor={aboutAuthor}/>
            </>
          }
        />
        <Route
          path="/home-save-news"
          element={
            <ProtectedRoute>
              <NewsSearch handleSearch={handleSearch}/>
              <NewsContext.Provider
                value={{
                  register,
                  isLogin,
                  keyword,
                  articles,
                  isLoading,
                  error,
                  isSaved,
                  isHome,
                  isLogin,
                  handleSaveArticle,
                  handleDeleteArticle
                }}  
              >
                <Home aboutAuthor={aboutAuthor}/>
              </NewsContext.Provider>
            </ProtectedRoute>
          }
        >

        </Route>
        <Route 
          path="/saved-news"  
          element={
            <NewsContext.Provider
              value={{
                register,
                savedArticles,
                isSaved,
                keyword,
                error,
                handleSaveArticle,
                handleDeleteArticle,
                articles,
                isLogin
              }}  
            >
              <ProtectedRoute>
                <Protected />
              </ProtectedRoute>              
            </NewsContext.Provider>
          }/>
      </Routes>
      <Footer />
      {modal && (
        <Modal
          onClose={handleCloseModal}
          title={modal.title}
          titleWhite={titleWhite}
        >
            {modal.children}
        </Modal>
      )}
    </div>
  )
}

export  { App };
