import "./Nav.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";

function Nav() {
    const cartCount = 0;
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <nav aria-label="Primary navigation">

            <button
                type="button"
                className="nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="primary-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <MdClose aria-hidden="true" /> : <MdMenu aria-hidden="true" />}
            </button>

            <ul id="primary-menu" className={isOpen ? "open" : ""}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/#menu" onClick={closeMenu}>Menu</Link></li>
                <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
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