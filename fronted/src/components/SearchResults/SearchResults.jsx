import { NewsCard } from "./NewsCard/NewsCard";
import "./SearchResults.css";

function SearchResults({register}) {
    return ( 
        <div className="searchResults">
            <h1 className="searchResults__title">Search results</h1>

            <ul className="newsCardList">
                <NewsCard 
                    register={register}/>
                <NewsCard />
                <NewsCard />
            </ul>
            <button className="searchResults__buttonShowMore" type="button">Show more</button>
        </ div>
     );
}

export { SearchResults };