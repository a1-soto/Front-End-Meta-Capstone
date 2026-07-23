import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { useRef } from "react";
import { useGsapMatchMedia } from "./hooks/useGsapMatchMedia";

function App() {
  const navbarRef = useRef(null);

  useGsapMatchMedia(
    navbarRef,
    (gsap) => {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
             clearProps: "transform",
        }
      );
    },
    []
  );

  return (
    <>
       <div className="navbar">
        <div className="container" ref={navbarRef} data-animate="true">
          <Header />
          <Nav />
        </div>
      </div>

      <Main />

      <Footer />
    </>
  );
}

export default App;