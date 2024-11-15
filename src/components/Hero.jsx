import React from "react";
import hero_1 from "../assets/hero_1.jpg";
import pizza_webp from "../assets/pizza.webp";
import "./hero.css";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <div
        className="hero__container"
        style={{
          backgroundImage: `url(${hero_1})`,
          height: "65vh",
          width: "100%",
          zIndex: "100",
        }}
      >
        {/* <img src={hero_1} alt="" /> */}
        <div className="hero__overlay">
          <h1>
            Shame on Hunger <span> Food Recipe </span>Finder
          </h1>
          <marquee behavior="scroll" direction="left" className="scroll__text">
            <p className="marquee__text">
              You Can Please Your Soul and Tummy with Delicious Food Recipes of
              all Cuisine
            </p>
          </marquee>
          <div className="rotating__pizza">
            <img src={pizza_webp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
