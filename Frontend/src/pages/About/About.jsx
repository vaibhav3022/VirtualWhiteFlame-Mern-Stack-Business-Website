import React from "react";
import Hero from "./Hero";
import FAQ from "./FAQ";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT IMAGE SECTION */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative glass-card p-4 rotate-3 hover:rotate-0 duration-500 transition-transform">
                <img
                  src="/assets/aboutus.webp"
                  alt="Briquettes"
                  className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 glass-card p-8 bg-white/90">
                  <p className="text-4xl font-black text-emerald-600">12+</p>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Years of Mastery</p>
                </div>
              </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest">Our Legacy</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Virtual <span className="gradient-text">White Flame</span> PVT. LTD.
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Established in 2013, we are a leading pioneer in the 
                  <span className="text-emerald-600 font-bold"> Biomass Briquettes & Pellets</span> industry, 
                  serving major industrial hubs across India.
                </p>
                <p>
                  Our journey began as Seva Bio Brikets, driven by a dynamic management team with over 
                  a decade of core industrial experience. We specialize in the conversion of industrial, 
                  agricultural, and forestry waste into high-efficiency, sustainable solid fuel.
                </p>
                <p>
                  In 2017, we evolved into Virtual White Flame PVT. LTD. to better serve our growing 
                  clientele and set new benchmarks in the renewable energy sector. Today, we manage a 
                  robust supply chain, producing over 10,000 biomass units monthly.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1">Sustainable</h4>
                  <p className="text-sm text-slate-500">Eco-friendly fuel solutions for the future.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1">Efficient</h4>
                  <p className="text-sm text-slate-500">High-calorific value biomass products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-32">
        <FAQ />
      </section>
    </main>
  );
}
