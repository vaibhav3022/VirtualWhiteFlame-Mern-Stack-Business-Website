import { API_URL } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function WorkingProcess() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await axios.get(`${API_URL}/working_api`);
      // console.log(result.data.da);

      setWork(result.data.da); // store API array
    } catch (error) {
      console.log("Error loading data:", error);
    }
  };

  return (
    <div className="working-section py-5 bg-light">
      <h2 className="text-center fw-bold text-danger mb-5">
        Working Process Of <br /> Biomass Briquettes
      </h2>

      <div className="container">
        <div className="row justify-content-center">

          {/*  MAP THROUGH API DATA */}
          {
            work.map((w) => (
              <div
                className="col-10 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                key={w.id}
              >
                <div
                  className="card shadow-lg border border-warning rounded-4 overflow-hidden"
                  style={{ width: "100%" }}
                >
                  <img
                    src={`${API_URL}/${w.working_img}`}
                    alt={w.working_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-success">
                      {w.working_name}
                    </h5>
                  </div>
                </div>
              </div>
            ))
       }

        </div>
      </div>
    </div>
  );
}
