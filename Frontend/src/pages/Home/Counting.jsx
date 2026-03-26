import { API_URL } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Counting() {
  const [count, setCount] = useState([]); // array for map()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
   
      const result = await axios.get(`${API_URL}/counting_api`);
      // console.log(result.data.da);
      setCount(result.data.da); // store array of all counts
  };

  return (
    <div className="row">
      {
        count.map((item, index) => (
          <div
            key={index}
            className="col-md-3 text-white text-center"
            style={{
              borderRight: "2px solid white",
              borderBottom: "2px solid white",
              padding: "20px 0",
            }}
          >
            <p style={{ fontSize: "35px", margin: 0 }}>
              {item.counting_count}
              <br />
              {item.counting_name}
            </p>
          </div>
        ))
      }
    </div>
  );
}
