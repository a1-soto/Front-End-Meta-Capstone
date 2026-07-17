import "./Header.css"
import logo from '../../assets/images/logo.jpg'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" aria-label="Little Lemon home">
                <img src={logo} alt="Little Lemon logo" />
            </Link>
        </header>
    );
}
export default Header;