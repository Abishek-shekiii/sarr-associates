import React, { useState } from "react";

// Service data with summary + detailed info
const SERVICES = [
  {
    id: 1,
    title: "Social Compliance Audit",
    summary: "End-to-end audits to meet buyer and legal compliance needs.",
    what: "A detailed assessment of your factory’s compliance with international labor laws, ethical practices, worker safety, and social accountability standards.",
    why: "Global buyers require social compliance as a minimum standard to ensure suppliers follow ethical and safe practices. Passing audits boosts credibility and ensures smoother trade.",
    who: "Exporters, garment factories, and suppliers working with European, US, and global buyers.",
    extra: "Includes gap analysis, documentation support, mock audits, and corrective action planning tailored for apparel industries."
  },
  {
    id: 2,
    title: "SA 8000 Certification",
    summary: "World’s leading social accountability certification.",
    what: "SA 8000 ensures ethical workplace conditions covering child labor, forced labor, health & safety, freedom of association, discrimination, disciplinary practices, working hours, and compensation.",
    why: "It’s a globally recognized certificate that demonstrates your business is committed to ethical practices and meets international buyer expectations.",
    who: "Factories and exporters supplying to ethical and sustainability-focused global brands.",
    extra: "Our consulting covers documentation, employee training, audit preparation, and certification body coordination."
  },
  {
    id: 3,
    title: "ISO Certifications",
    summary: "Quality, safety & environment standards for global business.",
    what: "We provide guidance for ISO 9001 (Quality Management), ISO 14001 (Environmental Management), and ISO 45001 (Occupational Health & Safety).",
    why: "ISO certifications improve process efficiency, reduce risks, enhance sustainability, and open access to international buyers.",
    who: "Manufacturers, exporters, and suppliers across textile and allied industries.",
    extra: "We support system implementation, internal audits, gap closure, and certification audit readiness."
  },
  {
    id: 4,
    title: "BSCI & WRAP Support",
    summary: "Prepare your factory for international buyer audits.",
    what: "BSCI (Business Social Compliance Initiative) and WRAP (Worldwide Responsible Accredited Production) focus on ethical supply chains.",
    why: "Buyers from Europe and the US often require BSCI or WRAP approval to finalize supplier agreements.",
    who: "Garment exporters and factories aiming to strengthen international trade partnerships.",
    extra: "We conduct mock audits, provide CAP (Corrective Action Plan) support, and train your compliance team."
  },
  {
    id: 5,
    title: "OEKO TEX / GOTS / GRS",
    summary: "Sustainability certifications for textiles and apparel.",
    what: "We guide factories through OEKO TEX (safe textiles), GOTS (organic textiles), and GRS (recycled materials).",
    why: "Global fashion brands prioritize sustainability. These certifications give your products global credibility and attract eco-conscious buyers.",
    who: "Textile mills, garment exporters, and sustainable product manufacturers.",
    extra: "We help with traceability systems, labelling, documentation, and lab test support."
  },
  {
    id: 6,
    title: "HR Consulting",
    summary: "Professional HR advisory for compliance and workforce management.",
    what: "Covers HR policy design, payroll systems, labor law compliance, performance tracking, and dispute resolution.",
    why: "Good HR systems improve worker satisfaction, reduce attrition, and minimize compliance risks.",
    who: "Factories, industries, and corporate units employing 50+ staff.",
    extra: "Includes drafting HR manuals, digital attendance solutions, and compliance audits."
  },
  {
    id: 7,
    title: "ESI / PF / Factories Act",
    summary: "Statutory compliance for Indian labor laws.",
    what: "We ensure companies meet statutory requirements under ESI, PF, and Factories Act regulations.",
    why: "Non-compliance leads to penalties, legal disputes, and reputational damage with both workers and buyers.",
    who: "Any manufacturing unit, factory, or industry operating under Indian labor laws.",
    extra: "Includes registration, monthly filings, inspections handling, and corrective actions."
  },
  {
    id: 8,
    title: "Training & Capacity Building",
    summary: "Skill development and compliance training for staff.",
    what: "Covers training for workers, supervisors, and management on compliance, safety, and buyer audit expectations.",
    why: "Training empowers employees, reduces errors, and ensures smooth buyer audits.",
    who: "Workers, line supervisors, compliance officers, HR, and factory management.",
    extra: "Custom workshops, simulation audits, and leadership training modules included."
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sky-800">
        Our Services
      </h1>

      {/* Grid of services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-lg md:text-xl font-semibold text-green-600">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{service.summary}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✖
            </button>

            {/* Modal content */}
            <h2 className="text-2xl font-bold text-sky-700 mb-4">
              {selectedService.title}
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">What?</h3>
                <p>{selectedService.what}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Why?</h3>
                <p>{selectedService.why}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">For Whom?</h3>
                <p>{selectedService.who}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Additional Details</h3>
                <p>{selectedService.extra}</p>
              </div>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 bg-gradient-to-r from-sky-600 to-emerald-400 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
