import "./App.css";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="container">
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