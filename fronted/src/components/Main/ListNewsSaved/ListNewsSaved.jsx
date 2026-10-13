import { NewsCard } from "../../SearchResults/NewsCard/NewsCard";


function ListNewsSaved() {
    return ( 
        <div className="listNews">
            <div>

            </div>

            <ul className="listNews__saved">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </ul>
            <button className="main__buttonShowMore" type="button">Show more</button>
        </div>
     );
}

export { ListNewsSaved };