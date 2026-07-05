import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'


import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
        <Header />
        <Nav />
      </div>

      <Main />
      <Footer />
    </>
  );
}

export default App;
