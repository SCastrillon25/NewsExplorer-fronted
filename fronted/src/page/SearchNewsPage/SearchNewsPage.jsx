import { useNavigate } from "react-router-dom";
import { Preloader } from "../../components/Preloader/Preloader";
import { NotFound } from "../../components/NotFound/NotFound";
import { SearchResults } from "../../components/SearchResults/SearchResults";


function SearchNewsPage({register}) {

    return ( 
        <>
              <Preloader />
              <NotFound />
              <SearchResults register={register}/>
        </>
     );
}

export { SearchNewsPage };