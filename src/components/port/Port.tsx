import "./port.css"
import img1 from "../../assets/port.png";
import img2 from "../../assets/port1.png";
import img3 from "../../assets/port2.png";
import img4 from "../../assets/port3.png";
import Button from "../button/Button";
import Header from "../header/Header";

type Props = {};

function Port({}: Props) {
  return (
    <div className="port__container">
        <Header text="Portfolio" para="hello there"/>
      <div className="middle port__wrapper">
        <div className="port__grid">
          <div className="port__item">
            <div className="port__img">
              <img src={img1} alt="" />
            </div>
            <div className="port__details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                nihil iste aspernatur sit ab officia molestias excepturi iusto,
                facilis tempora laboriosam debitis?
              </p>
            </div>
            <div className="port__buttons">
              <Button name="View" />
              <Button name="GitHub" />
            </div>
          </div>
          <div className="port__item">
            <div className="port__img">
              <img src={img2} alt="" />
            </div>
            <div className="port__details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                nihil iste aspernatur sit ab officia molestias excepturi iusto,
                facilis tempora laboriosam debitis?
              </p>
            </div>
            <div className="port__buttons">
              <Button name="View" />
              <Button name="GitHub" />
            </div>
          </div>
          <div className="port__item">
            <div className="port__img">
              <img src={img3} alt="" />
            </div>
            <div className="port__details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                nihil iste aspernatur sit ab officia molestias excepturi iusto,
                facilis tempora laboriosam debitis?
              </p>
            </div>
            <div className="port__buttons">
              <Button name="View" />
              <Button name="GitHub" />
            </div>
          </div>
          <div className="port__item">
            <div className="port__img">
              <img src={img4} alt="" />
            </div>
            <div className="port__details">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                nihil iste aspernatur sit ab officia molestias excepturi iusto,
                facilis tempora laboriosam debitis?
              </p>
            </div>
            <div className="port__buttons">
              <Button name="View" />
              <Button name="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Port;
