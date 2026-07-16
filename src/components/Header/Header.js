import "./Header.css"
import logo from '../../assets/images/logo.jpg'

function Header() {
    return (
        <header>
            <a href="/" aria-label="Little Lemon home">
                <img src={logo} alt="Little Lemon logo" />
            </a>
        </header>
    );
}
export default Header;