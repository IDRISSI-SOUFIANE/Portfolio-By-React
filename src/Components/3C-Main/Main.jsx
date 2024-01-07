import "./Main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">all-project</button>
        <button>HTML & CSS</button>
        <button>JAVASCRIPT</button>
        <button>REACT & MUI</button>
      </section>
      <section className="flex right-section">
        {["1", "2", "3", "4", "5", "6"].map((item) => (
          <article className="card" key={item}>
            <img width={266} src="/public/1.jpg" alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1 className="titke">Landin Page 2</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                explicabo.
              </p>

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
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
