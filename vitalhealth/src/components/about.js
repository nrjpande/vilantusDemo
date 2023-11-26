import React from "react";
import "../css/about.css";
import logoImage from "../images/Logo.png";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-heading">
          <h1
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              color: "orange",
            }}
          >
            ||{" "}
          </h1>
          <h1 style={{ marginRight: "30px", color: "lightgrey" }}> ABOUT US</h1>
        </div>
        <div>
          <div className="about-description">
            <div>
              <p>
                Vilantus was incorporated as Vilantus HealthCare Private Limited
                in 2023 is a pharma marketing organization launched by
                professionals who have experience and expertise in pharma
                business.
              </p>
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <div className="about-us-logo">
                <div>
                  <p>
                    <strong>
                      Vilantus HealthCare Private Limited appoints Business
                      Executives, who are graduates basically in science,
                      pharmacy mainly.
                    </strong>
                  </p>
                  <p>
                    They make customer contacts (Retailer, Stockiest and
                    Distributors) and make orders and sales for the brands.
                    Through the appointment of Area Managers and Regional
                    managers the field team and the business in these markets
                    are managed.
                  </p>
                </div>
                <div>
                  <img src={logoImage} alt="vilantus_logo" />
                </div>
              </div>
              <p>
                Even though we are a young organization in this pharma business,
                Field management, Sales and inventory management are through
                automated systems built up for the exclusive use of Vilantus
                Pharma Private Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
