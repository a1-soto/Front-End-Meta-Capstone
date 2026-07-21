import "./Footer.css";
import logo from "../../assets/images/logo.jpg";

import { useRef, useState } from "react";
import { useGsapMatchMedia } from "../../hooks/useGsapMatchMedia";
import { Link } from "react-router-dom";

import { MdLocationOn, MdPhone, MdEmail, MdShare } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    const footerRef = useRef(null);
    const [linkCopied, setLinkCopied] = useState(false);

    useGsapMatchMedia(
        footerRef,
        (gsap, ScrollTrigger) => {
            gsap.fromTo(
                footerRef.current.querySelector("[data-animate]"),
                { opacity: 0, y: 30 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        },
        []
    );

    async function handleShare() {
        const shareData = {
            title: "Little Lemon Restaurant",
            text: "Check out Little Lemon, a Mediterranean restaurant in Chicago!",
            url: window.location.origin,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error al compartir:', error);
                }
            }
        }
        else {
            await navigator.clipboard.writeText(shareData.url);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        }
    }

    return (
        <footer ref={footerRef}>
            <div className="container footer-content" data-animate="true">

                <div className="footer-brand">
                    <Link to="/" aria-label="Little Lemon home">
                        <img src={logo} alt="Little Lemon logo" />
                    </Link>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <nav aria-label="Footer navigation">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#menu">Menu</Link></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-column">
                    <h3>Contact</h3>
                    <address>
                        <p>

                            <MdLocationOn aria-hidden="true" className="contact-icon" />
                            Chicago, IL
                        </p>
                        <p>
                            <MdPhone aria-hidden="true" className="contact-icon" />
                            (123) 456-7890
                        </p>
                        <p>
                            <MdEmail aria-hidden="true" className="contact-icon" />
                            info@littlelemon.com
                        </p>
                    </address>
                </div>

                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="footer-social">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook (opens in a new tab)"
                        >
                            <FaFacebook aria-hidden="true" className="social-icon" />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram (opens in a new tab)"
                        >
                            <FaInstagram aria-hidden="true" className="social-icon" />

                        </a>

                        <button
                            type="button"
                            className="footer-share-button"
                            onClick={handleShare}
                            aria-label="Share this website"
                        >
                            <MdShare aria-hidden="true" className="social-icon" />
                            <span className="share-label">{linkCopied ? "Link copied!" : "Share"}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        © {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.
                    </p>
                    <p>Designed &amp; developed as part of the Meta Front-End Developer Capstone.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;