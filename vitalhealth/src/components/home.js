import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/Carousel.css";
import "../css/home.css";
import images1 from "../images/images1.jpg";
import images2 from "../images/images2.jpg";
import images3 from "../images/images3.jpg";
import images4 from "../images/images4.jpg";
import images5 from "../images/images5.jpg";
import images6 from "../images/images6.jpg";
import images7 from "../images/images7.jpg";

const images = [images1, images2, images3, images4, images5, images6, images7];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [aspirationView, setAspirationView] = useState(true);
  const [qualityView, setQualityView] = useState(false);
  const [BPAView, setBPAView] = useState(false);

  const toggleAspirationView = () => {
    if (aspirationView === false) {
      setAspirationView(true);
      setBPAView(false);
      setQualityView(false);
    }
  };

  const toggleQualityView = () => {
    if (qualityView === false) {
      setAspirationView(false);
      setBPAView(false);
      setQualityView(true);
    }
  };

  const toggleBPAView = () => {
    if (aspirationView === false) {
      setAspirationView(false);
      setBPAView(true);
      setQualityView(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <>
      <div className="carousel-container">
        <FaChevronLeft className="arrow left-arrow" onClick={handlePrev} />
        <TransitionGroup className="image-container">
          <CSSTransition key={index} timeout={500} classNames="fade">
            <img src={images[index]} alt={`slide-${index}`} id="fadeImage" />
          </CSSTransition>
        </TransitionGroup>
        <FaChevronRight className="arrow right-arrow" onClick={handleNext} />

        <div className="dots-container">
          {images.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${dotIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(dotIndex)}
            />
          ))}
        </div>
      </div>
      <div className="firm-information">
        <div className="information">
          <div className="who-we-are">
            <div>
              <span class="material-symbols-outlined">emergency</span>
            </div>
            <div>
              <h2>Who we are?</h2>
              <p>
                Our Company was incorporated as Vilantus HealthCare Private
                Limited in 2023. We are a fast growing Pharmaceutical company
                engaged in marketing broad range of pharmaceutical products in
                India.
              </p>
            </div>
          </div>

          <div className="what-we-are">
            <div>
              {" "}
              <span class="material-symbols-outlined">description</span>
            </div>
            <div>
              <h2> What we are? </h2>
              <p>
                Our core strength lies in marketing pharmaceutical products
                which we commercialize through our marketing infrastructure
                across geographies. These products are manufactured by our
                partners having world class infrastructure and quality.
              </p>
            </div>
          </div>

          <div className="why-vilantus">
            <div>
              <span class="material-symbols-outlined">open_with</span>
            </div>
            <div>
              <h2> Why Vilantus? </h2>
              <p>
                At Vilantus HealthCare Private Limited we partner with
                manufacturers who adopt current Global Manufacturing Practices
                at their manufacturing plants. We also maintain healthy
                relations with leading pharmaceutical manufacturers.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-usp">
          <div className="about-us">
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ marginRight: "20px", color: "red" }}>|| </h2>
              <h2> About Us</h2>
            </div>
            <div>
              <p>
                Vilantus HealthCare Private Limited is a pharma marketing
                organization launched by professionals who have vast experience
                and expertise in pharma business.
                <p>
                  Vilantus HealthCare Private Limited appoints Business
                  Executives, who are graduates basically in science, pharmacy
                  mainly. They make customer contacts (Retailer, Stockiest and
                  Distributors) and make orders and sales for the brands.
                  Through the appointment of Area Managers and Regional managers
                  the field team and the business in these markets are managed.
                  <p>
                    Even though we are a young organization in pharma business,
                    Field management, Sales and inventory management are through
                    automated systems built up for the exclusive use of Vilantus
                    HealthCare Private Limited.
                  </p>
                </p>
              </p>
            </div>
          </div>
          <div className="our-usp">
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <h2 style={{ marginRight: "20px", color: "red" }}>||</h2>
              <h2>Why Choose Us?</h2>
            </div>
            <div>
              <h3 onClick={toggleAspirationView}>
                {aspirationView ? (
                  <span class="material-symbols-outlined">remove</span>
                ) : (
                  <span class="material-symbols-outlined">add</span>
                )}
                Aspiration
              </h3>
              {aspirationView && (
                <p>
                  To become an organization answering to the highest standards
                  of professionalism, Vilantus HealthCare Private Limited
                  aspires to deliver value through high quality pharmaceutical
                  products and build strong brands across therapy segments. This
                  can be achieved through our scientifically supported segments
                  and processes, and strong implementation capabilities. Quality
                  Standards Business Process Analysis
                </p>
              )}
              <h3 onClick={toggleQualityView}>
                {qualityView ? (
                  <span class="material-symbols-outlined">remove</span>
                ) : (
                  <span class="material-symbols-outlined">add</span>
                )}
                Quality Standards
              </h3>
              {qualityView && (
                <p>
                  Our products are manufactured through best Global
                  Manufacturing Practices. Our manufacturers have world class
                  facilities and quality control. We also maintain healthy
                  relations with leading pharmaceutical manufacturers for
                  quality products.
                </p>
              )}

              <h3 onClick={toggleBPAView}>
                {BPAView ? (
                  <span class="material-symbols-outlined">remove</span>
                ) : (
                  <span class="material-symbols-outlined">add</span>
                )}
                Business Process Analysis
              </h3>
              {BPAView && (
                <p>
                  <p>
                    <strong>What it is –</strong>
                  </p>
                  Analyzing the work your company needs to accomplish, and
                  defining the most efficient, accurate, and intelligent
                  processes to perform those tasks.
                  <p>
                    <p>
                      <strong>What's in it for you – </strong>
                    </p>
                    Defines true business drivers, industry fundamentals, and
                    best business practices for your core businesses Organizes
                    and automates the steps necessary to generate content for
                    maximum use, access, and value
                  </p>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
