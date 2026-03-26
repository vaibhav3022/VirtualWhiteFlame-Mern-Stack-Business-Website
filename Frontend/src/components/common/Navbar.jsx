import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };
    
    checkAuth();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    navigate("/login"); // Smooth redirect to login without reload
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`glass-header ${isScrolled ? "py-3 shadow-md border-b" : "py-5 border-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <div className="relative overflow-hidden rounded-xl bg-white p-1">
            <img src="/assets/logo.webp" alt="Logo" className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-800 hidden sm:block">
            Virtual <span className="gradient-text">White Flame</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-300 hover:text-emerald-600 ${
                  isActive ? "text-emerald-600" : "text-slate-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {user.photo ? (
                  <img src={user.photo} alt="Profile" className="w-8 h-8 rounded-full border border-emerald-500/30" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs border border-emerald-200">
                    {user.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-sm font-bold text-slate-700">Hi, {user?.name?.split(' ')[0] || "User"}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-sm font-semibold text-red-500 hover:text-red-700 transition-colors bg-red-50 px-3 py-1 rounded-lg hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/signup" className="premium-button-primary text-sm">
              Get Started
            </NavLink>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <span className="text-xl font-bold">Menu</span>
            <button
              className="text-3xl text-slate-800 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl font-bold transition-colors ${
                    isActive ? "text-emerald-600" : "text-slate-800"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {user ? (
              <div className="space-y-6">
                <div className="text-xl font-bold text-slate-800">Hi, {user?.name || "User"}</div>
                <button
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                  className="text-2xl font-bold text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/signup"
                className="premium-button-primary text-center text-lg mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;



