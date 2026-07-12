import "./Carousel.css";
import { useRef } from "react";

export default function Carousel({ children }) {

  const scrollRef = useRef(null);

  return (
    <div className="carousel">

      <div
        className="carousel-scroll"
        ref={scrollRef}
      >
        {children}
      </div>

    </div>
  );
}