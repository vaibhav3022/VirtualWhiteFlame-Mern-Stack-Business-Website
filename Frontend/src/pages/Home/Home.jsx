import React from "react";
import Slider from "./Slider";
import About from "./About";
import PlantsCard from "./PlantsCard";
import Counting from "./Counting";
import WorkingProcess from "./WorkingProcess";
import ClientTestimonials from "./ClientTestimonials";
import Machinaries from "./Machinaries";
import NewsBlogs from "./NewBlogs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] bg-mesh pt-20">
      {/* Hero Slider Section */}
      <section className="px-4 md:px-8">
        <Slider />
      </section>

      {/* About Section */}
      <About />

      {/* Products/Plants Slider Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="container mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-6">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Facilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Advanced <span className="gradient-text">Production Plants</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            State-of-the-art biomass processing centers committed to global standards 
            of sustainability and efficiency.
          </p>
        </div>
        <div className="container mx-auto px-6">
          <PlantsCard />
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden shadow-[inset_0_2px_40px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Counting />
        </div>
      </section>

      {/* Working Process */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            How it <span className="text-emerald-600">Works</span>
          </h2>
        </div>
        <WorkingProcess />
      </section>

      {/* Machinaries */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative z-10">
          <Machinaries />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <ClientTestimonials />
      </section>

      {/* Blogs */}
      <section className="py-32 mb-12">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Latest <span className="gradient-text">Insights</span></h2>
        </div>
        <NewsBlogs />
      </section>
    </main>
  );
}
