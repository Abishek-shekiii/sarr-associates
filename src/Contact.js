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
      .send("service_hbs15hc", "template_uu0n9sf", form, "azlnSNt1F28oLbbsA")
      .then(
        () => {
          setStatus("success");
          setForm({
            name: "",
            email: "",
            sertvice: preselectedService || "",
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
    if (!form.mobile.trim()) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      const whatsappMessage = `Hello, I am ${form.name}.
  Email: ${form.email}
  Mobile: ${form.mobile}
  Service: ${form.sertvice}
  Message: ${form.message || "N/A"}`;
  
      const phoneNumber = "919080699265"; // Replace with your WhatsApp business number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;
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
            <div className="flex justify-center gap-8 pt-6">
              <a
                href="https://linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition flex items-center justify-center shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/your-company"
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
                <option value="BSCI & WRAP Support">BSCI & WRAP Support</option>
                <option value="CTPAT (Customs Trade Partnership Against Terrorism)">
                  CTPAT (Customs Trade Partnership Against Terrorism)
                </option>
                <option value="ESI / PF / Factories Act">ESI / PF / Factories Act</option>
                <option value="FEM (Facility Environmental Module)">
                  FEM (Facility Environmental Module)
                </option>
                <option value="FSC (Forest Stewardship Council Certification)">
                  FSC (Forest Stewardship Council Certification)
                </option>
                <option value="HIGG Index (Sustainability Assessment)">
                  HIGG Index (Sustainability Assessment)
                </option>
                <option value="HR Consulting">HR Consulting</option>
                <option value="ISO Certifications">ISO Certifications</option>
                <option value="OEKO TEX / GOTS / GRS">OEKO TEX / GOTS / GRS</option>
                <option value="SA 8000 Certification">SA 8000 Certification</option>
                <option value="SLCP (Social & Labor Convergence Program)">
                  SLCP (Social & Labor Convergence Program)
                </option>
                <option value="Social Compliance Audit">Social Compliance Audit</option>
                <option value="Training & Capacity Building">
                  Training & Capacity Building
                </option>
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
            <div className="flex gap-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="flex-1 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-400 hover:opacity-90 transition"
              >
                Send Request
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                onClick={sendWhatsApp}
                className="flex-1 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition"
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
