import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Use useLocation to track the current route
   // Function to scroll to the bottom of the page
   const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/menu"
                className={location.pathname === "/menu" ? "active-link" : ""}
              >
                Our Menu
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/shop"
                className={location.pathname === "/shop" ? "active-link" : ""}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className={location.pathname === "/blog" ? "active-link" : ""}
              >
                Blog
              </Nav.Link> */}
              {/* Updated Contact link to scroll to the bottom */}
              <Nav.Link
                as={Link}
                onClick={scrollToBottom} // Trigger scroll to bottom on click
                className={location.pathname === "/contact" ? "active-link" : ""}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom CSS */}
      <style jsx>{`
        .active-link {
          color: #f7be27 !important; /* Highlight color */
          font-weight: bold;
        }

        header .navbar {
          background-color: #fff;
          transition: all 0.3s ease;
        }

        header .navbar.sticky {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 999;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo img {
          max-width: 150px;
        }

        .navbar-nav .nav-link {
          font-size: 1.1rem;
          margin-right: 1.5rem;
          color: #333;
          transition: color 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: #f7be27;
        }

        @media (max-width: 768px) {
          .navbar-nav .nav-link {
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
