import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    try {
      const result = await axios.get("http://localhost:1000/service_api");
      setServices(result.data.da); // save API data into state
      console.log(result.data.da);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <>
      {/* ===== Inline Styles ===== */}
      <style>
        {`
          .services-heading {
            color: #0b6623;
            font-weight: 700;
            text-align: center;
            margin: 40px 0 20px;
          }
          .service-title {
            color: #0b6623;
            font-weight: 600;
            font-size: 1.25rem;
          }
          .service-desc {
            color: #555;
            font-size: 0.95rem;
          }
          .view-details {
            color: #ff6600;
            font-weight: 600;
            text-decoration: none;
          }
          .view-details:hover {
            text-decoration: underline;
          }
          .hero-img {
            width: 100%;
            height: auto;
          }
        `}
      </style>

      <Hero />

      {/* ===== SERVICES SECTION ===== */}
      <div className="container mb-5">
        <h2 className="services-heading">Services</h2>

        <div className="row mb-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 mb-4">
              <div className="row">
                <div className="col-4 col-md-3">
                  <img
                    src={`http://localhost:1000/${service.img}`}
                    alt={service.heading}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-8 col-md-9">
                  <h5 className="service-title">{service.heading}</h5>
                  <p className="service-desc">{service.desc}</p>
                  <a href="#" className="view-details">
                    {service.view}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
