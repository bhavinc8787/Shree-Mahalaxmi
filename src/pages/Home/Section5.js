import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.gif";
import StoreGoogle from "../../assets/shop/googleplay.gif";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";
import Logo from "../../assets/logo/logo.png";

function Section5() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Follow Us On Social Media</h4>
              <h2>save up to 10%</h2>
              <p>
                Book your catering for weddings, birthdays, or corporate events and  
                enjoy exclusive discounts. Experience delicious food, quality service,  
                and unforgettable moments at the best prices.
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-1" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-2" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-3" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-4" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-5" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-6" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-7" />
                    </div>
                    <div className="brand_img">
                      <img src={Logo} className="img-fluid" alt="brand-8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
