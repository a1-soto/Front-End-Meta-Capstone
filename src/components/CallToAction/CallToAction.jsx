import "./CallToAction.css";
import heroImage from "../../assets/images/hero-img.jpg";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function CallToAction() {
  const heroImageRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroImageRef.current,
        {
          opacity: 0,
          scale: 1.1
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power3.out"
        }
      );
    });

    return () => ctx.revert();

  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <div className="hero-image">
          <img
            ref={heroImageRef}
            src={heroImage}
            alt="Chef holding a tray of bruschetta"
          />

          <div className="hero-card">
            <h3>SIGNATURE EXPERIENCE</h3>
            <p>
              "Every dish tells a story of the sun, the sea, and the Chicago soil."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}