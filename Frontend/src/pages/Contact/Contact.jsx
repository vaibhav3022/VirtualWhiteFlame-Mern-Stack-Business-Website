import react from "react";
import Hero from "./Hero";
import { Envelope, Telephone, GeoAlt, Person, ChatDots } from "react-bootstrap-icons";

export default function Contact()
{
    return(
        <>
         {/* ===== Inline CSS ===== */}
      <style>
        {`
          .hero-img {
            width: 100%;
            height: auto;
          }
          .contact-section {
            background-color: #f7f8f2;
            padding: 50px 0;
          }
          .contact-heading {
            color: #0b6623;
            font-weight: 700;
            margin-bottom: 25px;
          }
          .contact-subtitle {
            color: #0b6623;
            font-weight: 600;
            font-size: 1.2rem;
            margin-top: 20px;
          }
          .contact-info p {
            color: #333;
            font-size: 0.95rem;
            margin-bottom: 8px;
          }
          .form-control {
            border-radius: 0;
            border: 1px solid #ccc;
          }
          .form-control:focus {
            border-color: #0b6623;
            box-shadow: none;
          }
          .send-btn {
            background-color: #0b6623;
            color: #fff;
            font-weight: 600;
            border: none;
            border-radius: 25px;
            padding: 10px 25px;
          }
          .send-btn:hover {
            background-color: #094d1c;
          }
          .whatsapp-btn {
            background-color: #25d366;
            color: #fff;
            font-weight: 600;
            border: none;
            border-radius: 25px;
            padding: 10px 25px;
            margin-left: 10px;
          }
          .whatsapp-btn:hover {
            background-color: #1eb857;
          }
          .modal-title {
            color: #0b6623;
            font-weight: 700;
          }
          .enquiry-btn {
            position: fixed;
            bottom: 80px;
            right: 20px;
            background-color: #0b6623;
            border: none;
            color: white;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            font-size: 22px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
          .enquiry-btn:hover {
            background-color: #094d1c;
          }
        `}
      </style>


      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <Hero/>
            </div>
        </div>
      </div>



      
            {/* ===== CONTACT SECTION ===== */}
            <div className="contact-section">
              <div className="container">
                <div className="row">
                  {/* ===== LEFT SIDE ===== */}
                  <div className="col-md-5 contact-info">
                    <h4 className="contact-heading">Email / Phone</h4>
                    <p><Envelope className="me-2 text-success" /> sales@virtualwhiteflame.com</p>
                    <p><Envelope className="me-2 text-success" /> operation.virtualwhiteflame@gmail.com</p>
                    <p><Telephone className="me-2 text-success" /> 9423390308, 9420950022</p>
      
                    <h4 className="contact-subtitle">Head Office</h4>
                    <p>
                      <GeoAlt className="me-2 text-success" />
                      Flat no.2, Plot No.1, Pushkar Apartment, Savedi, Pipeline Road, Ahmednagar - 414003
                    </p>
      
                    <h4 className="contact-subtitle">Head Office 2</h4>
                    <p>
                      <GeoAlt className="me-2 text-success" />
                      Shop No.01, Plot No.97, Sector 20, Ulwe Node, Navi Mumbai - 410206
                    </p>
                  </div>
      
                  {/* ===== RIGHT SIDE ===== */}
                  <div className="col-md-7">
                    <h4 className="contact-heading text-center text-md-start">Send A Message</h4>
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Full Name Here" />
                            <span className="input-group-text"><Person /></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <input type="email" className="form-control" placeholder="Email Here" />
                            <span className="input-group-text"><Envelope /></span>
                          </div>
                        </div>
                      </div>
      
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
      
                      <div className="mb-3">
                        <textarea className="form-control" rows="4" placeholder="Comments"></textarea>
                      </div>
      
                      <div className="d-flex justify-content-center justify-content-md-start">
                        <button type="button" className="send-btn">SEND MESSAGE</button>
                        <button type="button" className="whatsapp-btn ms-2">
                          <i className="bi bi-whatsapp"></i> WhatsApp Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      
          
      
        </>
    )
}