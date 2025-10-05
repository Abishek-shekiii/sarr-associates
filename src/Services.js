import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Lightbulb,
  Target,
  ClipboardCheck,
  Globe,
  Briefcase,
  Factory,
  GraduationCap,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Service data with icons & creative sections
const SERVICES = [
  {
    id: 1,
    title: "Social Compliance Audit",
    summary: "End-to-end audits to meet buyer and legal compliance needs.",
    icon: <ClipboardCheck className="w-10 h-10 text-sky-600" />,
    overview:
      "A detailed review of your factory’s compliance with international labor laws, ethical practices, worker safety, and social accountability standards.",
    value:
      "Global buyers mandate compliance audits. Passing them not only avoids shipment delays but also builds long-term credibility and trust with your partners.",
    audience:
      "Best suited for exporters, garment factories, and suppliers working with European, US, and global buyers.",
    benefits: [
      "Comprehensive gap analysis",
      "Mock audits to prepare your team",
      "Corrective action roadmaps",
      "Hands-on documentation support",
    ],
  },
  {
    id: 2,
    title: "SA 8000 Certification",
    summary: "World’s leading social accountability certification.",
    icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
    overview:
      "SA 8000 is a global benchmark covering workplace ethics, labor rights, and safety standards.",
    value:
      "It demonstrates your commitment to social responsibility, making you a preferred supplier for leading international brands.",
    audience:
      "Ideal for exporters supplying to ethical and sustainability-focused buyers.",
    benefits: [
      "Documentation & policy creation",
      "Employee awareness sessions",
      "Audit preparation support",
      "Certification body coordination",
    ],
  },
  {
    id: 3,
    title: "ISO Certifications",
    summary: "Quality, safety & environment standards for global business.",
    icon: <Globe className="w-10 h-10 text-indigo-500" />,
    overview:
      "We guide companies through ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Health & Safety).",
    value:
      "ISO certifications improve efficiency, reduce risks, and help access international markets confidently.",
    audience:
      "Factories, suppliers, and exporters seeking global recognition and sustainable growth.",
    benefits: [
      "System implementation & documentation",
      "Internal audits",
      "Gap closure support",
      "Certification readiness",
    ],
  },
  {
    id: 4,
    title: "BSCI & WRAP Support",
    summary: "Prepare your factory for international buyer audits.",
    icon: <FileText className="w-10 h-10 text-pink-500" />,
    overview:
      "BSCI and WRAP ensure responsible supply chains with fair labor and ethical manufacturing.",
    value:
      "Most European and US buyers demand these certifications before partnerships are confirmed.",
    audience:
      "Garment exporters and manufacturers aiming to supply global fashion brands.",
    benefits: [
      "Mock audits & CAP preparation",
      "Training for compliance teams",
      "Documentation & buyer requirements",
      "Handholding during audit",
    ],
  },
  {
    id: 5,
    title: "OEKO TEX / GOTS / GRS",
    summary: "Sustainability certifications for textiles and apparel.",
    icon: <Factory className="w-10 h-10 text-orange-500" />,
    overview:
      "We help businesses achieve OEKO TEX, GOTS, and GRS certifications for safe, organic, and recycled textiles.",
    value:
      "Eco-certifications make your products attractive to global brands focused on sustainability.",
    audience:
      "Textile mills, exporters, and sustainable product manufacturers.",
    benefits: [
      "Traceability system setup",
      "Labelling compliance",
      "Lab test coordination",
      "Buyer communication support",
    ],
  },
  {
    id: 6,
    title: "HR Consulting",
    summary: "Professional HR advisory for compliance and workforce management.",
    icon: <Briefcase className="w-10 h-10 text-yellow-500" />,
    overview:
      "We streamline HR systems covering policies, payroll, compliance, performance management, and dispute resolution.",
    value:
      "Strong HR practices improve retention, boost efficiency, and ensure compliance with labor laws.",
    audience:
      "Factories, industries, and businesses employing 50+ staff.",
    benefits: [
      "HR manual drafting",
      "Payroll & attendance systems",
      "Labor law compliance checks",
      "Performance tracking tools",
    ],
  },
  {
    id: 7,
    title: "ESI / PF / Factories Act",
    summary: "Statutory compliance for Indian labor laws.",
    icon: <FileText className="w-10 h-10 text-red-500" />,
    overview:
      "We help businesses comply with statutory requirements under ESI, PF, and Factories Act regulations.",
    value:
      "Avoid penalties, disputes, and reputational risks by ensuring timely compliance with labor laws.",
    audience:
      "Manufacturers, factories, and industries employing contract or permanent staff.",
    benefits: [
      "Registration & monthly filings",
      "Audit & inspection handling",
      "Dispute resolution",
      "Compliance reporting",
    ],
  },
  {
    id: 8,
    title: "Training & Capacity Building",
    summary: "Skill development and compliance training for staff.",
    icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
    overview:
      "We conduct training programs for workers, supervisors, and managers on compliance, safety, and audits.",
    value:
      "Training empowers employees, reduces risks, and ensures smooth buyer audits.",
    audience:
      "Workers, compliance teams, supervisors, and factory management.",
    benefits: [
      "Custom training workshops",
      "Simulation audits",
      "Leadership skill development",
      "Compliance awareness programs",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="relative py-20 px-6 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-800">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 text-center cursor-pointer border border-sky-100 hover:border-emerald-200"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-lg md:text-xl font-semibold text-sky-800">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{service.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative overflow-y-auto max-h-[90vh]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold text-sky-700 mb-4">
                {selectedService.title}
              </h2>

              <div className="flex items-start gap-3 mb-4">
                <Lightbulb className="text-emerald-500 w-6 h-6" />
                <p className="text-gray-700">{selectedService.overview}</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Target className="text-sky-600 w-6 h-6" />
                <p className="text-gray-700">{selectedService.value}</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Users className="text-purple-600 w-6 h-6" />
                <p className="text-gray-700">{selectedService.audience}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How We Help
                </h3>
                <ul className="space-y-2">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-emerald-500 w-5 h-5 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  state={{ selectedService: selectedService.title }}
                  className="px-5 py-2 bg-gradient-to-r from-sky-600 to-emerald-400 text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Request This Service
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
