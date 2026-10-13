import imageNews from "../../../assets/imageNews.jpg";
import bookmarkIcon from "../../../assets/bookmark.svg";
import trashIcon from "../../../assets/trash.svg";
import "./NewsCard.css";

function NewsCard({register}) {
    return ( 
        <li className="newsCard">
            <img className="newsCard__image" src={imageNews} alt="image-news" />
            {register && <p>Naturaleza</p>}
            
            <button 
                className="newsCard__button" 
                type="button">
                    <img 
                        src={!register ? bookmarkIcon : trashIcon}
                        className="newsCard__button__image" ></img>
                
            </button>
            <p className="newsCard__hover">{!register ? "Sign in to save article" : "Removed from saved"}</p>
            <div className="newsCard__date">fecha</div>
            <div className="newsCard__titleNews">
                Everyone Needs a Special 'Sit Spot' in Nature
            </div>
            <div className="newsCard__news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Animi, labore ad? Ullam maxime quasi eum, reiciendis 
                velit magnam iusto necessitatibus quibusdam distinctio repellendus aspernatur asperiores 
                voluptas mollitia consequuntur deserunt inventore!
            </div>
            <div className="newsCard__reference">Reference</div>
        </li>
     );
}

export { NewsCard };