import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react"; // add this to your imports


export default function Contact() {
  const location = useLocation();
  const preselectedService = location.state?.selectedService || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    sertvice: preselectedService,
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // keep service preselected
  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({ ...f, sertvice: preselectedService }));
    }
  }, [preselectedService]);

  //clear prompt
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000); // hide after 4s
      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validateForm() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.sertvice) newErrors.sertvice = "Please select a service.";
    return newErrors;
  }

  function submit(e) {
    e.preventDefault();
    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    emailjs
      .send("service_jz7wlb9", "template_cke7e4n", form, "t_eUw1lbseJ5cugfx")
      .then(
        () => {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            sertvice: preselectedService || "General Inquiry",
            mobile: "",
            message: "",
          });
        },
        () => setStatus("failure")
      );
  }

  function sendWhatsApp(e) {
    e.preventDefault();

    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim() || form.mobile.length < 10)
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const phoneNumber = "919994813672"; // Your WhatsApp Business Number
      const submissionTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      const whatsappMessage = `*New Service Inquiry via SARR Associates Website*

  👤 *Name:* ${form.name}
  📧 *Email:* ${form.email || "N/A"}
  📞 *Mobile:* ${form.mobile}
  🧾 *Service Interested:* ${form.sertvice || preselectedService || "General Inquiry"}
  💬 *Message:* ${form.message || "N/A"}

  -----------------------
  ✨ _"Audits Made Easy, Growth Made Possible."_ 
  🌐 www.sarrassociates.in
  `;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, "_blank");
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800">
            Let’s Build Trust Together
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            {form.sertvice
              ? `Great choice! You're exploring "${form.sertvice}". Share your details and our team will reach out with expert guidance — tailored just for you.`
              : "Looking to simplify compliance, ace your next audit, or strengthen HR systems? Fill in your details and let our experts call you back with the right solutions."}
          </p>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-sky-700">📍 Address</h3>
              <p>No. 37/14, Ganga Service Station Complex,</p>
              <p>Avinashi - Trippur Rd, Kumar Nagar,</p>
              <p>Tiruppur,</p>
              <p>Tamil Nadu</p>
              <p>641-603</p>
            </div>
            <div>
              <h3 className="font-semibold text-sky-700">📞 Phone</h3>
              <p>+91 9994813672</p>
            </div>
            <div>
              <h3 className="font-semibold text-sky-700">✉️ Email</h3>
              <p>ram@sarrgroup.in</p>
            </div>
            <div className="flex justify-center gap-8 pt-6">
              <a
                href="https://www.linkedin.com/in/sarr-associates-435617249"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition flex items-center justify-center shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/kris_hnan83?igsh=eWQwN3BobHN4Mmli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 text-white hover:opacity-90 transition flex items-center justify-center shadow-lg"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {form.sertvice
              ? `Request a Consultant for ${form.sertvice}`
              : "Request a Consultant"}
          </h2>

          <form onSubmit={submit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
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
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="sertvice"
                value={form.sertvice}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              >
                <option value="">Select Service</option>

                {[
                  "5S Implementation (Workplace Excellence)",
                  "BSCI & WRAP Support",
                  "CTPAT (Customs Trade Partnership Against Terrorism)",
                  "ESI / PF / Factories Act",
                  "FEM (Facility Environmental Module)",
                  "FSC (Forest Stewardship Council Certification)",
                  "HIGG Index (Sustainability Assessment)",
                  "HR Consulting",
                  "ISO Certifications",
                  "OCS (Organic Content Standard)",
                  "OEKO TEX / GOTS / GRS",
                  "RCS (Recycled Claim Standard)",
                  "SA 8000 Certification",
                  "SLCP (Social & Labor Convergence Program)",
                  "Social Compliance Audit",
                  "Training & Capacity Building",
                ]
                  .sort((a, b) => a.localeCompare(b))
                  .map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
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

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full mt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="w-full sm:flex-1 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-400 hover:opacity-90 transition"
              >
                Send Request
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                onClick={sendWhatsApp}
                className="w-full sm:flex-1 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition"
              >
                Send via WhatsApp
              </motion.button>
            </div>
          </form>

          {/* Modern Success/Failure Popup */}
          {/* Modern Success/Failure Popup */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center z-50"
              >
                <div
                  className={`px-8 py-6 rounded-2xl shadow-2xl text-center ${
                    status === "success"
                      ? "bg-emerald-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  <p className="text-lg font-semibold">
                    {status === "success"
                      ? "✅ Your request has been sent successfully!"
                      : "❌ Oops! Something went wrong. Please try again."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
