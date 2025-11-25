import React from "react";
import "./SectionContact.scss";
import lady from "../../assets/images/contact/lady-illustration.png";

const SectionContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-image">
          <img src={lady} alt="lady working" />
        </div>

        <div className="contact-form">
          <h2>
            Ready to Work Together <br /> In New Projects ?
          </h2>

          <form>
            <input type="text" placeholder="Your Name*" />
            <input type="email" placeholder="Your Email*" />
            <textarea placeholder="Your Message*"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default SectionContact;
