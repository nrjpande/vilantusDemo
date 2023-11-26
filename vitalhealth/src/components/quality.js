import React from "react";
import "../css/about.css";
import lab1 from "../images/lab1.jpg";
import lab2 from "../images/lab2.jpg";

export default function Quality() {
  return (
    <>
      <div className="quality-container">
        <div className="about-heading">
          <h1
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              color: "orange",
            }}
          >
            ||
          </h1>
          <h1 style={{ marginRight: "30px", color: "lightgrey" }}>
            {" "}
            QUALITY ASSURANCE{" "}
          </h1>
        </div>
        <h2
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            marginLeft: "30px",
          }}
        >
          Strict Quality Control
        </h2>

        <div className="quality-info">
          <div className="quality-description" style={{ display: "flex" }}>
            <img src={lab1} alt="" />
            <div>
              <div>
                <p>
                  Our products are manufactured through best Global
                  Manufacturing Practices. Our manufacturers have world class
                  facilities and quality control. We also maintain healthy
                  relations with leading pharmaceutical manufacturers for
                  quality products.
                </p>
                <p>
                  At Vilantus HealthCare, we are strongly committed to quality
                  and accuracy from selection of raw material to
                  commercialization process. Our manufacturer uses high grade
                  raw material for producing our products sourced from trusted
                  vendors only. Also, products are manufactured using advance
                  engineering standards and latest machineries for manufacturing
                  our products. It is because of our quality standards, we are
                  able to earn a good reputation in domestic market. Each and
                  every product manufactured is well tested for quality norms
                  and standards as per market demands
                </p>
              </div>
            </div>

            <img src={lab2} alt="" />
          </div>
        </div>
        <div className="quality-info-mobile">
          <div className="quality-description">
            <img src={lab1} alt="" />
            <div>
              <div>
                <p>
                  Our products are manufactured through best Global
                  Manufacturing Practices. Our manufacturers have world class
                  facilities and quality control. We also maintain healthy
                  relations with leading pharmaceutical manufacturers for
                  quality products.
                </p>
                <p>
                  At Vilantus HealthCare, we are strongly committed to quality
                  and accuracy from selection of raw material to
                  commercialization process. Our manufacturer uses high grade
                  raw material for producing our products sourced from trusted
                  vendors only. Also, products are manufactured using advance
                  engineering standards and latest machineries for manufacturing
                  our products. It is because of our quality standards, we are
                  able to earn a good reputation in domestic market. Each and
                  every product manufactured is well tested for quality norms
                  and standards as per market demands
                </p>
              </div>
            </div>
            <img src={lab2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
