import { useEffect, useState } from "react";
import Header from "./Components/1C-Header/Header";
import Hero from "./Components/2C-Hero/Hero";
import Main from "./Components/3C-Main/Main";
import Contact from "./Components/4C-Contact/Contact";
import Footer from "./Components/5C-Footer/Footer";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

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

      <a
        href="#up"
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "2s" }}
      >
        <button className="scroll2Top">
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </a>
    </div>
  );
}

export default App;
