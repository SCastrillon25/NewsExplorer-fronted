import closeIcon from "../../assets/icon-close.svg"
import "./Modal.css"

function Modal({children, title, onClose}) {
    return ( 
        <div className="modal">
            <div className="modal__container">
                <button 
                    className="modal__button-close" 
                    type="button"
                    onClick={onClose}                    
                >
                    <img className="modal__button__icon-close" src={closeIcon}/>
                </button>
                <h4 className="modal__title">{title}</h4>
                {children}
            </div>
            
        </div>
     );
}

export { Modal };