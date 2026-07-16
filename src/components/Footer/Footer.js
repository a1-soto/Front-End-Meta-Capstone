import "./Footer.css";
import logo from "../../assets/images/logo.jpg";

import { useRef } from "react";
import { useGsapMatchMedia } from "../../hooks/useGsapMatchMedia";

function Footer() {

    const footerRef = useRef(null);

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

    return (
        <footer ref={footerRef}>
            <div className="container footer-content" data-animate="true">
                <a href="/" aria-label="Little Lemon home">
                    <img src={logo} alt="Little Lemon logo" />
                </a>

                <nav aria-label="Footer navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                    </ul>
                </nav>

                <address>
                    <p>Chicago, IL</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@littlelemon.com</p>
                </address>

                <div className="footer-social">
                    <a href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook (opens in a new tab)"
                    >
                        Facebook
                    </a>

                    <a href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram (opens in a new tab)"
                    >
                        Instagram
                    </a>
                </div>
            </div >
        </footer >
    );
}

export default Footer;