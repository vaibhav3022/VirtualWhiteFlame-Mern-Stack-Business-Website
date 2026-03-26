import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, url: "#", color: "hover:bg-pink-600" },
    { icon: <FaLinkedinIn />, url: "#", color: "hover:bg-blue-700" },
    { icon: <FaYoutube />, url: "#", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />
      <div className="absolute -top-24 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-lg">
                <img src="/assets/logo.webp" alt="Logo" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Virtual <span className="text-emerald-500">White Flame</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Delivering innovative business solutions with a commitment to excellence and technological advancement.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <NavLink
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="hover:text-emerald-500 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{link}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <HiPhone size={20} />
                </div>
                <div className="text-sm">
                  <span className="block text-slate-400 mb-1 font-medium">Phone Number</span>
                  <span className="text-white">+91 9423390308</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <HiMail size={20} />
                </div>
                <div className="text-sm">
                  <span className="block text-slate-400 mb-1 font-medium">Email Address</span>
                  <span className="text-white truncate">sales@virtualwhiteflame.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Headquarters
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-500 rounded-full" />
            </h4>
            <div className="flex items-start space-x-3 group text-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                <HiLocationMarker size={20} />
              </div>
              <p className="text-slate-400 leading-relaxed">
                Flat no.2, Plot No.1, Pushkar Apartment, Savedi, Pipeline Road, Ahmednagar 414003
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Virtual White Flame PVT.LTD. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 animate-bounce-slow">
        <a
          href="https://wa.me/9423390308"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaWhatsapp size={28} />
        </a>
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-2xl bg-white text-slate-900 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
