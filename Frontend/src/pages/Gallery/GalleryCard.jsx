import { API_URL } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function GalleryCard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Show All");

  useEffect(() => {
    const loaddata = async () => {
      try {
        const result = await axios.get(`${API_URL}/gallery_api`);
        setData(result.data.da); 
      } catch (error) {
        console.error("Error loading gallery data", error);
      }
    };
    loaddata();
  }, []);

  const filteredData = filter === "Show All" 
    ? data 
    : data.filter(item => item.category === filter);

  return (
    <>
      {/* ===== FILTER BUTTONS ===== */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {["Show All", "Machineries", "Social Activities", "Product"].map((cat) => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2 rounded-full border-2 transition-all font-bold tracking-wide ${
              filter === cat 
                ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200" 
                : "border-slate-200 text-slate-500 hover:border-emerald-500 hover:text-emerald-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== GALLERY GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredData.map((item) => (
          <div key={item.id} className="group relative glass-card p-3 bg-white hover:-translate-y-2 transition-all duration-500">
            <div className="relative overflow-hidden rounded-2xl h-80">
              <img
                src={`${API_URL}/${item.img}`}
                alt={item.img_name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white text-lg font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.img_name}
                </p>
                <p className="text-slate-300 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.description || "Leading renewable energy solutions across India."}
                </p>
              </div>
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                {item.img_name}
              </h4>
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all">
                <HiOutlinePhotograph size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
