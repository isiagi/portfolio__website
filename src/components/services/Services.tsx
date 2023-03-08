import Button from "../button/Button";
import Header from "../header/Header";
import { FaLaptopCode } from "react-icons/fa";
import { BsCloudCheckFill } from "react-icons/bs";
import { ImMobile2 } from "react-icons/im";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "./service.css";

type Props = {};

function Services({}: Props) {
  return (
    <div className="services__container">
      <Header
        text="What Services I'm Providing"
        para="Below are the services I can offer and My Fittness of a service."
      />
      <div className="middle services__wrapper">
        <div className="services__grid">
          <div className="service__item">
        <AnimationOnScroll animateIn="animate__bounceIn">
            <h2 className="service__icon">
              <FaLaptopCode />
            </h2>
            <h2 className="service__h2">Web Development</h2>
            <div className="service__group">
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" />{" "}
                Websites.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Web
                Apps and Apis.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> SEO and
                Maintaince.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Fit To
                Work.
              </p>
            </div>

            <div className="service__button">
              <Button name="Hire Me" to="/contact"/>
            </div>
          </AnimationOnScroll>
          </div>

          <div className="service__item">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <h2 className="service__icon">
              <BsCloudCheckFill />
            </h2>
            <h2 className="service__h2">Cloud Development</h2>
            <div className="service__group">
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Cloud-Native / Serverless.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> App
                Re-architecture.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Cloud
                Hosting.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Cloud
                Optimization.
              </p>
            </div>
            <div className="service__button">
              <Button name="Hire Me" to="/contact"/>
            </div>
            </AnimationOnScroll>
          </div>

          <div className="service__item">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <h2 className="service__icon">
              <ImMobile2 />
            </h2>
            <h2 className="service__h2">Mobile Development</h2>
            <div className="service__group">
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Andriod
                Mobile Apps.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> IOS
                Mobile Apps.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Mobile
                App Apis.
              </p>
              <p className="service__para">
                <HiOutlineArrowNarrowRight className="service__iconz" /> Still
                Learn But Hireable.
              </p>
            </div>
            <div className="service__button">
              <Button name="Hire Me" to="/contact"/>
            </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
