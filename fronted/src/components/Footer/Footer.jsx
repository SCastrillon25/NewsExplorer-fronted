import logoFace  from "../../assets/face.svg";
import logoGit from "../../assets/github.svg";

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <p>&copy; 2026 Supersite. Powered by News API</p>
            </div>
            <div className="footer__container">
                <p>Home</p>
                <p>Practicum by Yandex</p>
                <img src={logoGit} alt="logoGit" />
                <img src={logoFace} alt="logoFace" />
            </div>
        </footer>
    );
}

export { Footer };