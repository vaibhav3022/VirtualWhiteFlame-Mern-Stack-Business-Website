import react from "react";
import Hero from "./Hero";
import FAQ from "./FAQ";
export default function About()
{
    return(
        <>
     <style>
            {`
              .about-title {
                color: #006400;
                font-weight: 700;
              }
              .section-heading {
                color: #006400;
                font-weight: 600;
                font-size: 18px;
              }
              .footer-bg {
                background-color: #0b6623;
              }
              .accordion-button:not(.collapsed) {
                color: #006400;
                background-color: #f3f7f3;
                font-weight: 600;
              }
              .accordion-button {
                font-weight: 600;
              }
              .accordion-body {
                background-color: #fafafa;
              }
            `}
          </style>


          <header>
            <Hero/>
            </header>  


{/* ===== ABOUT CONTENT ===== */}
<section>
          <div className="container my-5">
            <div className="row align-items-center">
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
              <div className="col-md-6 bg-light p-4" style={{ fontWeight: "bold" }}>
                <p className="text-success fw-bold">| About Us</p>

                <h2 className="fw-bold" style={{ color: "#DA7A14" }}>
                  Virtual White Flame PVT. LTD.
                </h2>

                <p className="mt-4" style={{ textAlign: "justify" }}>
                  Virtual White Flame PVT. LTD. is a leading Biomass Briquettes/Biomass Pellets
                  manufacturer & supplier covering major regions of India. The company was
                  established in 2013 by the name of Seva Bio Brikets with a dynamic management
                  team. All directors have more than 12 years of business experience. We help in
                  converting industrial, agricultural, and forestry waste into solid fuel.
                  Considering the growing market demand for Briquettes & improving customer
                  service, Virtual White Flame PVT. LTD. was established in 2017. Now, the company
                  produces and promotes sales of 10,000+ Biomass fuel units per month. Our
                  long-term industry experience has taught us how to meet and exceed customer
                  expectations. We have developed new technologies for handling solid fuel to
                  improve efficiency and play a key role in vendor development and agricultural raw
                  material supply chain management.
                </p>
              </div>
            </div>
          </div>
</section>


<section>
    <FAQ/>
</section>





        </>
    )
}