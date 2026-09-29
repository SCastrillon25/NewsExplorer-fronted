import { NavBar } from "../components/NavBar/NavBar";
import { NewsSearch } from "../components/NewsSearch/NewsSearch";
import { AboutAuthor } from "../components/AboutAuthor/AboutAuthor";
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      
      <NewsSearch />

      <AboutAuthor />
    </>
  )
}

export default App
