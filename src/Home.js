import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[550px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-6 relative text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg">
            Certified Compliance & HR Solutions
          </h1>
          <p className="mt-4 text-lg max-w-2xl text-gray-100 drop-shadow">
            Helping factories and exporters become audit-ready, achieve
            certifications, and maintain statutory compliance with confidence.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 transition text-white rounded-lg font-semibold text-center"
            >
              Get Assessment
            </a>
            <a
              href="/services"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-sky-700 transition text-white text-center"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years of Service</p>
            </div>
            <div>
              <p className="text-3xl font-bold">150+</p>
              <p className="text-sm">Clients Supported</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm">Offices (Tirupur & Chennai)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Social Compliance Audit",
              desc: "Ensure ethical workplace practices for buyer confidence.",
              icon: "✅",
            },
            {
              name: "SA 8000 Certification",
              desc: "Achieve global social accountability standards.",
              icon: "🌍",
            },
            {
              name: "BSCI & WRAP Support",
              desc: "Get prepared for international buyer audits.",
              icon: "📑",
            },
            {
              name: "ISO Standards",
              desc: "Quality, safety, and environmental certifications.",
              icon: "🏭",
            },
            {
              name: "HR Consulting",
              desc: "Compliant HR systems and workforce solutions.",
              icon: "👥",
            },
            {
              name: "ESI / PF Compliance",
              desc: "Stay compliant with Indian statutory regulations.",
              icon: "📜",
            },
          ].map((s) => (
            <div
              key={s.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition text-center"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-green-600">
                {s.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study / Trust Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-800">
            Why Companies Trust Us
          </h2>
          <p className="mt-4 text-gray-600">
            For over 15 years, we’ve helped apparel exporters, textile factories,
            and manufacturers achieve compliance and pass critical buyer audits.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white shadow p-6 rounded-xl">
              <p className="text-gray-700 italic">
                “Sarr Associates guided us through a tough audit — zero major
                findings and stronger HR systems.”
              </p>
              <p className="mt-3 text-sm text-gray-500">– Quality Head, Apparel Exporter</p>
            </div>
            <div className="bg-white shadow p-6 rounded-xl">
              <p className="text-gray-700 italic">
                “Practical recommendations and hands-on training. Our team is
                more confident now.”
              </p>
              <p className="mt-3 text-sm text-gray-500">– Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-600 to-emerald-400 text-white py-16 text-center px-6">
        <h3 className="text-2xl md:text-3xl font-bold">
          Ready to become audit-ready?
        </h3>
        <p className="mt-2 text-base md:text-lg text-sky-100">
          Request a quick assessment and roadmap from our experts today.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 bg-white text-sky-700 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Request Assessment
        </a>
      </section>
    </div>
  );
}
