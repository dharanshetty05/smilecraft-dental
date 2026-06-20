"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Minimal SVG icons ────────────────────────────────────────────────────────
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
    id: "implants",
    icon: icons.implant,
    title: "Dental Implants",
    description:
      "Replace missing teeth with a permanent, natural-looking solution that feels and functions like your own.",
  },
  {
    id: "whitening",
    icon: icons.whitening,
    title: "Teeth Whitening",
    description:
      "Brighten and refresh your smile with a professional whitening treatment tailored to your sensitivity and goals.",
  },
  {
    id: "makeover",
    icon: icons.makeover,
    title: "Smile Makeovers",
    description:
      "Transform your smile's appearance with a fully personalised plan combining the right treatments for you.",
  },
  {
    id: "rootcanal",
    icon: icons.rootcanal,
    title: "Root Canal Treatment",
    description:
      "Relieve tooth pain and preserve your natural tooth with a comfortable, precise procedure.",
  },
  {
    id: "braces",
    icon: icons.braces,
    title: "Braces & Aligners",
    description:
      "Straighten crooked or crowded teeth comfortably and discreetly with modern orthodontic options.",
  },
  {
    id: "emergency",
    icon: icons.emergency,
    title: "Emergency Dental Care",
    description:
      "Get prompt, expert treatment when urgent dental problems arise — we're here when you need us most.",
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
      {/* Icon */}
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-blue-600"
        style={{ background: "#EFF6FF" }}
        aria-hidden="true"
      >
        {treatment.icon}
      </span>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[17px] font-semibold text-neutral-900 leading-snug tracking-tight">
          {treatment.title}
        </h3>
        <p className="text-[14.5px] text-neutral-500 leading-relaxed">
          {treatment.description}
        </p>
      </div>

      {/* Inline link */}
      <span className="mt-auto inline-flex items-center gap-1 text-[13.5px] font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
        Learn more
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
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
            What Can We Help You With?
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed">
            Whether you're looking to improve your smile, relieve pain, replace
            missing teeth, or maintain long-term oral health — we're here to help
            you find the right path forward.
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
            Not Sure Which Treatment Is Right For You?
          </h3>
          <p className="text-[15px] text-neutral-500 leading-relaxed max-w-md mb-8">
            We'll help you understand your options and recommend the treatment
            that best fits your needs — no pressure, no jargon.
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