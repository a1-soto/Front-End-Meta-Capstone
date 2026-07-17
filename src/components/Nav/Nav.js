import "./Nav.css"
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

function Nav() {
    const cartCount = 0;

    return (
        <nav aria-label="Primary navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order online</Link></li>
                <li>
                    <Link to="/cart" className="nav-cart" aria-label={`Shopping cart, ${cartCount} items`}>
                        <MdShoppingBasket aria-hidden="true" className="nav-basket-icon" />
                        {cartCount > 0 && (
                            <span className="cart-badge" aria-hidden="true">{cartCount}</span>
                        )}
                    </Link>
                </li>

                <li><Link to="/login" className="nav-login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;