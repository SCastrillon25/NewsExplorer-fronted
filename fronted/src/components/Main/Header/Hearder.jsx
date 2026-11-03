import { useContext } from "react";
import { NewsContext } from "../../../contexts/NewsContext";

function Header() {
    const {savedArticles = []} = useContext(NewsContext);
    return (  
        <header className="header">
            <h4 className="header__first-title">Saved articles</h4>
            <h1 className="header__second-title">Elise, you have {savedArticles.length} saved articles</h1>
            <h3 className="header__third-title">By keywords: 
                <span className="header__third-title-keywords">{
                    savedArticles.length === 0 
                        ? "without keywords"
                        : (() => {
                            const categories = [
                                ...new Set(savedArticles.map((article) => article.category))
                            ];
                            if (categories.length <= 2) {
                                return categories.join("and");
                            }
                            return `${categories[0]}, ${categories[1]}, and ${categories.length -2} others`
                        })
                }
                </span></h3>
        </header>
    );
}

export { Header };