import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    sertvice: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    emailjs
      .send(
        "service_hbs15hc",
        "template_uu0n9sf",
        form,
        "azlnSNt1F28oLbbsA"
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", sertvice: "", mobile: "", message: "" });
        },
        () => setStatus("failure")
      );
  }

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800">
            Let’s Talk
          </h1>
          <p className="text-gray-700 text-lg">
            Have questions about compliance, certifications, or HR advisory?  
            Fill out the form and we’ll call you back shortly.
          </p>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-sky-700">📍 Address</h3>
              <p>Tirupur & Chennai Offices</p>
            </div>
            <div>
              <h3 className="font-semibold text-sky-700">📞 Phone</h3>
              <p>+91 99xxxx xxxx</p>
            </div>
            <div>
              <h3 className="font-semibold text-sky-700">✉️ Email</h3>
              <p>hello@sarrassociates.example</p>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a className="p-3 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition" href="#">
              LinkedIn
            </a>
            <a className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition" href="#">
              Instagram
            </a>
            <a className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition" href="#">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Call Back</h2>
          <form onSubmit={submit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Service
              </label>
              <select
                name="sertvice"
                value={form.sertvice}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              >
                <option value="">Select Service</option>
                <option value="Social Compliance Audit">Social Compliance Audit</option>
                <option value="SA 8000">SA 8000</option>
                <option value="ISO Certifications">ISO Certifications</option>
                <option value="BSCI / WRAP">BSCI / WRAP</option>
                <option value="OEKO TEX / GOTS / GRS">OEKO TEX / GOTS / GRS</option>
                <option value="HR Consulting">HR Consulting</option>
                <option value="ESI / PF / Factories Act">ESI / PF / Factories Act</option>
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                rows="4"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-400 hover:opacity-90 transition"
            >
              Send Request
            </button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Request sent! We'll call you soon.
              </p>
            )}
            {status === "failure" && (
              <p className="text-red-600 text-sm mt-2">
                ❌ Failed to send. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
