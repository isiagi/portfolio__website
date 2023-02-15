import img from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import img3 from "../../assets/3.svg";
import img4 from "../../assets/4.svg";
import img5 from "../../assets/5.svg";
import img6 from "../../assets/6.svg";
import img7 from "../../assets/7.svg";
import img8 from "../../assets/8.svg";
import img9 from "../../assets/9.svg";
import img10 from "../../assets/10.svg";
import img11 from "../../assets/11.svg";
import img12 from "../../assets/12.svg";
import img13 from "../../assets/13.svg";
import img14 from "../../assets/15.svg";
import img15 from "../../assets/17.svg";
import img16 from "../../assets/18.svg";
import img17 from "../../assets/19.svg";
import img18 from "../../assets/20.svg";

import "./experience.css";
import Header from "../header/Header";

function Experience() {
  return (
    <div className="exp__container">
      <div className="exp__wrapper">
        <Header
          text="Experience"
          para="Some of the tools I have use in development"
        />
        <div className="exp__flex">
          <img className="exp__img" src={img16} alt="" />
          <img className="exp__img" src={img17} alt="" />
          <img className="exp__img" src={img14} alt="" />
          <img className="exp__img" src={img15} alt="" />
          <img className="exp__img" src={img18} alt="" />
          <img className="exp__img" src={img} alt="" />
          <img className="exp__img" src={img2} alt="" />
          <img className="exp__img" src={img3} alt="" />
          <img className="exp__img" src={img4} alt="" />
          <img className="exp__img" src={img5} alt="" />
          <img className="exp__img" src={img6} alt="" />
          <img className="exp__img" src={img7} alt="" />
          <img className="exp__img" src={img8} alt="" />
          <img className="exp__img" src={img9} alt="" />
          <img className="exp__img" src={img10} alt="" />
          <img className="exp__img" src={img11} alt="" />
          <img className="exp__img" src={img12} alt="" />
          <img className="exp__img" src={img13} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
