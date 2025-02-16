import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    acceptTerms: false,
  });

  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      setNotification("You must accept the terms to proceed.");
      return;
    }

    emailjs
      .send("service_usjd53g", "template_9aey5ji", formData, "1QTyWl9bCO8phmxy1")
      .then(() => {
        setNotification("Email sent successfully! We will contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          topic: "",
          message: "",
          acceptTerms: false,
        });
      })
      .catch(() => {
        setNotification("Something went wrong. Please try again.");
      });
  };

  const handleWhatsAppRedirect = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message || !formData.acceptTerms) {
      setNotification("Please fill out all fields and accept the terms.");
      return;
    }

    const whatsappMessage = `Hello, I am ${formData.firstName} ${formData.lastName}. Here are my details:\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nTopic: ${formData.topic}\nMessage: ${formData.message}`;
    const phoneNumber = "917507938251";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="Contact" style={{ padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#fff8e1" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "18px", color: "#2e7d32" }}>Get In Touch</p>
        <h2 style={{ color: "#fbc02d" }}>Contact Me</h2>
        <p style={{ fontSize: "16px", color: "#4f4f4f" }}>Feel free to reach out for inquiries, collaborations, or feedback!</p>
      </div>
      <form style={{ maxWidth: "500px", margin: "auto" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              minWidth: "120px",
            }}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              minWidth: "120px",
            }}
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="">Select One...</option>
          <option value="Feedback">Feedback</option>
          <option value="Inquiry">Inquiry</option>
          <option value="Collaboration">Collaboration</option>
        </select>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <label style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
          <span style={{ marginLeft: "5px" }}>I accept the terms</span>
        </label>
        <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={handleEmailSubmit}
            style={{
              flex: "1",
              padding: "10px",
              backgroundColor: "#fbc02d",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              minWidth: "140px",
            }}
          >
            <FaEnvelope style={{ marginRight: "5px" }} /> Email
          </button>
          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            style={{
              flex: "1",
              padding: "10px",
              backgroundColor: "#2e7d32",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              minWidth: "140px",
            }}
          >
            <FaWhatsapp style={{ marginRight: "5px" }} /> WhatsApp
          </button>
        </div>
      </form>
      {notification && <p style={{ marginTop: "15px", textAlign: "center", color: "#d32f2f" }}>{notification}</p>}
    </section>
  );
}
