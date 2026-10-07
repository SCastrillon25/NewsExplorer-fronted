import { NavBar } from "../NavBar/NavBar";
import { NewsSearch } from "../NewsSearch/NewsSearch";
import { Main } from "../Main/Main";
import { AboutAuthor } from "../AboutAuthor/AboutAuthor";
import { Footer } from "../Footer/Footer";
import "./App.css";


function App() {

  return (
    <div className="app">
      <NavBar />
      
      <NewsSearch />

      <Main />

      <AboutAuthor />

      <Footer />
    </div>
  )
}

export  { App };
