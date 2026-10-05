
import "./NavBar.css";

function NavBar() {
    return (  
        <> 
            
            <nav className="navBar">
                <h3 className="navBar__title">NewsExplorer</h3>

                <div className="navBar__buttons">
                    <input className="navBar__button-home" type="button" value="Home" />
                    <input className="navBar__button-signIn" type="button" value="Sign In" />
                </div>
        </nav>
        </>

    );
}

export { NavBar };