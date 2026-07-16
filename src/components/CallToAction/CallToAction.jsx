import "./CallToAction.css";
import heroImage from "../../assets/images/hero-img.jpg";

import { useRef } from "react";
import { useGsapMatchMedia } from "../../hooks/useGsapMatchMedia";

export default function CallToAction() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroCardRef = useRef(null);

  useGsapMatchMedia(
    heroRef,
    (gsap) => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      timeline.fromTo(
        headlineRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1 }
      );

      timeline.fromTo(
        [subtitleRef.current, paragraphRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.5"
      );

      timeline.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1 },
        "-=0.4"
      );

      timeline.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.5"
      );

      timeline.fromTo(
        heroCardRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "<"
      );
    },
    []
  );

  return (
    <section className="hero" ref={heroRef} data-animate="true">
      <div className="container">
        <div className="hero-text">
          <h1 ref={headlineRef}>Little Lemon</h1>
          <h2 ref={subtitleRef}>Chicago</h2>
          <p ref={paragraphRef}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <button ref={buttonRef} disabled aria-disabled="true">
            Reserve a Table
          </button>
        </div>

        <div className="hero-image">
          <img
            ref={heroImageRef}
            src={heroImage}
            alt="Chef holding a tray of bruschetta"
          />

          <div className="hero-card" ref={heroCardRef}>
            <h3>SIGNATURE EXPERIENCE</h3>
            <blockquote>
              <p>
                "Every dish tells a story of the sun, the sea, and the Chicago soil."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}