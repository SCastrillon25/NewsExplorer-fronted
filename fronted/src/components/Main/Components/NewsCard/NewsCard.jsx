import imageNews from "../../../../assets/imageNews.jpg";
import "./NewsCard.css";

function NewsCard() {
    return ( 
        <li className="newsCard">
            <img className="newsCard__image" src={imageNews} alt="image-news" />
            <button className="newsCard__button" type="button"></button>
            <div className="newsCard__date">fecha</div>
            <div className="newsCard__news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Animi, labore ad? Ullam maxime quasi eum, reiciendis 
                velit magnam iusto necessitatibus quibusdam distinctio repellendus aspernatur asperiores 
                voluptas mollitia consequuntur deserunt inventore!
            </div>
        </li>
     );
}

export { NewsCard };