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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 ${
      isMobileMenuOpen || isScrolled ? "bg-white py-3 shadow-lg border-b border-slate-100" : "max-md:bg-white bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <div className="relative overflow-hidden rounded-xl bg-white p-1 shadow-sm border border-slate-100">
            <img src="/assets/logo.webp" alt="Logo" className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" />
          </div>
          <span className={`text-xl font-extrabold tracking-tight transition-colors ${isScrolled ? "text-slate-800" : "text-slate-800"}`}>
            Virtual <span className="text-emerald-600">White Flame</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold transition-all duration-300 hover:text-emerald-600 ${
                  isActive ? "text-emerald-600 bg-emerald-50/50 px-3 py-1.5 rounded-lg" : "text-slate-600 px-3 py-1.5"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {user ? (
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-200">
              <div className="flex items-center space-x-2">
                {user.photo ? (
                  <img src={user.photo} alt="Profile" className="w-9 h-9 rounded-full border-2 border-emerald-500/20" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs border border-emerald-200">
                    {user.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-sm font-bold text-slate-700">Hi, {user?.name?.split(' ')[0]}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors bg-red-50 px-4 py-2 rounded-xl hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/signup" className="premium-button-primary text-sm px-6 py-2.5 shadow-emerald-100">
              Get Started
            </NavLink>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-slate-800 p-2 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed inset-0 z-[9999] md:hidden transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sidebar Container */}
        <div className={`absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
            >
              <HiX size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-5 py-4 rounded-2xl text-lg font-bold transition-all flex items-center ${
                      isActive 
                        ? "bg-emerald-50 text-emerald-600" 
                        : "text-slate-700 hover:bg-slate-50 hover:text-emerald-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-slate-50">
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50">
                  {user.photo ? (
                    <img src={user.photo} alt="Profile" className="w-10 h-10 rounded-full border border-white" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                      {user.name?.charAt(0)}
                    </div>
                  )}
                  <span className="font-bold text-slate-800">{user.name}</span>
                </div>
                <button
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                  className="w-full py-4 rounded-2xl bg-red-50 text-red-500 font-bold text-lg hover:bg-red-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/signup"
                className="block w-full text-center py-4 rounded-2xl bg-emerald-600 text-white font-bold text-lg shadow-lg shadow-emerald-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
