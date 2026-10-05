import imageFondo from "../../assets/fondo.jpg";
import "./NewsSearch.css";

function NewsSearch() {
    return (
        

        <div className="newsSearch">
            <div className="newsSearch__container-fondo">
                 <img className="newsSearch__container-fondo__img" src={imageFondo} alt="fondo" />
            </div>
           
            <div className="newsSearch__search">
                <h1>What's going on in the world?</h1>
                <h2>Find the latest news on any topic and save them in your personal account.</h2>

                <form>
                    <input type="text" />
                    <input type="submit" />
                </form>
            </div>
            

        </div>
      );
}

export { NewsSearch };