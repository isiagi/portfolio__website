import React from "react";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Min from "../../components/min/Min";
import Services from "../../components/services/Services";

type Props = {};

function AboutPage({}: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <Min name="About"/>
        <About Notpage={true}/>
        <Experience />
        <Services />
      </div>
    </div>
  );
}

export default AboutPage;
