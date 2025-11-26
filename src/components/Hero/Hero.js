import React from "react";
import "./Hero.scss";
import character from "../../assets/images/hero/character.png";
import bulb from "../../assets/images/hero/bulb.png";
import planet from "../../assets/images/hero/planet.png";
import cloud from "../../assets/images/hero/cloud.png"

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <img src={cloud} alt="cloud" className="hero-cloud1" />
      <img src={cloud} alt="cloud" className="hero-cloud2" />
      <img src={cloud} alt="cloud" className="hero-cloud3" />

      <div className="hero-content">
        <div className="text-bulb">
          <div>We Provide Smart Business  Solutions</div> <img src={bulb} className="floating bulb" alt="bulb" /> 
        </div>
        <p>
          Grow your Business With Us Best Business Solutions
        </p>
      </div>

      <div className="hero-images">
        <img src={character} alt="character" className="main-character" />
        <img src={planet} className="floating planet" alt="planet" />
      </div>
    </section>
  );
};

export default Hero;
