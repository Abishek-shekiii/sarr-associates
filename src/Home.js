import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Briefcase, Globe, Lightbulb, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fallbackNews = [
      {
        id: 1,
        title: "Why SA 8000 Certification Matters for Global Trade",
        description:
          "SA 8000 builds a strong reputation with international buyers by proving ethical and social accountability standards.",
        url: "/services",
      },
      {
        id: 2,
        title: "Top 5 HR Compliance Mistakes Companies Must Avoid",
        description:
          "From missing employee records to weak payroll systems — small compliance gaps can lead to big risks.",
        url: "/services",
      },
      {
        id: 3,
        title: "How ISO Certifications Strengthen Export Opportunities",
        description:
          "ISO 9001, 14001, and 45001 certifications improve efficiency, safety, and sustainability — making businesses globally competitive.",
        url: "/services",
      },
    ];

    const cachedNews = sessionStorage.getItem("latestNews");
    setNews(fallbackNews);
  }, []);

  useEffect(() => {
    if (news.length > 0 && !isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [news, isPaused]);

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const services = [
    {
      name: "Social Compliance Audit",
      desc: "Independent audits to identify gaps, reduce risks, and build buyer confidence.",
      image:
        "/images/social_complaince_home.jpg",
    },
    {
      name: "SA 8000 Certification",
      desc: "Globally recognized certification  for ethical and responsible workplaces.",
      image:
        "/images/SA_8000_home.jpg",
    },
    {
      name: "BSCI & WRAP Support",
      desc: "Helping businesses align with international buyer codes of conduct.",
      image:
        "/images/BSCI_home.jpg",
    },
    {
      name: "ISO Standards",
      desc: "ISO 9001, 14001, 45001 — enhancing quality, safety, and sustainability across industries.",
      image:
        "/images/ISO_home.jpg",
    },
    {
      name: "HR Consulting",
      desc: "Policies, payroll, and people management aligned to compliance and growth.",
      image:
        "/images/hr_home.jpg",
    },
    {
      name: "ESI / PF / Factories Act",
      desc: "Complete statutory compliance management with zero penalties.",
      image:
        "/images/pf_home.jpg",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[650px] flex items-center"
        style={{
          backgroundImage:
            "url('/images/home_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-emerald-800/70"></div>
        <div className="max-w-7xl mx-auto px-6 relative text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-snug"
          >
            Comprehensive Compliance & Audit Solutions for Every Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg max-w-2xl text-gray-100"
          >
            From manufacturing to services, we help businesses achieve
            certifications, clear audits, and stay 100% compliant with global
            and statutory requirements.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">
          🌍 Compliance & Growth Solutions
        </h2>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 duration-500"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Image section */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Text section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-sky-700 group-hover:text-emerald-600 transition">
                  {s.name}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(16, 185, 129, 0)",
                "0 0 20px rgba(16, 185, 129, 0.4)",
                "0 0 0px rgba(16, 185, 129, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-emerald-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            View All Services →
          </motion.a>
        </div>
      </section>



      {/* About */}
      <section
        id="about"
        className="bg-gradient-to-br from-sky-50 to-emerald-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 text-justify"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-sky-800">Who We Are?</h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold">SARR Associates</span>, we believe audits are not a fear —
              they are the foundation of <span className="font-semibold">trust, integrity, and sustainable growth.</span> 
              Our approach transforms compliance into a meaningful business strategy that ensures resilience,
              transparency, and long-term success.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With over <strong>18 years</strong> of proven experience, we have partnered with 
              <strong> 200+ organizations</strong> across industries such as apparel, textiles, cigarette manufacturing,
              jute, mango pulp processing, footwear, engineering, logistics, IT, and general manufacturing.  
              Our specialized consulting bridges the gap between <span className="font-semibold">compliance and competitiveness</span>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We specialize in <span className="font-semibold">Audit Preparation, HR Consulting, Statutory Compliance, 
              and Certification Support</span>, helping organizations simplify regulations and convert compliance into
              a catalyst for growth.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              ✨ At <span className="font-semibold">SARR Associates</span>, we don’t just prepare you for audits — 
              we prepare you for <strong>global recognition and long-term excellence.</strong>
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/images/home_about.jpg"
              alt="About SARR Associates"
              className="rounded-2xl shadow-xl max-w-full md:max-w-[90%]"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-sky-800 mb-12"
          >
            🏛️ Centers of Excellence
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
                title: "Audit & Certification Readiness",
                desc: "Preparation and guidance for global standards like ISO, SA 8000, BSCI, WRAP, GOTS, GRS, and SEDEX.",
              },
              {
                icon: <Briefcase className="w-8 h-8 text-sky-600" />,
                title: "HR Systems & Labour Law Compliance",
                desc: "Developing structured HR systems aligned with statutory norms and corporate ethics.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
                title: "Training & Capacity Building",
                desc: "Empowering your workforce through compliance-based programs and skill enhancement workshops.",
              },
              {
                icon: <Globe className="w-8 h-8 text-sky-600" />,
                title: "Sustainability & Social Compliance",
                desc: "End-to-end consulting for achieving ethical and sustainable operations across supply chains.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
                title: "Awareness & Lecture Programs",
                desc: "Professional sessions on HR, labour laws, and compliance management for all organizational levels.",
              },
              {
                icon: <Target className="w-8 h-8 text-red-500" />,
                title: "Gap Analysis & Risk Assessment",
                desc: "Identifying compliance risks, performing detailed evaluations, and ensuring audit readiness.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-sky-50 to-emerald-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-sky-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
</section>



      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-10">
            Trusted by Industry Leaders
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                text: "SARR Associates helped us prepare for our ISO certification audit — the process was smooth, structured, and effective.",
                name: "General Manager, Engineering Unit",
              },
              {
                text: "We passed our buyer social compliance audit with zero major findings — thanks to their expert training and corrective action planning.",
                name: "HR Head, Manufacturing Industry",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg rounded-2xl p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="text-gray-700 italic">“{t.text}”</p>
                <p className="mt-3 font-semibold text-emerald-600">– {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Insights Combined */}
      <section className="bg-gradient-to-r from-sky-600 to-emerald-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 flex flex-col justify-center text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Make Audits Your Strength, Not Your Stress
            </h3>
            <p className="mt-3 text-base md:text-lg text-sky-100">
              From gap analysis to certification handholding, we simplify
              compliance for every industry. Partner with us to build systems
              that last, audits that inspire trust, and certifications that open
              doors globally.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="mt-6 mx-auto inline-block px-6 py-2 bg-white text-sky-700 rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Talk to an Expert
            </motion.a>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 className="text-2xl font-bold text-sky-800 mb-6 text-center md:text-left">
              Audit & Compliance Insights
            </h2>

            {news.length > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg text-sky-700">
                    {news[currentIndex].title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-600">
                    {news[currentIndex].description ||
                      "Click below to read full article."}
                  </p>
                </div>
                <button
                  onClick={() =>
                    navigate("/services", {
                      state: { openService: news[currentIndex].title },
                    })
                  }
                  className="text-emerald-600 text-sm font-medium mt-4 inline-block hover:underline"
                >
                  Read more →
                </button>
              </motion.div>
            )}

            {/* Classy Arrows - Centered Below */}
            {news.length > 0 && (
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevNews}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow hover:scale-110 transition transform"
                >
                  ‹
                </button>
                <button
                  onClick={nextNews}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow hover:scale-110 transition transform"
                >
                  ›
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
