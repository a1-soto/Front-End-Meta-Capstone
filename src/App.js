import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function App() {
  const navbarRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="container" ref={navbarRef}>
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