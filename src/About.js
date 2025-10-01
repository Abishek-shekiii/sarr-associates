import React from "react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-5xl mx-auto px-6 relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-200">
            Driving compliance, certifications, and HR excellence for over 15 years.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-8">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto text-center">
          Sarr Associates is a leading consulting partner for apparel exporters
          and manufacturers across Tirupur and Chennai. For over 15 years, we
          have empowered 150+ companies to achieve{" "}
          <span className="font-semibold text-sky-700">audit-readiness, global certifications, and statutory compliance</span>.  
          Our mission is simple: to help businesses build trust with buyers while
          fostering safe, ethical, and sustainable workplaces.
        </p>
      </section>

      {/* Founder’s Note */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
              alt="Founder"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-sky-800 mb-4">Message from Our Founder</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              “When I started Sarr Associates, my vision was to bridge the gap
              between global buyer requirements and local manufacturing practices. 
              Over the years, our team has grown to support companies in navigating 
              complex compliance landscapes, ensuring not just certifications but 
              long-term trust and sustainability.”
            </p>
            <p className="text-gray-600 font-semibold">— Founder, Sarr Associates</p>
          </div>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-sky-800 text-center mb-12">
          Our Journey in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-4xl font-extrabold text-emerald-500">15+</p>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-4xl font-extrabold text-emerald-500">150+</p>
            <p className="text-gray-600 mt-2">Clients Supported</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <p className="text-4xl font-extrabold text-emerald-500">2</p>
            <p className="text-gray-600 mt-2">Offices (Tirupur & Chennai)</p>
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="bg-gradient-to-r from-sky-600 to-emerald-400 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Team Strength</h2>
          <p className="mt-4 text-lg text-sky-100">
            Our dedicated team has supported over 150 companies with compliance,
            certifications, and HR systems — ensuring every client is equipped
            for global growth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-800">
          Want to know how we can help your business?
        </h2>
        <p className="mt-3 text-gray-600">
          Speak with our experts and discover how we can prepare you for
          certifications and buyer audits.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-sky-600 to-emerald-400 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Request Assessment
        </a>
      </section>
    </div>
  );
}
