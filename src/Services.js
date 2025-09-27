// src/pages/Services.js
import React from "react";

const SERVICES = [
  "Social Compliance Audit",
  "SA 8000 Certification",
  "ISO 9001 / ISO 14001 / ISO 45001",
  "BSCI & WRAP Support",
  "OEKO-TEX / GOTS / GRS",
  "HR Consulting",
  "ESI / PF / Factories Act",
  "Training & Capacity Building",
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s} className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <h2 className="text-lg font-semibold text-green-600">{s}</h2>
            <p className="text-sm text-gray-600 mt-2">
              Tailored consulting and step-by-step guidance to help your business stay compliant.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
