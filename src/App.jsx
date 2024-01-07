import Header from "./Components/1C-Header/Header";
import Hero from "./Components/2C-Hero/Hero";
import Main from "./Components/3C-Main/Main";
import Contact from "./Components/4C-Contact/Contact";
import Footer from "./Components/5C-Footer/Footer";

function App() {
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up">
        <button className="scroll2Top">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </a>
    </div>
  );
}

export default App;
