import "./Contact.css";

const Contact = () => {
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

      <div className="flex">
        <form className="" action="">
          <div className="flex">
            <label htmlFor="email"> Email Address </label>
            <input required type="email" name="" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your-Message </label>
            <textarea required type="message" name="" id="message"></textarea>
          </div>

          <button className="submit"> Submit</button>
        </form>

        <div className="border animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
