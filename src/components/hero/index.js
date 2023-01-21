import React from "react";
import Input from "../input";

import "./style.scss";

import heroImage from "../../assets/img/hero-image.png";
import Button from "../button";

function HeroSection() {
  return (
    <section className="hero-section bg-primary">
      <div className="wrapper">
        <div className="hero-section__content split ai-center">
          <div className="hero-section__text flow-content">
            <h1 className="hero-section__heading heading-lg">
              All in Good Taste <span>Food With Figo.</span>
            </h1>
            <p className="text-lg">
              Quickly predominate standard compliant architecture and may have
              prospective internal or organic sources.
            </p>
            <div className="hero-section__search-box">
              <Input placeholder="Enter your address" />
              <Button variant="primary">Get started</Button>
            </div>
          </div>
          <div>
            <img
              className="hero-section__img responsive-img"
              src={heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
