import "./Header.css";
import logoIcon from '../../assets/images/logo-icon.png';
import logoText from '../../assets/images/logo-text.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" aria-label="Little Lemon home" className="logo-link">
                <div className="logo-group">
                    <img
                        src={logoIcon}
                        alt=""
                        className="logo-icon"
                    />

                    <img
                        src={logoText}
                        alt=""
                        className="logo-text"
                    />
                </div>
            </Link>
        </header>
    );
}

export default Header;