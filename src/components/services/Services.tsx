import Button from "../button/Button";
import Header from "../header/Header";
import { FaLaptopCode } from "react-icons/fa";
import { BsCloudCheckFill } from "react-icons/bs";
import { ImMobile2 } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "./service.css";

type Props = {};

function Services({}: Props) {
  return (
    <div className="services__container">
      <Header
        text="What Services I'm Providing"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="middle services__wrapper">
        <div className="services__grid">
          <div className="service__item">
            <h2 className="service__icon">
              <FaLaptopCode />
            </h2>
            <h2 className="service__h2">Web Development</h2>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>

            <div className="service__button">
              <Button name="Hire Me" />
            </div>
          </div>

          <div className="service__item">
            <h2 className="service__icon">
              <BsCloudCheckFill />
            </h2>
            <h2 className="service__h2">Cloud Development</h2>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <div className="service__button">
              <Button name="Hire Me" />
            </div>
          </div>

          <div className="service__item">
            <h2 className="service__icon">
              <ImMobile2 />
            </h2>
            <h2 className="service__h2">Mobile Development</h2>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <p className="service__para">
              <HiOutlineArrowNarrowRight className="service__iconz"/> Lorem ipsum dolor sit amet.
            </p>
            <div className="service__button">
              <Button name="Hire Me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
