import React from "react";
import Header from "../header/Header";
import DownloadButton from "../button/DownloadButton";
import aboutImage from "../../assets/about_isiagi_geofrey.jpg";

import "./about.css";
import Button from "../button/Button";

type Props = {
  Notpage?: boolean;
};

function About({ Notpage }: Props) {
  return (
    <div className="about__container">
      <div className="middle about__wrappeer">
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
            {Notpage ? (
              <Button name="Learn More" />
            ) : (
              <DownloadButton
                name="Download CV"
                to="/files/Geofrey_Isiagi_CV (8).pdf"
              />
            )}
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
