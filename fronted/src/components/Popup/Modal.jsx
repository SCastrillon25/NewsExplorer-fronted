import closeIcon from "../../assets/icon-close.svg"
import "./Modal.css"

function Modal({children, title, onClose, titleWhite}) {
    return ( 
        <div className="modal">
            <div className={titleWhite ? "modal__container-black" : "modal__container"}>
                <button 
                    className={titleWhite ? "modal__button-close-container-black" : "modal__button-close"}
                    type="button"
                    onClick={onClose}                    
                >
                    <img className="modal__button__icon-close" src={closeIcon}/>
                </button>
                <h4 className={titleWhite ? "modal__title-white" : "modal__title"}>{title}</h4>
                {children}
            </div>
            
        </div>
     );
}

export { Modal };