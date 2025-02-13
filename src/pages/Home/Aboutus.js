import React, { useState } from "react";
import "../../styles/HomeStyle.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Section1 from "./Section1";

// Import images
import Owner from "../../assets/about/DSC05453.jpg";
import Owne from "../../assets/gallery/DSC05460.jpg";
import DSC05460 from "../../assets/gallery/DSC05460.jpg";
import DSC05444 from "../../assets/gallery/DSC05444.jpg";
import DSC05446 from "../../assets/gallery/DSC05446.jpg";
import DSC05424 from "../../assets/gallery/DSC05424.jpg";
import DSC05422 from "../../assets/gallery/DSC05422.jpg";
import DSC05470 from "../../assets/gallery/DSC05470.jpg";
import DSC05475_1 from "../../assets/gallery/DSC05475_1.jpg";

// Sample images for gallery (Replace with actual image URLs)
const galleryImages = [
  DSC05460,
  DSC05444,
  DSC05446,
  DSC05424,
  DSC05422,
  DSC05470,
  DSC05475_1,
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      <Header />
      <Section1 />
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "2rem 1rem" }}>
        {/* About Us Section */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#f7be27" }}>About Us</h2>
          <p style={{ fontSize: "1.1rem", color: "#555", fontFamily: "Roboto, sans-serif" }}>
            Welcome to <strong>Shree Mahalaxmi Caterers</strong>, where we serve delicious and high-quality food for all occasions.
            With years of experience in catering, we ensure that every event is special and memorable.
          </p>
        </div>

        {/* Image Section */}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <img
            src={Owne}
            alt="Catering Service"
            className="owner-image"
          />
        </div>

        {/* Owner's Contribution Section */}
        <div
          style={{
            background: "#fff5db",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
            position: "relative",
            maxWidth: "900px", // Adjusted width for lg screens
            margin: "auto",
          }}
        >
          <img
            src={Owner}
            alt="Charulata Prohit"
            className="owner-avatar"
          />
          <h4 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#642f21", marginTop: "40px" }}>Charulata Prohit</h4>
          <p style={{ fontSize: "1rem", color: "#777", fontWeight: "500", marginBottom: "1rem" }}>Founder & Social Worker</p>
          <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
            Charulata Prohit, fondly known as Sonu Tai, is the visionary behind Shree Mahalaxmi Caterers.
            With a deep commitment to women empowerment, she has worked tirelessly with various foundations to uplift underprivileged communities,
            particularly tribal groups. Her work goes beyond catering, as she actively supports initiatives that focus on social welfare.
          </p>
        </div>

        {/* Explore Our Memories - Image Scroller */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "#642f21" }}>Explore Our Memories</h3>
          <p style={{ fontSize: "1rem", color: "#777", marginBottom: "1.5rem" }}>
            Relive our best moments and celebrations through our gallery.
          </p>

          {/* Carousel */}
          <div className="carousel-container">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="carousel-image"
            />
            <button
              onClick={prevImage}
              className="carousel-button prev-button"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="carousel-button next-button"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <Footer />

      {/* Custom CSS */}
      <style jsx>{`
        .owner-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 10px;
        }

        .owner-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 4px solid #f7be27;
          object-fit: cover;
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }

        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: auto;
        }

        .carousel-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
          font-size: 24px;
          border-radius: 50%;
        }

        .prev-button {
          left: 10px;
        }

        .next-button {
          right: 10px;
        }

        @media (max-width: 768px) {
          .carousel-image {
            height: 250px;
          }

          .carousel-container {
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default About;
