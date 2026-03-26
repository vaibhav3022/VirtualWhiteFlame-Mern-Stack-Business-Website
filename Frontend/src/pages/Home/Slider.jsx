import { API_URL } from "../../config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Slider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loaddata = async () => {
      try {
        const result = await axios.get(`${API_URL}/slider_api`);
        const data = result.data.da?.[0];
        if (data) {
          setImages([
            { url: data.img1, desc: data.desc1 || "Innovation in Energy" },
            { url: data.img2, desc: data.desc2 || "Sustainable Solutions" },
            { url: data.img3, desc: data.desc3 || "Future of Biofuel" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    loaddata();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden rounded-[2rem] shadow-2xl">
      {/* Slides */}
      <div className="flex h-full transition-transform duration-1000 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((slide, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img src={`${API_URL}/${slide.url}`} className="w-full h-full object-cover" alt="Slide" />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-20 left-12 right-12 md:left-24">
              <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-up">
                {slide.desc}
              </h2>
              <div className="flex gap-4">
                <button className="premium-button-primary">Learn More</button>
                <button className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all">
                  Our Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between z-20">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-emerald-500 transition-all">
          <HiChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-emerald-500 transition-all">
          <HiChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-emerald-500" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
