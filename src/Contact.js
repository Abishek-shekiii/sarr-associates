import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";

const services = [
  "5S Implementation (Workplace Excellence)",
  "amfori BSCI Support",
  "BCI (Better Cotton Initiative)",
  "CTPAT (Customs Trade Partnership Against Terrorism)",
  "ESI / PF / Factories Act",
  "FEM (Facility Environmental Module)",
  "FSC (Forest Stewardship Council Certification)",
  "GSV (Global Security Verification)",
  "HIGG Index (Sustainability Assessment)",
  "HR Consulting",
  "ISO Certifications",
  "OCS (Organic Content Standard) Certification Support",
  "OEKO TEX / GOTS / GRS",
  "RCS (Recycled Claim Standard) Certification Support",
  "SA 8000 Certification",
  "SEDEX (SMETA) Audit Support",
  "SLCP (Social & Labor Convergence Program)",
  "Social Compliance Audit",
  "Training & Capacity Building",
  "WRAP Certification Support",
  "BAS (Business Accountability Standard) Certification Support",
].sort((a, b) => a.localeCompare(b));

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
  const [showServices, setShowServices] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [typedSearch, setTypedSearch] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Keep preselected service
  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({ ...f, sertvice: preselectedService }));
    }
  }, [preselectedService]);

  // Clear success/fail popup
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    // if (!form.sertvice) newErrors.sertvice = "Please select a service.";
    return newErrors;
  };

  const submit = (e) => {
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
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const phoneNumber = "919994813672";
      const whatsappMessage = `*New Service Inquiry via SARR Associates Website*

👤 *Name:* ${form.name}
📧 *Email:* ${form.email || "N/A"}
📞 *Mobile:* ${form.mobile}
🧾 *Service Interested:* ${form.sertvice || preselectedService || "General Inquiry"}
💬 *Message:* ${form.message || "N/A"}

-----------------------
✨ _"Audits Made Easy, Growth Made Possible."_
🌐 www.sarrassociates.in`;

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );
    }
  };

  // 🔠 Type-to-search timeout (resets typed letters after short delay)
  useEffect(() => {
    if (!typedSearch) return;
    const timer = setTimeout(() => setTypedSearch(""), 800);
    return () => clearTimeout(timer);
  }, [typedSearch]);

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0E4A8F]">
            Let’s Build Trust Together
          </h1>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            {form.sertvice
              ? `Great choice! You're exploring “${form.sertvice}”. Kindly share your details and our team will reach out with expert guidance — tailored just for you.`
              : "Looking to simplify compliance, ace your next audit, or strengthen HR systems? Kindly fill in your details and let our experts call you back with the right solutions."}
          </p>

          {/* Contact Details */}
          <div className="space-y-6 text-[#555555]">
	    {/* Head Office */}
            <div>
              <h3 className="flex items-center font-semibold text-[#0E4A8F] text-lg mb-1">
                <MapPin className="w-5 h-5 mr-2 text-[#3191E8]" /> Head Office
              </h3>
              <address className="not-italic leading-relaxed">
                No. 37/14, Ganga Service Station Complex,<br />
                Avinashi Rd, Kumar Nagar,<br />
                Tiruppur, Tamil Nadu<br />
                <span className="font-medium">PIN: 641 603</span>
              </address>
            </div>

	    {/* Branch Office */}
            <div>
              <h3 className="flex items-center font-semibold text-[#0E4A8F] text-lg mb-1">
                <MapPin className="w-5 h-5 mr-2 text-[#3191E8]" /> Branch Office
              </h3>
              <address className="not-italic leading-relaxed">
                No. 12, Krishna Street,<br />
                MGR Nagar, Pallikaranai,<br />
                Chennai, Tamil Nadu<br />
              </address>
            </div>

	    {/* Phone */}
            <div>
              <h3 className="flex items-center font-semibold text-[#0E4A8F] text-lg mb-1">
                <Phone className="w-5 h-5 mr-2 text-[#3191E8]" /> Phone
              </h3>
              <p>+91 99948 13672</p>
            </div>

	    {/* Email */}
            <div>
              <h3 className="flex items-center font-semibold text-[#0E4A8F] text-lg mb-1">
                <Mail className="w-5 h-5 mr-2 text-[#3191E8]" /> Email
              </h3>
              <p>ram@sarrgroup.in</p>
            </div>

 	    {/* Social Links */}
            <div className="flex justify-start gap-5 pt-4">
              <a
                href="https://www.linkedin.com/in/sarr-associates-435617249"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#0E4A8F] text-white hover:bg-[#0B3970] transition-all shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sarr2_025/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-tr from-[#E4405F] to-[#F77737] text-white hover:opacity-90 transition-all shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/ramakrishnan4366"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#39589F] text-white hover:bg-[#2C427A] transition-all shadow-md"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
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
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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

            {/* Service Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Service <span className="text-red-500">*</span>
              </label>

              <div
                tabIndex={0}
                onClick={() => setShowServices((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (showServices && highlightedIndex >= 0) {
                      handleChange({
                        target: { name: "sertvice", value: services[highlightedIndex] },
                      });
                      setShowServices(false);
                    } else {
                      setShowServices(true);
                    }
                  } else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setShowServices(true);
                    setHighlightedIndex((prev) => {
                      const next = prev < services.length - 1 ? prev + 1 : 0;
                      document.getElementById(`service-${next}`)?.scrollIntoView({ block: "nearest" });
                      return next;
                    });
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setShowServices(true);
                    setHighlightedIndex((prev) => {
                      const next = prev > 0 ? prev - 1 : services.length - 1;
                      document.getElementById(`service-${next}`)?.scrollIntoView({ block: "nearest" });
                      return next;
                    });
                  } else if (e.key === "Escape") {
                    setShowServices(false);
                  } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
                    setShowServices(true);
                    setTypedSearch((prev) => prev + e.key.toLowerCase());
                    const search = (typedSearch + e.key.toLowerCase()).trim();
                    const foundIndex =
                      services.findIndex((s) => s.toLowerCase().startsWith(search)) >= 0
                        ? services.findIndex((s) => s.toLowerCase().startsWith(search))
                        : -1;
                    if (foundIndex >= 0) {
                      setHighlightedIndex(foundIndex);
                      document.getElementById(`service-${foundIndex}`)?.scrollIntoView({ block: "nearest" });
                    }
                  }
                }}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white cursor-pointer flex justify-between items-center"
              >
                <span>{form.sertvice || "Select Service"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`w-5 h-5 transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {showServices && (
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border bg-white shadow-lg service-scroll">
                  {services.map((service, index) => (
                    <li
                      key={service}
                      id={`service-${index}`}
                      onClick={() => {
                        handleChange({ target: { name: "sertvice", value: service } });
                        setShowServices(false);
                      }}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`p-3 cursor-pointer ${
                        highlightedIndex === index
                          ? "bg-sky-100 text-sky-700"
                          : "hover:bg-sky-50"
                      }`}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}

              {errors.sertvice && (
                <p className="text-red-500 text-sm mt-1">{errors.sertvice}</p>
              )}
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
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
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

            {/* Buttons */}
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

          {/* Popup */}
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
