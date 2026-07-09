import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'


import './App.css';

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
