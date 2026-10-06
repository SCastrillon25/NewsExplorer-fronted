import { NavBar } from "../components/NavBar/NavBar";
import { NewsSearch } from "../components/NewsSearch/NewsSearch";
import { AboutAuthor } from "../components/AboutAuthor/AboutAuthor";
import { Footer } from "../components/Footer/Footer";
import "./App.css";


function App() {

  return (
    <div className="app">
      <NavBar />
      
      <NewsSearch />

      <AboutAuthor />

      <Footer />
    </div>
  )
}

export  { App };
