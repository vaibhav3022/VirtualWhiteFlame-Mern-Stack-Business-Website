import React from "react";


export default function NewsBlogs() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h2
        className="text-center fw-bold mb-5"
        style={{ color: "#E97300", fontSize: "2.5rem" }}
      >
        News & Blogs
      </h2>

      <div className="row">
        {/* Left Side Large Blog */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div
            className="position-relative"
            style={{
              borderTop: "6px solid #008000",
              borderLeft: "6px solid #008000",
              display: "inline-block",
            }}
          >
            <img
              src="./assets/blog1.webp"
              alt="Biomass fuels"
              className="img-fluid w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <h5 className="mt-3 fw-bold text-success">
            BIOMASS FUELS OVER FOSSIL FUELS
          </h5>
          <button
            className="btn mt-4 fw-bold"
            style={{
              backgroundColor: "#009E4F",
              color: "#fff",
              borderRadius: "50px",
              padding: "10px 40px",
            }}
          >
            VIEW ALL
          </button>
        </div>

        {/* Right Side Two Blogs */}
        <div className="col-lg-6 col-md-12">
          {/* Blog 1 */}
          <div className="d-flex mb-4">
            <div
              className="me-3 position-relative"
              style={{
                borderTop: "6px solid #008000",
                borderLeft: "6px solid #008000",
              }}
            >
              <img
                src="./assets/blog2.webp"
                alt="Biofuel"
                className="img-fluid"
                style={{ width: "200px", height: "130px", objectFit: "cover" }}
              />
            </div>
            <div>
              <h6
                className="fw-bold"
                style={{ color: "#003400", lineHeight: "1.5rem" }}
              >
                HOW BIOMASS RESIDUE AND BIOFUEL-RECYCLE WASTE BY BRIQUETTES AND
                PELLETS WORKS
              </h6>
              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                📅 10 Oct 2024
              </p>
              <a
                href="#"
                className="fw-bold"
                style={{ color: "#009E4F", fontSize: "14px" }}
              >
                READ MORE »
              </a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="d-flex">
            <div
              className="me-3 position-relative"
              style={{
                borderTop: "6px solid #008000",
                borderLeft: "6px solid #008000",
              }}
            >
              <img
                src="./assets/blog3.webp"
                alt="Biomass Briquette"
                className="img-fluid"
                style={{ width: "200px", height: "130px", objectFit: "cover" }}
              />
            </div>
            <div>
              <h6
                className="fw-bold"
                style={{ color: "#003400", lineHeight: "1.5rem" }}
              >
                THE FUTURE OF BIOMASS BRIQUETTE..
              </h6>
              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>
                📅 09 Oct 2024
              </p>
              <a
                href="#"
                className="fw-bold"
                style={{ color: "#009E4F", fontSize: "14px" }}
              >
                READ MORE »
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
