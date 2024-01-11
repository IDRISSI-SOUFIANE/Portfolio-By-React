/* eslint-disable react/no-unescaped-entities */
import "./Hero.css";

import Lottie from "lottie-react";
import developer from "../../animation/developer.json";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            src="/images/me.png"
            alt="me"
            className="avatar"
          />
          <i className="check fa-regular fa-circle-check"></i>
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}
        >
          I'm SOUFIANE IDRISSI I'm Front-End-Developer
        </motion.h1>

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

      <div className="right-section animation">
        <Lottie
          className="contact-animation"
          style={{ height: 350, transform: "translateY(-40)" }}
          animationData={developer}
        />
      </div>
    </section>
  );
};

export default Hero;
