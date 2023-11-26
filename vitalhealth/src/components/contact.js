import React from "react";
import "../css/about.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
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
          <h1 style={{ color: "lightgrey" }}> CONTACT US </h1>
        </div>

        <div className="contact-info">
          <h2
            style={{
              margin: "30px",
              marginTop: "100px",
              paddingBottom: "30px",
              borderBottom: ".3px solid black",
              fontSize:"36px"
            }}
          >
            Contact Us
          </h2>
          <div
            style={{
              margin: "30px",
              paddingBottom: "20px",
              borderBottom: ".3px solid black",
            }}
          >
            <h2>Vilantus HealthCare Private Limited</h2>
            <h3>Regd. Office : 672/A/2. Purohit Colony, Mahavir Nagar</h3>
            <h3>Amaraiwadi, Ahemdabad City, 380026, Gujarat</h3>
            <h3>India.</h3>
            <h3>Email : vilantushealthcare@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
}
