import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/gallery.jpg" 
          alt="Gallery Hero" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">
          Media Center
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in">
          Our <span className="gradient-text">Gallery</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A visual testament to our commitment to renewable energy and sustainable development.
        </p>
      </div>
    </section>
  );
}
