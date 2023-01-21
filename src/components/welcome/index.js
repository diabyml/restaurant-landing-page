import React from "react";
import WelcomeImage from "../../assets/img/welcome-img-2.png";
import Button from "../button";

// stylesheet
import "./style.scss";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="wrapper">
        <div className="welcome-section__content">
          <div className="welcome-section__text flow-content">
            <div className="flow-content">
              <span className="section-subtitle">Welcome</span>
              <h2 className="welcome-section__title section-title">
                Welcome to Figo <span>Restaurant</span>
              </h2>
            </div>
            <p>
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <p>
              Quickly predominate standards compliants architectures and
              prospective internal or "organic" sources. Synergistically mesh
              quality quality vectors for one-to-one leadership.
            </p>
            <div>
              <Button variant="primary">Explore Our Story</Button>
            </div>
          </div>
          <div className="welcome-section__image-container">
            <img className="responsive-img" src={WelcomeImage} alt="Welcome" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
