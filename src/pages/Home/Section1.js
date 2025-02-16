import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src="https://res.cloudinary.com/dh9xotzan/image/upload/v1739560674/ntrrwqf5iqud9fbei0ou.png" className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Contact</h4>
                  <h4 className="h3_lg">Now</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Thali</h1>
              <h2 className="text-white">For Every Occasion</h2>
              <p className="text-white pt-2 pb-4">  
  Weddings • Engagements • Family Events • Birthdays • Office Events • Farewells  
</p>
              <Link to="/" className="btn order_now">
              +91 7507938251
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
