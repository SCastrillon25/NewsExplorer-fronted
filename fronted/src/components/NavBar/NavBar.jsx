import iconLogout from "../../assets/logout.svg";
import iconLogoutBlack from "../../assets/logout.png";
import iconMenu from "../../assets/menu.png";
import iconMenuDarck from "../../assets/menu-darck.png";

function NavBar({ handleOpenModal, register, isHome, isLogin, navigateToHome, navigateToSavedNews, activeModalPhoneVist, handleLogout }) {


    return (  
        <>             
            <nav className={isHome && isLogin ? "navBar" : "navBar-darck-style"}>
                <h3 className={isHome ? "navBar__title" : "navBar__title-darck-style"}>NewsExplorer</h3>

                <div className="navBar__buttons">
                    <button
                        className={isHome ? "navBar__button-home" : "navBar__button-home-darck-style"}
                        type="button" 
                        value="Home"
                        onClick={navigateToHome}
                        >
                    Home
                    </button>

                    {!register ? <button 
                            className="navBar__button-signIn"  
                            type="button" 
                            value="Sign In" 
                            onClick={handleOpenModal}    
                            >Sign in 
                        </button> 
                        : <button
                            className={isHome ? "navBar__button-saved" : "navBar__button-saved-darck-style" }
                            type="button" 
                            onClick={navigateToSavedNews}    
                            >Saved article
                        </button>
                    }


                    
                    {register && <button 
                        className={isHome ? "navBar__button-logout" : "navBar__button-logout-darck-style"}
                        type="button"  
                        onClick={handleLogout}    
                    >Elise
                    <img className="navBar___button-logout-ion" src={register && isHome ? iconLogout : iconLogoutBlack} />
                    </button>
                    }
                </div>
                <button 
                    className="navBar__button-phoneVist"
                    onClick={activeModalPhoneVist}>
                    <img src={isHome ? iconMenu : iconMenuDarck} alt="icon-menu" />
                </button>
        </nav>
        </>

    );
}

export { NavBar };