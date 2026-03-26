import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight animate-fade-in">
          Contact <span className="gradient-text">Us</span>
        </h1>
        <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8" />
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Connecting you with sustainable energy experts. Reach out to our offices in Ahmednagar and Mumbai.
        </p>
      </div>
    </section>
  );
}
