import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-mesh">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT IMAGE SECTION */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative glass-card p-3 rotate-3 hover:rotate-0 duration-500">
              <img
                src="/assets/aboutus.webp"
                alt="Briquettes"
                className="rounded-2xl w-full h-[450px] object-cover shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 bg-white/90">
                <p className="text-3xl font-extrabold text-emerald-600">12+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest">About Our Company</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Virtual <span className="gradient-text">White Flame</span> PVT. LTD.
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg font-medium">
                Established in 2013, we are a leading manufacturer and supplier of 
                <span className="text-emerald-600 font-bold"> Biomass Briquettes & Pellets</span> across India.
              </p>
              <p>
                All directors bring more than 12 years of core business experience to the table. 
                We specialize in converting industrial, agricultural, and forestry waste into clean, 
                high-efficiency solid fuel. In 2017, we expanded as Virtual White Flame PVT. LTD. 
                to set new standards in sustainable energy and customer service.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="premium-button-primary flex items-center space-x-2 group">
                <span>Discover More</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="premium-button bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
                Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
