import { NewsCard } from "./Components/NewsCard/NewsCard";
import "./Main.css";

function Main() {
    return ( 
        <main className="main">
            <h1 className="main__title">Search results</h1>

            <ul className="newsCardList">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </ul>

        </main>
     );
}

export { Main };