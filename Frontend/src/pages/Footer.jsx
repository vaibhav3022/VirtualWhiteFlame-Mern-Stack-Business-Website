import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-white pt-5 pb-3 position-relative bg-info"
      style={{ backgroundColor: "#275b18" }}
    >
      <div className="container">
        <div className="row">
          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3 bg-dark text-white d-inline-block px-3 py-2 rounded">
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fa-solid fa-phone me-2"></i>9423390308, 9420950022
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                sales@virtualwhiteflame.com
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li>Vision & Mission</li>
              <li>Company History</li>
              <li>FAQ’S</li>
              <li>Blogs</li>
              <li>Feedback</li>
              <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Get In Touch</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fa-solid fa-map-marker-alt me-2"></i>
                Flat no.2, Plot No.1, Pushkar Apartment, Savedi, Pipeline Road,
                Ahmednagar 414003
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope me-2"></i>
                operation.virtualwhiteflame@gmail.com
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Quick Link</h5>
            <div className="d-flex gap-3 fs-4 mt-3">
              <a href="#" className="text-white" style={{ transition: "0.3s" }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white" style={{ transition: "0.3s" }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white" style={{ transition: "0.3s" }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white" style={{ transition: "0.3s" }}>
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 pt-3 border-top border-secondary">
        <small>
          © Copyright 2025{" "}
          <span className="text-danger fw-bold">Virtual White Flame PVT.LTD.</span>{" "}
          All rights reserved.
        </small>
      </div>

      {/* Floating Buttons */}
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "20px",
          zIndex: 999,
        }}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9423390308"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success rounded-circle mb-2 d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px", fontSize: "20px" }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px", fontSize: "20px" }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
}
