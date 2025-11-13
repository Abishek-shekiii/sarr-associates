import React, { useEffect, useState } from "react";
import { CheckCircle, ShieldCheck, Briefcase, Globe, Lightbulb, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
//youtube vide lazy load  fucntion
function LazyYouTube({ videoId }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer aspect-[9/16] group"
      onClick={() => setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          <img
            src={thumbnail}
            alt="SARR Associates Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* ▶ replaced with YouTube-Shorts style button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex items-center justify-center">
              <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
                <div className="absolute inset-0 bg-white rounded-2xl blur-[2px] opacity-90"></div>
                <div className="relative bg-[#FF0000] rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    className="translate-x-[1px]"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="SARR Associates Guest Lecture Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

// home functions
export default function Home() {
  const [currentFounderIndex, setCurrentFounderIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // About images for auto scroll
  const founderImages = [
  "/images/about_1.jpg",
  "/images/home_about.jpg",
  "/images/about_2.jpg",
  "/images/about_3.jpg",
  "/images/about_4.jpg",
  "/images/about_5.jpg",
  "/images/about_6.jpg",
  "/images/about_7.jpg",
  ];

  useEffect(() => {
    if (paused) return; // pause rotation on hover or touch
    const interval = setInterval(() => {
      setCurrentFounderIndex((prev) => (prev + 1) % founderImages.length);
    }, 6000); // every 6 seconds (smooth timing)
    return () => clearInterval(interval);
  }, [paused]);

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

  // const services = [
  //   {
  //     name: "SEDEX (SMETA) Audit Support",
  //     desc: "Prepare your factory for SEDEX (SMETA) audits — ensuring compliance with ethical trade and global buyer standards.",
  //     image: "/images/sedex_service.jpg",
  //   },
  //   {
  //     name: "Social Compliance Audit",
  //     desc: "Independent audits to identify gaps, reduce risks, and build buyer confidence.",
  //     image:
  //       "/images/social_complaince_home.jpg",
  //   },
  //   {
  //     name: "SA 8000 Certification",
  //     desc: "Globally recognized certification  for ethical and responsible workplaces.",
  //     image:
  //       "/images/SA_8000_home.jpg",
  //   },
  //   {
  //     name: "amfori BSCI & WRAP Support",
  //     desc: "Helping businesses align with international buyer codes of conduct.",
  //     image:
  //       "/images/amfori_bsci.jpg",
  //   },
  //   {
  //     name: "ISO Standards",
  //     desc: "ISO 9001, 14001, 45001 — enhancing quality, safety, and sustainability across industries.",
  //     image:
  //       "/images/ISO_home.jpg",
  //   },
  //   {
  //     name: "HR Consulting",
  //     desc: "Policies, payroll, and people management aligned to compliance and growth.",
  //     image:
  //       "/images/hr_home.jpg",
  //   },
  // ];

  //updated new
  const services = [
    {
      name: "Social & Ethical Compliance",
      desc: "Prepare for SEDEX, amfori BSCI, WRAP, and SA 8000 audits — build a responsible and trusted workplace.",
      image: "/images/social_complaince_home.jpg",
    },
    {
      name: "Management System Certifications",
      desc: "Achieve ISO 9001, ISO 14001, ISO 45001, IATF and BIS certifications that enhance global credibility.",
      image: "/images/ISO_home.jpg",
    },
    {
      name: "Sustainability & Product Standards",
      desc: "Adopt eco-conscious certifications like GOTS, GRS, OEKO-TEX, OCS, and BCI for sustainable production.",
      image: "/images/sustainability_home.jpg",
    },
    {
      name: "Security & Supply Chain Audits",
      desc: "Secure your global operations with CTPAT, GSV, and supplier risk assessments.",
      image: "/images/security_chain_home.jpg",
    },
    {
      name: "HR & Statutory Compliance",
      desc: "From policies to payroll — ensure 100% compliance with HR and labour law frameworks.",
      image: "/images/hr_home.jpg",
    },
    {
      name: "Training & Capacity Building",
      desc: "Empower employees with compliance workshops, awareness sessions, and internal auditor programs.",
      image: "/images/training.jpg",
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

      {/* About Section with Auto-Transition Founder Photos */}
      <section
        id="about"
        className="bg-gradient-to-br from-sky-50 to-emerald-50 py-20 px-6 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Static About Text */}
          <motion.div
            className="space-y-6 text-justify"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-sky-800">Who We Are</h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold">SARR Associates</span>, we believe audits are not a fear — 
              they are the foundation of <span className="font-semibold">trust, integrity, and sustainable growth. </span> 
              Our approach transforms compliance into a meaningful business strategy that ensures resilience,
              transparency, and long-term success.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With over <strong>18+ years</strong> of proven experience, we have partnered with 
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
       
          {/* Right: Rotating Founder Photos */}
          <motion.div
            className="relative flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div className="relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFounderIndex}
                  src={founderImages[currentFounderIndex]}
                  alt="Founder of SARR Associates"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="rounded-2xl shadow-xl w-full max-w-[400px] md:max-w-[90%] object-cover"
                />
              </AnimatePresence>
            </div>
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
                desc: "Preparation and guidance for global standards like ISO, SA 8000, amfori BSCI, WRAP, GOTS, GRS, and SEDEX.",
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

      {/* 🎥 SARR Associates Video Section */}
      <section className="bg-gradient-to-br from-sky-50 to-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800">
              Inspiring Future Leaders in Compliance & Auditing
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-semibold">Dr. N.G.P. Arts and Science College</span>, our founder and 
              lead consultant shared valuable industry insights during a guest lecture on 
              <span className="font-semibold"> “Quality Compliances”</span> to the students practising under
              <span className="font-semibold"> Department of COMMERCE</span>
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              The session focused on bridging the gap between academic knowledge and real-world practices — helping students 
              understand how modern businesses maintain <span className="font-semibold">social accountability, sustainability, and Quality compliance</span> 
              in an evolving global environment.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Through interactive discussions and practical case studies, <span className="font-semibold">SARR Associates</span> continues 
              to inspire young professionals to see compliance not as a checkbox — but as a culture of trust and integrity.
            </p>
          </motion.div>

          {/* Right Video (Lazy-Loaded YouTube) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto w-full max-w-md md:max-w-[400px]"
          >
            <LazyYouTube videoId="HpM1aL1bC1Y" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
