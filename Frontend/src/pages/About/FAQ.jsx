import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What are Biomass Briquettes?",
      a: "Biomass briquettes are a biofuel substitute to coal and charcoal. They are made from agricultural and forestry waste, compressed into solid blocks using high pressure without any chemical binders. They are clean, eco-friendly, and highly efficient."
    },
    {
      q: "Why choose Virtual White Flame products?",
      a: "With over 12 years of experience, we provide high-quality briquettes and pellets with consistent calorific value. Our products help reduce carbon footprints while offering a cost-effective alternative to traditional fossil fuels."
    },
    {
      q: "What is the monthly production capacity?",
      a: "We currently produce and promote more than 10,000 units of biomass fuel per month, serving various industries across major regions in India."
    },
    {
      q: "Are your products suitable for industrial boilers?",
      a: "Yes, our biomass briquettes and pellets are specifically designed for high-performance industrial use, including boilers, furnaces, and heating systems."
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h3 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Questions & Answers</h3>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <p className="text-slate-500 text-lg">Everything you need to know about our products and sustainable energy.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === idx ? "ring-2 ring-emerald-500/20" : ""}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className={`text-xl font-bold transition-colors ${openIndex === idx ? "text-emerald-600" : "text-slate-800"}`}>
                {faq.q}
              </span>
              <HiChevronDown 
                className={`text-2xl transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-emerald-600" : "text-slate-400"}`} 
              />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-8 pb-8 text-slate-600 leading-relaxed text-lg border-t border-slate-100 pt-6">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
