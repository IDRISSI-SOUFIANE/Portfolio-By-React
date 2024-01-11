import { useState, useEffect } from "react";
import "./Main.css";

import { AnimatePresence, motion } from "framer-motion";

import data from "./data.json";

const allMyProjects = data[0].ALLPROJECTS;
const HTMLCSS = data[1].HTMLCSS;
const JS = data[2].JS;
const REACT = data[3].REACT;

const Main = () => {
  const [change, setChange] = useState("all");

  const [projects, setProjects] = useState(allMyProjects);

  console.log(projects);

  // useEffect(() => {
  //   const buttons = document.querySelectorAll("section > button");
  //   console.log(buttons);

  //   buttons.forEach((button) => {
  //     button.addEventListener("click", function (e) {
  //       // console.log(button);
  //       buttons.forEach((ele) => {
  //         ele.classList.remove("active");
  //       });
  //       e.currentTarget.classList.add("active");
  //     });
  //   });
  // }, []);

  // const changeClicked = () => {
  //   if (change == true) {
  //     setChange(false);
  //   } else {
  //     setChange(true);
  //   }
  // };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setChange("all");
            setProjects(allMyProjects);
          }}
          className={change == "all" ? "active" : null}
        >
          all-project
        </button>
        <button
          onClick={() => {
            setChange("HTML&CSS");
            setProjects(HTMLCSS);
          }}
          className={change == "HTML&CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            setChange("JS");
            setProjects(JS);
          }}
          className={change == "JS" ? "active" : null}
        >
          JAVASCRIPT
        </button>
        <button
          onClick={() => {
            setChange("REACT");
            setProjects(REACT);
          }}
          className={change == "REACT" ? "active" : null}
        >
          REACT & MUI
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              className="card"
              key={project.id}
            >
              <img width={266} src={project.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{project.name}</h1>
                <p className="sub-title">{project.desc}</p>

                <div className="icons flex">
                  <div style={{ gap: "11px" }} className="flex">
                    <i className="link fa-solid fa-link"></i>
                    <i className="github fa-brands fa-github"></i>
                  </div>
                  <a
                    href="#"
                    className="flex"
                    style={{ alignItems: "center", gap: "5px" }}
                  >
                    more
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
