import { NavBar } from "../components/NavBar/NavBar";
import { NewsSearch } from "../components/NewsSearch/NewsSearch";
import { AboutAuthor } from "../components/AboutAuthor/AboutAuthor";
import { Footer } from "../components/Footer/Footer";


function App() {

  return (
    <>
      <NavBar />
      
      <NewsSearch />

      <AboutAuthor />

      <Footer />
    </>
  )
}

export  { App };
