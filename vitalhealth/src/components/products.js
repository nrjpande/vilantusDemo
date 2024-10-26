import React from "react";
import "../css/about.css";
import p1 from "../products/p1.jpg";
import p2 from "../products/p2.jpg";
import p3 from "../products/p3.jpg";
import p4 from "../products/p4.jpg";
import p5 from "../products/p5.jpg";
// import p6 from "../products/p6.png";
// import p7 from "../products/p7.png";
// import p8 from "../products/p8.png";
// import p9 from "../products/p9.png";
// import p10 from "../products/p10.png";
// import p11 from "../products/p11.png";
// import p12 from "../products/p12.png";
// import p13 from "../products/p13.png";
// import p14 from "../products/p14.png";
// import p15 from "../products/p15.png";
// import p16 from "../products/p16.png";
// import p17 from "../products/p17.png";
// import p18 from "../products/p18.png";
// import p19 from "../products/p19.png";
// import p20 from "../products/p20.png";
// import p21 from "../products/p21.png";

export default function Products() {
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
          <h1 style={{ color: "lightgrey" }}> PRODUCTS </h1>
        </div>

        <div className="product-info">
          <img src={p1} alt="p1" />
          <img src={p2} alt="p1" />
          <img src={p3} alt="p1" />
          <img src={p4} alt="p1" />
          <img src={p5} alt="p1" />
          {/* <img src={p6} alt="p1" />
          <img src={p7} alt="p1" />
          <img src={p8} alt="p1" />
          <img src={p9} alt="p1" />
          <img src={p10} alt="p1" />
          <img src={p11} alt="p1" />
          <img src={p12} alt="p1" />
          <img src={p13} alt="p1" />
          <img src={p14} alt="p1" />
          <img src={p15} alt="p1" />
          <img src={p16} alt="p1" />
          <img src={p17} alt="p1" />
          <img src={p18} alt="p1" />
          <img src={p19} alt="p1" />
          <img src={p20} alt="p1" />
          <img src={p21} alt="p1" /> */}
        </div>
      </div>
    </>
  );
}
