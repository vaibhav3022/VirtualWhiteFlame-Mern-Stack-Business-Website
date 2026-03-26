import { API_URL } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ClientTestimonials() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get(`${API_URL}/client_api`);
    setClient(result.data.da[0]); // Only 1 record
  };

  return (
    <div
      style={{
        backgroundColor: "#063b00",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT SIDE */}
          <div className="col-md-6">
            <h2
              className="fw-bold mb-5"
              style={{ fontSize: "45px", color: "#fff" }}
            >
              Clients Testimonials
            </h2>

            {/* Client Logo */}
            {client && (
              <div className="mb-4">
                <img
                  src={`${API_URL}/${client.client_logo}`}
                  alt="Client Logo"
                  style={{ width: "90px" }}
                  className="img-fluid"
                />
              </div>
            )}

            {/* Testimonial Text */}
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.9",
                maxWidth: "550px",
                color: "#ffffff",
              }}
            >
              {client ? client.client_desc : "Loading..."}
            </p>

            {/* Client Name */}
            <h5
              className="fw-bold mt-4"
              style={{ fontSize: "20px", letterSpacing: "0.5px" }}
            >
              {client && client.client_name}
            </h5>

            <p style={{ color: "#cccccc", fontSize: "16px", marginTop: "5px" }}>
              {client && client.client_add}
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-md-6 text-center position-relative d-flex justify-content-center align-items-center">
            
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, rgba(0,80,0,0.6) 0%, rgba(6,59,0,1) 80%)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            ></div>

            {/* Machine Image */}
            {client && (
              <img
                src={`${API_URL}/${client.client_img}`}
                alt="Client Machine"
                className="img-fluid"
                style={{
                  maxWidth: "420px",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
