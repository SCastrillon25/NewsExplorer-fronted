import { Link } from "react-router-dom";
import iconLogout from "../../../assets/logout.svg";
import "./NavBar.css";

function NavBarLogged({ handleOpenModal, register }) {
    return (  
        <> 
            
            <nav className="navBar">
                <h3 className="navBar__title">NewsExplorer</h3>

                <div className="navBar__buttons">
                    <input 
                        className="navBar__button-home" 
                        type="button" 
                        value="Home" />

                    {!register ? <button 
                            className="navBar__button-signIn" 
                            type="button" 
                            value="Sign In" 
                            onClick={handleOpenModal}    
                            >Sign in 
                        </button> : <button 
                            className="navBar__button-signIn" 
                            type="button" 
                            value="Sign In" 
                            onClick={handleOpenModal}    
                            >Saved article
                        </button>
                    }
                    
                    {register && <button 
                        className="navBar__button-signIn" 
                        type="button" 
                        value="Sign In" 
                        onClick={handleOpenModal}    
                    >Elise
                    <img src={iconLogout} />
                    </button>
                    }
                </div>
        </nav>
        </>

    );
}

export { NavBarLogged };