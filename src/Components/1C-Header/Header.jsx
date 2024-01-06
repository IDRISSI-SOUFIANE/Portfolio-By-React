import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

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

      <button className="mode">
        <span>
          <i className="icon-moon-o fas fa-duotone fa-moon"></i>
        </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal border">
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
