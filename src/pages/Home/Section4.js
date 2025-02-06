import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Catering Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like great food</h2>
              <p>
                Whether it's a wedding, family gathering, or corporate event, 
                our catering service ensures a delightful dining experience with 
                flavors that leave a lasting impression.
              </p>
              <ul>
                <li>
                  <p>
                    Freshly prepared dishes, customized to suit your occasion 
                    and guest preferences.
                  </p>
                </li>
                <li>
                  <p>High-quality ingredients, ensuring taste and hygiene.</p>
                </li>
                <li>
                  <p>
                    Professional service, on-time delivery, and an unforgettable 
                    culinary experience for all your events.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
