import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Wedding Catering",
    paragraph: `Exquisite catering for weddings, offering a wide range of delicious dishes to make your special day memorable. Experience premium service and flavors your guests will love.`,
  },
  {
    image: Salad,
    title: "Quality Food",
    paragraph: `We use the finest ingredients to craft meals that bring people together. Perfect for family gatherings, birthdays, and celebrations of all sizes.`,
  },
  {
    image: Delivery,
    title: "On-Time Service",
    paragraph: `Timely and professional catering for office events, corporate meetings, and special occasions. Fresh, flavorful, and delivered with care.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>Food tastes better when you enjoy it on all occasions</h2> 
            <p>  
              Serving delicious meals for every occasion, bringing flavors that  
              create lasting memories. From weddings to office events, we make  
              every gathering special with our finest dishes.  
            </p> 
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
