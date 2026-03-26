import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-950/80 to-slate-950" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight animate-fade-in">
          Premium <span className="gradient-text">Services</span>
        </h1>
        <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8" />
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Broadening the horizons of renewable energy through specialized services tailored for modern industry.
        </p>
      </div>
    </section>
  );
}
