import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../../components/button/Button";
import Min from "../../components/min/Min";
import Port from "../../components/port/Port";

type Props = {};

function Portfolio({}: Props) {
  return (
    <div className="portfolio__container">
      <div className="portfolio__wrapper">
        <Min name="Portfolio"/>
        <div className="port__buttons">
          <Button name="Projects" to="/portfolio/projects" />
          <Button name="YouTube" to="/portfolio/youtube" />
        </div>
        <div className=" middle portk">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
