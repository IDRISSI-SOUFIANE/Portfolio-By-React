import Header from "./Components/1C-Header/Header";
import Hero from "./Components/2C-Hero/Hero";
import Main from "./Components/3C-Main/Main";
import Contact from "./Components/4C-Contact/Contact";
import Footer from "./Components/5C-Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
