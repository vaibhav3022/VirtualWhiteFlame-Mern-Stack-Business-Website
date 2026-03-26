import React from "react";
import Hero from "./Hero";
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiChatAlt2 } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* ===== LEFT SIDE: Info Cards ===== */}
            <div className="lg:w-5/12 space-y-8">
              <div className="space-y-4">
                <h3 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Direct Contact</h3>
                <h2 className="text-4xl font-black text-slate-900">Get in <span className="gradient-text">Touch</span></h2>
                <p className="text-slate-500 text-lg">Our team is ready to assist you with any inquiries regarding our sustainable energy solutions.</p>
              </div>

              <div className="space-y-6">
                {/* Email/Phone Card */}
                <div className="glass-card p-6 flex items-start space-x-4 hover:border-emerald-500/30 transition-colors">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <HiMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Email & Phone</h4>
                    <p className="text-slate-600 text-sm mb-1">sales@virtualwhiteflame.com</p>
                    <p className="text-slate-600 text-sm mb-1">operation.virtualwhiteflame@gmail.com</p>
                    <p className="text-emerald-600 font-bold mt-2">+91 9423390308, 9420950022</p>
                  </div>
                </div>

                {/* Head Office 1 */}
                <div className="glass-card p-6 flex items-start space-x-4 hover:border-emerald-500/30 transition-colors">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Head Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Flat no.2, Plot No.1, Pushkar Apartment, Savedi, Pipeline Road, Ahmednagar - 414003
                    </p>
                  </div>
                </div>

                {/* Head Office 2 */}
                <div className="glass-card p-6 flex items-start space-x-4 hover:border-emerald-500/30 transition-colors">
                  <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Branch Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Shop No.01, Plot No.97, Sector 20, Ulwe Node, Navi Mumbai - 410206
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== RIGHT SIDE: Contact Form ===== */}
            <div className="lg:w-7/12">
              <div className="glass-card p-10 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16" />
                
                <h4 className="text-2xl font-bold text-slate-900 mb-8">Send A Message</h4>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                      <input 
                        type="text" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                        placeholder="Full Name" 
                      />
                    </div>
                    <div className="relative group">
                      <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                      <input 
                        type="email" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                        placeholder="Email Address" 
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <HiChatAlt2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="Subject" 
                    />
                  </div>

                  <div className="relative group">
                    <textarea 
                      className="w-full p-4 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all min-h-[160px]" 
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button type="button" className="premium-button-primary flex-1 py-4 justify-center">
                      Send Message
                    </button>
                    <button type="button" className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#25d366] text-white font-bold rounded-2xl hover:bg-[#1eb857] transition-all shadow-lg shadow-emerald-200">
                      <FaWhatsapp size={20} />
                      <span>WhatsApp Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15060.052827139152!2d74.7214713!3d19.1069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcba076e0ef5db%3A0x640b3b4f62b48d28!2sSavedi!5e0!3m2!1sen!2sin!4v1711425600000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
