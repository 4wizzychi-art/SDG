import React from "react";
import progress_bg from "../images/progress_bg.jpg";
import Broadband from "../Components/broadband";
import CountUp from "react-countup";
import Carding from "../Components/carding";
import { FaChartLine, FaLightbulb } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Components/button";
import { BiSolidRightAlt } from "react-icons/bi";

const Progress = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${[progress_bg]})`,
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
          className="align-items-center d-flex justify-content-center mb-5"
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
                    color: "black",
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
                    color: "black",
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
                    color: "black",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Broadband className="align-items-center d-flex justify-content-center" />
        <Row className="mt-5">
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

        
        <Row className=" g-3">
          <Col md={6}>
          <Link
            to="/target"
            className="align-items-center d-flex justify-content-center py-5"
            style={{
              textDecorationLine: "none",
            }}
          >
            <Button
              className="info_btn"
              style={{
                // backgroundColor:"white",
                color: "#F36D25",
              }}
              fontsize="20px"
              padding="9px 40px"
              btncolor="#F36D25"
              bgradius="32px"
            >
              Back to Targets?
              <BiSolidRightAlt className="info_arrow" />
            </Button>
          </Link>
          </Col>
         <Col md={6}>
          <Link
            to="/action"
            className="align-items-center d-flex justify-content-center py-5"
            style={{
              textDecorationLine: "none",
            }}
          >
            <Button
              className="info_btn"
              style={{
                // backgroundColor:"white",
                color: "#F36D25",
              }}
              fontsize="20px"
              padding="9px 40px"
              btncolor="#F36D25"
              bgradius="32px"
            >
              Actions Taken
              <BiSolidRightAlt className="info_arrow" />
            </Button>
          </Link>
         </Col>

        </Row>
      </div>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Spread the Message</h2>

          <p>Share SDG 9 with your friends and network.</p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button className="btn btn-primary">Facebook</button>

            <button className="btn btn-info">X</button>

            <button className="btn btn-secondary">LinkedIn</button>

            <button className="btn btn-success">Copy Link</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
