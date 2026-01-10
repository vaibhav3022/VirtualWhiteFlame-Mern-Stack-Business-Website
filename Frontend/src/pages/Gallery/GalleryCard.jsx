import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GalleryCard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    loaddata();
  }, []);

  const loaddata = async () => {
    try {
      const result = await axios.get('http://localhost:1000/gallery_api');
      setData(result.data.da); // storing array in state
    } catch (error) {
      console.log("Error loading data", error);
    }
  };

  return (
    <>
      {/* ===== GALLERY HEADING ===== */}
      <div className="container py-4">
        <h2 className="gallery-heading">Gallery</h2>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="text-center mb-4">
          <button className="filter-btn">Show All</button>
          <button className="filter-btn">Machineries</button>
          <button className="filter-btn">Social Activities</button>
          <button className="filter-btn">Product</button>
        </div>

        {/* ===== GALLERY GRID USING MAP ===== */}
        <div className="row g-4">
          {
            data.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6">
                <div className="gallery-card">

                  {/* API images path */}
                  <img
                    src={`http://localhost:1000/${item.img}`}
                    alt={item.img_name}
                    className="img-fluid"
                  />

                  <p className="gallery-title">{item.img_name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
