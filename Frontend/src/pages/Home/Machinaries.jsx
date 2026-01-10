import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Machinaries() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:1000/machines_api");
    setMachines(result.data.da); // API data
  };

  return (
    <div
      style={{ backgroundColor: "#064e3b", minHeight: "100vh", padding: "60px 0" }}
    >
      <div className="container">
        {/* Heading */}
        <h1 className="text-center text-white fw-bold mb-5 display-5">
          Machineries
        </h1>

        {/* Cards */}
        <div className="row justify-content-center g-4">

          {machines.map((m) => (
            <div className="col-md-4 col-sm-6" key={m.id}>
              <div className="card border-0 shadow-lg h-100">

                {/* Image */}
                <img
                  src={`http://localhost:1000/${m.working_img}`}
                  alt={m.machines_name}
                  className="card-img-top"
                  style={{ height: "260px", objectFit: "cover" }}
                />

                {/* Content */}
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-success">
                    {m.machines_name}
                  </h5>

                  <p className="card-text text-muted">
                    {m.machines_dec}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
