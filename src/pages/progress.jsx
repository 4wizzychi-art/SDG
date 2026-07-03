import React from "react";
import Broadband from "../Components/broadband";
import CountUp from "react-countup";
import Carding from "../Components/carding";
import { FaChartLine, FaLightbulb } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
// import Button from "../Components/button";
// import { BiSolidRightArrowAlt } from "react-icons/bi";

const Progress = () => {
  return (
    <div
      style={{
// backgroundColor:"black",
background:"radial-gradient(circle,rgba(199, 199, 199, 1) 11%, rgba(247, 247, 247, 1) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
        overlay: "black",
      }}
    >
      <div className="container">
        <h1
          className="align-items-center d-flex justify-content-center mb-5 pt-4"
          style={{
            fontSize: "50px",
            color: "white",
          }}
        >
          Mobile Broadband Coverage
        </h1>

        <div>
          <div className="g-0 align-items-center d-flex flex-column ">
            <h2
              style={{
                color: "white",
              }}
            >
              People offline:
            </h2>
            <CountUp
              end={2600000000}
              duration={2}
              style={{
                fontSize: "50px",
                fontFamily: "fantasy",
                color: "#F36D25",
              }}
            />
          </div>

          <div>
            <div className="row g-0 mt-5 d-flex justify-content-between align-items-center mb-5">
              <div className="col-md-3 d-flex flex-column align-items-center">
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Global Internet Users:
                </h2>
                <CountUp
                  end={68}
                  prefix="%"
                  duration={2}
                  style={{
                    fontSize: "40px",
                    fontFamily: "fantasy",
                color: "#F36D25",
                  }}
                />
              </div>

              <div className="col-md-3 d-flex flex-column align-items-center">
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Global Offline Population:
                </h2>
                <CountUp
                  end={32}
                  prefix="%"
                  duration={2}
                  style={{
                    fontSize: "40px",
                    fontFamily: "fantasy",
                color: "#F36D25",
                  }}
                />
              </div>

              <div className="col-md-5 d-flex flex-column align-items-center">
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  Connectivity Rates For Least Developed Countries:
                </h2>
                <CountUp
                  end={33.7}
                  prefix="%"
                  duration={2}
                  style={{
                    fontSize: "40px",
                    fontFamily: "fantasy",
                color: "#F36D25",
                  }}
                />
              </div>
            </div>
          </div>
        </div>


        <div className="text-center py-5">
  <h2 style={{ color: "#F36D25" }}>Why These Numbers Matter</h2>

  <p
    className="mx-auto"
    style={{
      maxWidth: "900px",
      color: "white",
      fontSize: "18px",
      lineHeight: "1.8",
    }}
  >
    Access to reliable internet infrastructure is a key driver of innovation,
    education, and economic growth. Although global connectivity has improved
    significantly over the last decade, billions of people still remain
    disconnected from the digital world. This digital divide limits access to
    online education, healthcare services, employment opportunities, and
    financial inclusion.
  </p>

  <p
    className="mx-auto"
    style={{
      maxWidth: "900px",
      color: "white",
      fontSize: "18px",
      lineHeight: "1.8",
    }}
  >
    The challenge is particularly severe in Least Developed Countries (LDCs),
    where internet penetration rates remain far below the global average.
    Expanding broadband infrastructure and making internet access affordable
    are essential steps toward achieving Sustainable Development Goal 9:
    Industry, Innovation, and Infrastructure.
  </p>
</div>
        


        <Broadband className="align-items-center d-flex justify-content-center" />
        <Row className="mt-5 g-3">
          <Col md={6}>
            <Carding cardTitle="2.0%+" className="target_card">
              <FaLightbulb
                style={{
                  fontSize: "110px",
                  color: "#ffcc00",
                }}
              />
              <h5>Global R&D Spending</h5>
              <p>
                Research and development spending now exceeds 2% of global GDP.
              </p>
            </Carding>
          </Col>

          <Col md={6}>
            <Carding cardTitle="< 1%" className="target_card">
              <FaChartLine
                style={{
                  fontSize: "110px",
                  color: "#ff6600",
                }}
              />
              <h5>Nigeria R&D Spending</h5>
              <p>
                Nigeria invests less than 1% of GDP in research and development.
              </p>
            </Carding>
          </Col>
        </Row>


<section className="py-5">
  <div className="container">
    <h2
      className="text-center mb-4"
      style={{ color: "#F36D25" }}
    >
      Key Takeaways
    </h2>

    <ul className="g-4"
      style={{
        color: "white",
        fontSize: "18px",
        lineHeight: "2",
      }}
    >
      <li>
        Internet connectivity has reached 68% globally, but billions remain
        excluded.
      </li>

      <li>
        Least Developed Countries continue to face major infrastructure gaps.
      </li>

      <li>
        Increased investment in research and development drives innovation and
        industrial growth.
      </li>

      <li>
        Closing the digital divide is critical for achieving SDG 9 and ensuring
        inclusive economic development.
      </li>

      <li>
        Strong infrastructure creates opportunities for education, employment,
        healthcare, and entrepreneurship.
      </li>
    </ul>
  </div>
</section>
        

<section className="py-5 text-center">
  <h2 style={{ color: "#F36D25" }}>
    Building a Connected Future
  </h2>

  <p
    className="mx-auto"
    style={{
      maxWidth: "900px",
      color: "white",
      fontSize: "18px",
      lineHeight: "1.8",
    }}
  >
    Achieving SDG 9 requires collaboration between governments, businesses,
    researchers, and individuals. Investments in digital infrastructure,
    innovation, and sustainable industries can help bridge connectivity gaps
    and create opportunities for millions of people around the world.
  </p>
</section>

      </div>
<Footer />
    </div>
  );
};

export default Progress;
