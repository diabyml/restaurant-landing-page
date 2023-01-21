import React from "react";

import "./style.scss";

import Image from "../../assets/img/humberger.png";
import Button from "../button";

function HistorySection() {
  return (
    <section className="history-section">
      <div className="wrapper">
        <div className="history-section__content split">
          <div className="text-container">
            <div className="headings flow-content">
              <h3 className="section-subtitle">History of Figo</h3>
              <h3 className="section-title">
                We Cook Tradition & Family Recipes
              </h3>
            </div>
            <div className="paragraphs flow-content">
              <p>
                Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.
              </p>
              <p>
                Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources.
              </p>
            </div>
            <div className="btn-container">
              <Button variant="primary">Explore Our Story</Button>
            </div>
          </div>
          <div>
            <img className="responsive-img" src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
