import iconLogout from "../../assets/logout.svg";

function NavBar({ handleOpenModal, register }) {
    return (  
        <> 
            
            <nav className={!register ? "navBar" : "navBar-darck-style"}>
                <h3 className={ !register ? "navBar__title" : "navBar__title-darck-style"}>NewsExplorer</h3>

                <div className="navBar__buttons">
                    <input 
                        className={!register ? "navBar__button-home" : "navBar__button-home-darck-style"}
                        type="button" 
                        value="Home" />

                    {!register ? <button 
                            className="navBar__button-signIn"  
                            type="button" 
                            value="Sign In" 
                            onClick={handleOpenModal}    
                            >Sign in 
                        </button> : <button 
                            className={!register ? "navBar__button-saved" : "navBar__button-saved-darck-style" }
                            type="button" 
                            onClick={handleOpenModal}    
                            >Saved article
                        </button>
                    }
                    
                    {register && <button 
                        className={!register ? "navBar__button navBar___button-logout" : "navBar__button-logout-darck-style"} 
                        type="button"  
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

export { NavBar };