import { NavBar } from "../NavBar/NavBar";
import { NewsSearch } from "../NewsSearch/NewsSearch";
import { Main } from "../Main/Main";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";
import { Footer } from "../Footer/Footer";
import { Preloader } from "../Preloader/Preloader";
import "./App.css";
import { NotFound } from "../NotFound/NotFound";


function App() {

  return (
    <div className="app">
      <NavBar />
      
      <NewsSearch />

      <Preloader />
      <NotFound />

      <Main />

      <AboutAuthor />

      <Footer />
    </div>
  )
}

export  { App };
