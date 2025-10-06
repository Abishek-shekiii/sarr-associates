// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Briefcase, Phone } from "lucide-react";
import Home from "./Home";
// import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: "/", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
    { to: "/services", label: "Services", icon: <Briefcase className="w-5 h-5" /> },
    { to: "/contact", label: "Contact", icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg flex justify-evenly items-center py-2 px-2 z-[9999]">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs font-medium ${
            currentPath === item.to ? "text-sky-600" : "text-gray-600"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
        {/* Navbar (Desktop only) */}
        <nav className="bg-white shadow sticky top-0 z-50 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-700 to-emerald-400 text-white flex items-center justify-center font-extrabold">
                SA
              </div>
              <div>
                <div className="text-lg font-bold">SARR Associates</div>
                <div className="text-xs text-gray-500">
                  Social Compliance • Certifications • HR
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-6 items-center text-sm font-medium">
              <Link to="/" className="hover:text-sky-600">Home</Link>
              {/* <Link to="/about" className="hover:text-sky-600">About</Link> */}
              <Link to="/services" className="hover:text-sky-600">Services</Link>
              <Link to="/contact" className="hover:text-sky-600">Contact</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a className="text-sm text-gray-600" href="tel:+919900000000">
                +91 99xxxx xxxx
              </a>
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-sky-600 to-emerald-400 text-white rounded-md text-sm font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
            <div>© {new Date().getFullYear()} SARR Associates — Tirupur & Chennai</div>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>


        {/* Mobile Bottom Nav */}
        <BottomNav />
      </div>
    </Router>
  );
}
