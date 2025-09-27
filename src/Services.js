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
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div
            key={s}
            className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600">{s}</h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Tailored consulting and step-by-step guidance to help your
              business stay compliant and audit-ready.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
