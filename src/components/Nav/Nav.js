import "./Nav.css"
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

function Nav() {
    const cartCount = 0;

    return (
        <nav aria-label="Primary navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li>
                    <span className="nav-link-disabled" aria-disabled="true" title="Coming soon">
                        Order online
                    </span>
                </li>
                <li>
                    <span className="nav-cart nav-link-disabled" aria-disabled="true" title="Coming soon">
                        <MdShoppingBasket aria-hidden="true" className="nav-basket-icon" />
                        {cartCount > 0 && (
                            <span className="cart-badge" aria-hidden="true">{cartCount}</span>
                        )}
                    </span>
                </li>
                <li>
                    <span className="nav-login nav-link-disabled" aria-disabled="true" title="Coming soon">
                        Login
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;