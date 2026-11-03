import iconLogout from "../../../assets/logout.svg";
import "./NavBar.css";

function NavBarLoged({ handleOpenModal, register, navigateToHome, isLogin }) {

    return (  
        <>             
                    <nav className={!register ? "navBar" : "navBar-darck-style"}>
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
                                className={!register ? "navBar__button navBar___button-logout" : "navBar__button-logout-darck-style"} 
                                type="button"  
                                onClick={handleOpenModal}    
                            >Elise
                            <img className="navBar___button-logout-ion" src={register && isHome ? iconLogout : iconLogounBlack} />
                            </button>
                            }
                        </div>
                        <button className="navBar__button-phoneVist">
                            <img src={iconMenu} alt="icon-menu" />
                        </button>
                </nav>
                </>
        

    );
}

export { NavBarLoged };