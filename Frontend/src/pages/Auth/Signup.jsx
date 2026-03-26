import { API_URL } from "../../config";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      };

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", "firebase-auth-token-" + user.uid);
      
      toast.success(`Welcome ${user.displayName}!`);
      navigate("/");
      window.dispatchEvent(new Event("storage"));
    } catch (err) {
      toast.error(err.message || "Social login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return setError("Passwords do not match");
    }
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.status === "success") {
        toast.success("Account created successfully! Please login.");
        navigate("/login");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-md w-full space-y-8 glass-card p-10 relative z-10 border-white/40 shadow-2xl">
        <div className="text-center">
          <NavLink to="/" className="inline-block mb-6">
            <img className="mx-auto h-12 w-auto" src="/assets/logo.webp" alt="Logo" />
          </NavLink>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create an Account</h2>
          <p className="mt-2 text-sm text-slate-600">
            Join <span className="gradient-text font-bold">Virtual White Flame</span> today
          </p>
        </div>

        {/* Social Logins */}
        <div className="mt-8">
          <button 
            onClick={() => handleSocialLogin(googleProvider)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-lg transition-all text-sm font-bold text-slate-700"
          >
            <FcGoogle size={20} /> Continue with Google
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white/50 text-slate-500">Or sign up with email</span></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-shake">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1" htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full px-4 py-3 rounded-2xl bg-white/50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder-slate-400"
                placeholder="abc"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-4 py-3 rounded-2xl bg-white/50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder-slate-400"
                placeholder="abc@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full px-4 py-3 rounded-2xl bg-white/50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder-slate-400"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full px-4 py-3 rounded-2xl bg-white/50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-slate-900 placeholder-slate-400"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full premium-button-primary py-4 text-lg flex items-center justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : "Create Account"}
            </button>
          </div>
        </form>

        <div className="text-center pt-4">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors underline underline-offset-4">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
