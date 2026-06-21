"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const icons = {
  implant: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2v4M8 6h8M9 10h6l1 4H8l1-4zM10 14v6M14 14v6" />
    </svg>
  ),
  whitening: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  makeover: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  rootcanal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  braces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="8" cy="18" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  emergency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
};

const treatments = [
  {
    id: "missing-teeth",
    icon: icons.implant,
    eyebrow: "RESTORE",
    title: "Missing Teeth",
    description:
      "Replace one or more missing teeth with secure, natural-looking dental implants.",
  },
  {
    id: "brighter-smile",
    icon: icons.whitening,
    eyebrow: "COSMETIC",
    title: "Want a Brighter Smile",
    description:
      "Professional whitening treatments designed to safely brighten your smile.",
  },
  {
    id: "smile-makeover",
    icon: icons.makeover,
    eyebrow: "CONFIDENCE",
    title: "Improve My Smile",
    description:
      "Custom treatment plans to enhance the appearance and balance of your smile.",
  },
  {
    id: "tooth-pain",
    icon: icons.rootcanal,
    eyebrow: "RELIEF",
    title: "Tooth Pain",
    description:
      "Comfortable root canal treatment to relieve pain and preserve your natural tooth.",
  },
  {
    id: "crooked-teeth",
    icon: icons.braces,
    eyebrow: "ALIGN",
    title: "Crooked Teeth",
    description:
      "Straighten crowded or uneven teeth with braces and clear aligners.",
  },
  {
    id: "emergency",
    icon: icons.emergency,
    eyebrow: "URGENT",
    title: "Dental Emergency",
    description:
      "Fast access to expert care when urgent dental problems need immediate attention.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Treatment Card ───────────────────────────────────────────────────────────
function TreatmentCard({ treatment, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.08)",
        borderColor: "#d1d5db",
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      className="group flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-7 cursor-default"
      style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.04)" }}
    >
      <div className="flex flex-col h-full">
  <span
    className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600 mb-5"
  >
    {treatment.icon}
  </span>

  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-600 mb-3">
    {treatment.eyebrow}
  </p>

  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
    {treatment.title}
  </h3>

  <p className="text-[15px] leading-relaxed text-neutral-500">
    {treatment.description}
  </p>

  <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium">
    Explore Treatment
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
</div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function SmileSolutions() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="solutions-heading"
      className="bg-white border-t border-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">

        {/* ── Section header ── */}
        <motion.div
          className="max-w-2xl mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          custom={0}
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-blue-600 mb-4">
            Our Treatments
          </p>
          <h2
            id="solutions-heading"
            className="text-3xl md:text-[2.1rem] font-bold text-neutral-900 leading-tight tracking-tight mb-4"
          >
            Dental Care Designed Around Your Needs
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed">
            From relieving pain to restoring confidence, we provide
            personalised treatments to help you smile comfortably again.
          </p>
        </motion.div>

        {/* ── Treatment grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {treatments.map((treatment, i) => (
            <TreatmentCard key={treatment.id} treatment={treatment} index={i + 1} />
          ))}
        </div>

        {/* ── CTA block ── */}
        <motion.div
          ref={ctaRef}
          animate={ctaInView ? "visible" : "hidden"}
          initial="hidden"
          variants={fadeUp}
          custom={0}
          className="flex flex-col items-center text-center rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-12 md:py-14"
          style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)" }}
        >
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-400 mb-4">
            Need guidance?
          </p>
          <h3 className="text-2xl md:text-[1.65rem] font-bold text-neutral-900 leading-tight tracking-tight mb-3">
            Let's Find The Right Solution For Your Smile
          </h3>
          <p className="text-[15px] text-neutral-500 leading-relaxed max-w-md mb-8">
            Book a consultation and get a personalised treatment plan based on your goals, concerns, and oral health needs.
          </p>
          <motion.a
            href="#book"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book a Consultation
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}