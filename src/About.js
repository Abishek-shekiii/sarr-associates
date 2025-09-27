// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Sarr Associates</h1>
      <p className="text-gray-700 mb-4">
        With over 15 years of expertise, Sarr Associates is a trusted partner for apparel
        exporters and manufacturers. We provide comprehensive solutions in compliance,
        certifications, and HR advisory.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Founder & Leadership</h2>
          <p className="mt-2 text-sm text-gray-600">
            Led by industry experts with hands-on experience in buyer audits and global standards.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Our Offices</h2>
          <p className="mt-2 text-sm text-gray-600">
            Based in Tirupur and Chennai, serving 150+ clients across India and abroad.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">Our Impact</h2>
          <p className="mt-2 text-sm text-gray-600">
            Supported 150+ companies, reduced audit failures by 85%, and empowered workforces.
          </p>
        </div>
      </div>
    </div>
  );
}
