import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentTheme") || "dark"
  );

  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        className="menu"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <i className="icon-menu fa-solid fa-bars"></i>
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Cotact</a>
          </li>
        </ul>
      </nav>

      <button
        className="mode"
        onClick={() => {
          // SEND VALUE TO LS
          localStorage.setItem(
            "currentTheme",
            theme == "dark" ? "light" : "dark"
          );
          // GET VALUE TO LS
          setTheme(localStorage.getItem("currentTheme"));
        }}
      >
        <span>
          {/* <i className="icon-moon-o fas fa-duotone fa-moon"></i> */}
          {theme == "dark" ? (
            <i className="icon-moon-o fas fa-duotone fa-moon"></i>
          ) : (
            <i className="icon-sun fa-solid fa-sun"></i>
          )}
        </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="icon-clear"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">User</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
