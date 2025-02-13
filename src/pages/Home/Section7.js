import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>Delicious & High-Quality Food!</h2>
            <p>
              Freshly prepared dishes with the finest ingredients, ensuring  
              taste, hygiene, and a memorable dining experience for all  
              occasions.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: +91 7507938251
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
