import React from "react";
import Hero from "./Hero";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Showcase</h3>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Visual <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our facilities, products, and environmental impact through our curated gallery.
            </p>
          </div>
          
          <GalleryCard />
        </div>
      </section>
    </main>
  );
}
