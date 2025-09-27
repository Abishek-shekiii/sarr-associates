// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-slate-900">
        {/* Navbar */}
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-700 to-emerald-400 text-white flex items-center justify-center font-extrabold">
                SA
              </div>
              <div>
                <div className="text-lg font-bold">Sarr Associates</div>
                <div className="text-xs text-gray-500">
                  Social Compliance • Certifications • HR
                </div>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 items-center text-sm font-medium">
              <Link to="/" className="hover:text-sky-600">Home</Link>
              <Link to="/about" className="hover:text-sky-600">About</Link>
              <Link to="/services" className="hover:text-sky-600">Services</Link>
              <Link to="/contact" className="hover:text-sky-600">Contact</Link>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded border text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
              <Link to="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/services" className="block" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
              <a className="block text-sm text-gray-600 mt-2" href="tel:+919900000000">
                +91 99xxxx xxxx
              </a>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-sky-600 to-emerald-400 text-white rounded-md text-sm font-semibold mt-2 text-center"
              >
                Request Quote
              </Link>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
            <div>© {new Date().getFullYear()} Sarr Associates — Tirupur & Chennai</div>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
