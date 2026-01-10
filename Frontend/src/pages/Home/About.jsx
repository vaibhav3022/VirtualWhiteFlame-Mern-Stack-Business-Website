import React from "react";

export default function About() {
  return (
    <>
      <section className="container">
        <div className="row">
       
          {/* LEFT IMAGE SECTION */}
          <div className="col-md-6 d-flex justify-content-center mb-5 mt-5">
            <img
              src="/assets/aboutus.webp"
              alt="Briquettes"
              style={{
                width: "500px",
                height: "420px",
                borderRadius: "14px",
                border: "4px solid #E57B25",
                objectFit: "cover",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* RIGHT TEXT SECTION */}
          <div
            className="col-md-6 bg-light mt-5"
            style={{ width: 600, fontWeight: "bold" }}
          >
            <p className="text-success fw-bold">| About Us</p>

            <h2 className="fw-bold" style={{ color: "#DA7A14" }}>
              Virtual White Flame PVT. LTD.
            </h2>

            <p className="mt-5" style={{ textAlign: "justify" }}>
              Virtual White Flame PVT. LTD. is a leading in the Biomass
              Briquettes/Biomass Pellets manufacturer & supplier covering major
              regions of India. The company is established in Year 2013 by the
              name of Seva Bio Brikets with the dynamics of a mixed management.
              All directors are having more than 12 years of business
              Experience. We help in converting all types of industrial,
              agriculture and forestry waste into solid fuel. Considering market
              demand of Briquettes & to improve the customer service,
              established Virtual White Flame PVT. LTD. in Year 2017. Virtual..
            </p>

            <button className="btn btn-outline-success px-4 py-2">READ MORE</button>
         </div>
        </div>
      </section>
    </>
  );
}
