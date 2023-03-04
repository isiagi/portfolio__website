import { Outlet } from "react-router-dom";
import Button from "../../components/button/Button";
import Min from "../../components/min/Min";
import DownloadButton from "../../components/button/DownloadButton";

import "./portfolio.css"
import React from "react";

type Props = {};

function Portfolio({}: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio__container">
      <Min name="Portfolio" />
      <div className="middle portfolio__wrapper">
        <div className="portz__buttons">
          <Button name="Projects" to="/portfolio/projects" />
          <Button name="YouTube" to="/portfolio/youtube" />
          <DownloadButton
            name="Download CV"
            to="/files/Geofrey_Isiagi_CV (8).pdf"
          />
        </div>
        <div className="portk">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
