import "./Header.css"
import logo from '../../assets/images/logo.jpg'

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon logo" />
        </header>
    );

}
export default Header;