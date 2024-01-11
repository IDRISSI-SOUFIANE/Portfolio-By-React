import "./Contact.css";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation.json";
import contactAnimation from "../../animation/contact.json";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqgqgzb");

  // if (state.succeeded) {
  //   return <h1 style={{ color: "red" }}>Your Message send it</h1>;
  // }

  return (
    <section className="contact-us">
      <h1 className="title">
        <i className="fa-solid fa-envelope"></i>
        Contact-us
      </h1>
      <p className="sub-title">
        conatct us for more information and Get notified when I publish
        something new
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex">
            <label htmlFor="email"> Email Address </label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your-Message </label>
            <textarea required type="message" name="" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting" : "Submit"}
          </button>

          {state.succeeded && (
            <p
              style={{ color: "green", fontSize: "16px", marginTop: "1.7rem" }}
              className="flex"
            >
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Your Message Send 👌
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 300, transform: "translateY(-40)" }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
