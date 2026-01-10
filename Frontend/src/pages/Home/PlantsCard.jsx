import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PlantsCard() {
  const [plants, setPlants] = useState([]); // store all data here

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    
      const result = await axios.get("http://localhost:1000/plants_api");
      setPlants(result.data.da);
   
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ overflowX: "hidden", margin: 0, padding: 0 }}
    >
      <h2 className="text-warning fw-bold text-center mb-4">Plants</h2>

      <div className="container">
        <div className="row g-4">
          {/* ✅ MAP THROUGH ALL PLANTS */}
       {
            plants.map((p, index) => (
              <div className="col-md-6" key={index}>
                <div
                  className="row bg-light align-items-center p-3 rounded shadow-sm mx-0"
                  style={{
                    minHeight: "180px", 
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="col-4">
                    <img
                      src={`http://localhost:1000/${p.plants_img}`}
                      alt={p.plants_name}
                      className="img-thumbnail w-100"
                      style={{
                        objectFit: "cover",
                        height: "120px", 
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <h6 className="fw-bold mb-1">{p.plants_name}</h6>
                    <h6 className="mb-1">{p.plants_add}</h6>
                    <h6 className="mb-1">{p.plants_mobile}</h6>
                    <h6 className="mb-0">{p.plants_email}</h6>
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
