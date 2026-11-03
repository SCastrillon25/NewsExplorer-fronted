import { useContext} from "react";
import { NewsContext } from "../../contexts/NewsContext";
import { Preloader } from "../../components/Preloader/Preloader";
import { NotFound } from "../../components/NotFound/NotFound";
import { SearchResults } from "../../components/SearchResults/SearchResults";


function SearchNewsPage() {

const {keyword, isLoading, register, isHome, articles, error } = useContext(NewsContext);

if (isLoading) {
    return <Preloader />
}

if (articles.length === 0) {
    <NotFound />
}

    return ( 
        <>          
            <SearchResults 
                register={register}
                articles={articles}
                keyword={keyword}
                isHome={isHome}
            />
        </>
     );
}

export { SearchNewsPage };