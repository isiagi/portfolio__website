import "./hero.css"
import heroImage from "../../assets/me.jpg";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="hero__container">
      <div className="middle hero__wrapper">
        <div className="hero__first">
          <h1 className="hero__h1">I am Geofrey Isiagi Am a Developer</h1>
          <p className="hero__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctusnec ullamcorper mattis, pulvinar dapibus leop
            llamcorper, lorem ipsum.
          </p>
          <Button name="Learn More"/>
         
        </div>
        {/* <div className="hero__second">
          <img src={heroImage} alt="hero_isiagi_geofrey.jpg" />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;

// *165*1*01*774002535*46112*age 35*pin23456#
