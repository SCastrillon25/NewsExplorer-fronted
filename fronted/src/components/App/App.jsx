import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar";
import { NewsSearch } from "../NewsSearch/NewsSearch";
import { Main } from "../Main/Main";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";
import { Footer } from "../Footer/Footer";
import { SearchNewsPage } from "../../page/SearchNewsPage/SearchNewsPage";
import { Modal } from "../Popup/Modal";
import { ModalSignIn } from "../Popup/ModalSignIn/ModalSignIn";
import { ModalSignUp } from "../Popup/ModalSingUp/ModalSingUp"
import { Registerffully } from "../Popup/Registerffully/Registeffully";
import "./App.css";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(null);
  const [register, setRegister] = useState(true);


  useEffect(() => {
    if (location.pathname === "/signin") {
      setModal({
        title: "Sign in",
        children: 
        <ModalSignIn 
          handleOpenModal={() => navigate("/signup")}
        />
      })
    } else if (location.pathname == "/signup") {
      setModal({
        title: "Sign up",
        children: 
          <ModalSignUp  
            handleOpenModal={() => navigate("/signin")}
          />  
      })
    } else if (location.pathname == "/success") {
      setModal({
        title: "Registration successfully completed!",
        children: 
          <Registerffully 
            handleOpenModal={() => navigate("/signin")}
          />  
      })
    }
    
    else {
      setModal(null);
    }
  }, [location.pathname])

  function handleOpenModal(modalData) {
    setModal(modalData)
  };

  function handleCloseModal() {
    setModal(null);
    navigate("/");
  };



  return (
    <div className="app">
      <NavBar 
        handleOpenModal={() => navigate("/signin")} 
        register={register}
      />


      <Routes>
        <Route 
          path="/" 
          element={ 
            <>
              <NewsSearch />
              <AboutAuthor />
            </>
          }
        />
        <Route 
          path="/signin" 
          element={ 
            <>
              <NewsSearch />
              <AboutAuthor />
            </>
          }
        />
        <Route 
          path="/signup" 
          element={ 
            <>
              <NewsSearch />
              <AboutAuthor />
            </>
          }
        />
        <Route 
          path="News" 
          element={
            <>
              <NewsSearch />
              <SearchNewsPage />
              <AboutAuthor />
            </>
          }
        />
        <Route path="/account"  element={<Main />}/>
      </Routes>
      <Footer />
      {modal && (
        <Modal
          onClose={handleCloseModal}
          title={modal.title}
        >
            {modal.children}
        </Modal>
      )}
    </div>
  )
}

export  { App };
