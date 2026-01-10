import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FAQ() {

  const [faq, setFaq] = useState([]);

  useEffect(() => {
    loadData();
  }, []); // <-- important (avoid infinite calls)

  const loadData = async () => {
    try {
      const result = await axios.get("http://localhost:1000/faq_api");
      setFaq(result.data.da);    // storing API array in state
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="accordion" id="faqAccordion">

          {faq.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className={`accordion-button fw-bold mt-3 text-info ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${item.id}`}
                >
                  {item.que}
                </button>
              </h2>

              <div
                id={`collapse${item.id}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div
                  className="accordion-body"
                  dangerouslySetInnerHTML={{ __html: item.ans }}
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}
