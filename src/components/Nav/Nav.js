import "./Nav.css"
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation: para saber si ya estamos en Home
import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";
import { navLinks } from "../../constants/navigation";

function Nav() {
    const cartCount = 0;
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    function closeMenu() {
        setIsOpen(false);
    }

    function handleAnchorClick(e, path) {
        if (!path.includes("#")) return;

        const id = path.split("#")[1];

        if (location.pathname === "/") {
            e.preventDefault();
            closeMenu();
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            });
        }

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
                {navLinks.map((link) => (
                    <li key={link.label}>
                        {link.disabled ? (
                            <span className="nav-link-disabled" aria-disabled="true" title="Coming soon">
                                {link.label}
                            </span>
                        ) : (
                            <Link
                                to={link.path}
                                onClick={(e) => {
                                    handleAnchorClick(e, link.path); // maneja el caso de ancla
                                    closeMenu(); // siempre cierra el menú mobile, sea ancla o no
                                }}
                            >
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}

                <li>
                    <span className="nav-cart nav-link-disabled" aria-disabled="true" title="Coming soon">
                        <MdShoppingBasket aria-hidden="true" className="nav-basket-icon" />
                        {cartCount > 0 && (
                            <span className="cart-badge" aria-hidden="true">{cartCount}</span>
                        )}
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;