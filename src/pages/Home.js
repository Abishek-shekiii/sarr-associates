// src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Certified Compliance & HR Solutions
          </h1>
          <p className="mt-4 text-lg drop-shadow-md max-w-xl">
            Helping factories and exporters become audit-ready, achieve certifications and
            maintain statutory compliance with confidence.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/contact" className="px-6 py-3 bg-emerald-400 text-white rounded-lg font-semibold">
              Get Assessment
            </a>
            <a href="/services" className="px-6 py-3 border border-white rounded-lg text-white">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Key Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Social Compliance Audit",
            "SA 8000 Certification",
            "BSCI & WRAP Support",
            "ISO Standards",
            "HR Consulting",
            "ESI / PF Compliance",
          ].map((s) => (
            <div key={s} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-green-600">{s}</h3>
              <p className="mt-3 text-gray-600">Professional advisory and audit readiness solutions.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-emerald-400 text-white py-16 text-center">
        <h3 className="text-2xl font-bold">Ready to become audit-ready?</h3>
        <p className="mt-2">Request a quick assessment and roadmap from our experts today.</p>
        <a href="/contact" className="mt-6 inline-block px-6 py-3 bg-white text-sky-700 rounded-md font-semibold">
          Request Assessment
        </a>
      </section>
    </div>
  );
}
