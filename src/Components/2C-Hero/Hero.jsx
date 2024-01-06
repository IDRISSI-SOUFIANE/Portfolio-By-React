/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="/public/me.png" alt="me" className="avatar" />
          <i className="check fa-regular fa-circle-check"></i>
        </div>

        <h1 className="name">I'm SOUFIANE IDRISSI I'm Front-End-Developer</h1>

        <p className="sub-title">
          hi i am Soufiane Idrissi I am front end developer, and I have many
          skills and I guarantee you am fulfilling my duty to the best of my
          ability
        </p>

        <div className="icons flex">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>

      <div className="right-section animation border">right-section</div>
    </section>
  );
};

export default Hero;
