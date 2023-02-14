import React from "react";
import Header from "../header/Header";
import aboutImage from "../../assets/about_isiagi_geofrey.jpg";

import "./about.css";
import Button from "../button/Button";

type Props = {};

function About({}: Props) {
  return (
    <div className="about__container">
      <div className="middle about__wrappeer">
        <Header
          text="About Me"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__h2 para1">
              Developing With a Passion While Exploring The World.
            </h2>
            <div className="about__all">
              <div className="about__text1">
                <p className="about__para para1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
                <p className="about__para para1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="about__text2">
                <p className="about__para para1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="about__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <Button name="Learn More" />
          </div>
          <div className="about__image">
            <img src={aboutImage} alt="hero_isiagi_geofrey.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
