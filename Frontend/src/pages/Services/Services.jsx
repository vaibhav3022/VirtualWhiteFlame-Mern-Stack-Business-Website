import { API_URL } from "../../config";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import axios from "axios";
import { HiArrowRight } from "react-icons/hi";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loaddata = async () => {
      try {
        const result = await axios.get(`${API_URL}/service_api`);
        setServices(result.data.da); 
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    loaddata();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Empowering <span className="gradient-text">Sustainability</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We provide end-to-end solutions for biomass energy, from waste conversion to supply chain management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group glass-card p-6 bg-white hover:bg-emerald-600 transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img
                    src={`${API_URL}/${service.img}`}
                    alt={service.heading}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">
                    {service.heading}
                  </h3>
                  <p className="text-slate-600 group-hover:text-emerald-50 leading-relaxed transition-colors">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 group-hover:border-emerald-500/30">
                    <button className="flex items-center space-x-2 font-bold text-emerald-600 group-hover:text-white transition-colors">
                      <span className="uppercase tracking-widest text-xs">Explore Service</span>
                      <HiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to switch to <span className="text-emerald-500">Green Energy?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Join hundreds of industries across India reducing their carbon footprint with our premium biomass solutions.
          </p>
          <button className="premium-button-primary px-12 py-4 text-lg">
            Consult Our Experts
          </button>
        </div>
      </section>
    </main>
  );
}
