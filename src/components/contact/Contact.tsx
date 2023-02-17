import { ImMobile2 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

import "./contact.css";
import Button from "../button/Button";
import Min from "../min/Min";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="contact__container">
      <Min name="Contact" />
      <div className="middle contact__wrapper">
        <img src="" alt="" />
        <div className="contact__grid">
          <div className="contact__item">
            <ImMobile2 className="contact__icon" />
            <h3 className="contact__detail">+256777963365</h3>
            <p className="contact__lo">Monday - Friday from 7am - 5pm</p>
          </div>
          <div className="contact__item">
            <GoLocation className="contact__icon" />
            <h3 className="contact__detail">Kampala, Uganda</h3>
            <p className="contact__lo">Central Division</p>
          </div>
          <div className="contact__item">
            <HiOutlineMail className="contact__icon" />
            <h3 className="contact__detail">isiagigeofrey0@gmail.com</h3>
            <p className="contact__lo">Contact me every time!</p>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <div className="form__div">
          <div className="form__head">
            <h2 className="form__title">Get In Touch</h2>
            <div className="form__link"></div>
          </div>

          <form>
            <div className="form__inputz">
              <input
                type="text"
                className="form__input"
                placeholder="Enter your name"
              />
              <br />
              <input
                type="email"
                className="form__input"
                placeholder="Enter your email"
              />
              <br />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="form__input"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <Button name="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
