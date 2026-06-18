"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Star } from "lucide-react";

// ---------------------------------------------------------------------------
// Animation variants – subtle, readability-first
// ---------------------------------------------------------------------------
const CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const FADE_UP = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};

const IMAGE_FADE = {
  hidden: { opacity: 0, scale: 1.03 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export default function Hero() {
  return (
    <section
      aria-label="SmileCraft Dental Studio – Hero"
      className="relative min-h-[88vh] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="A SmileCraft dentist consulting a patient in a modern, welcoming clinic"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      {/* Readability Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-r
          from-white
          via-white/90
          to-white/10
        "
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex min-h-[88vh] items-center">
          <motion.div
            variants={CONTAINER}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Trust Badge */}
            <motion.div variants={FADE_UP}>
              <TrustBadge />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={FADE_UP}
              className="
                mt-6
                text-[2.25rem]
                font-bold
                leading-[1.15]
                tracking-tight
                text-neutral-900
                sm:text-[3rem]
                lg:text-[4rem]
                max-w-[22ch]
              "
            >
              Expert Dental Care in Ahmedabad for Healthier, More Confident
              Smiles
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={FADE_UP}
              className="
                mt-6
                max-w-[52ch]
                text-base
                leading-relaxed
                text-neutral-600
                sm:text-lg
              "
            >
              Whether you're dealing with tooth pain, missing teeth, or simply
              want a more confident smile, SmileCraft provides personalized
              dental care designed around your comfort, long-term oral health,
              and confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={FADE_UP}
              className="
                mt-8
                flex
                w-full
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href="#book"
                aria-label="Book an appointment at SmileCraft Dental Studio"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl bg-sky-600 px-7 py-4
                  text-base font-semibold text-white
                  shadow-sm
                  transition-all duration-150
                  hover:bg-sky-700
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-sky-600
                  active:scale-[0.98]
                  min-h-[52px]
                  w-full
                  sm:w-auto
                "
              >
                <CalendarDays
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                Book Appointment
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact SmileCraft Dental Studio on WhatsApp"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl border border-neutral-200
                  bg-white px-7 py-4
                  text-base font-semibold text-neutral-800
                  shadow-sm
                  transition-all duration-150
                  hover:border-neutral-300
                  hover:bg-neutral-50
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-neutral-400
                  active:scale-[0.98]
                  min-h-[52px]
                  w-full
                  sm:w-auto
                "
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Proof Strip */}
            <motion.div variants={FADE_UP} className="mt-8">
              <ProofStrip />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TrustBadge() {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full border border-amber-200 bg-amber-50
        px-4 py-1.5
      "
      aria-label="Rated 4.8 stars by over 100 patients"
    >
      <Star
        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
        aria-hidden="true"
      />
      <span className="text-xs font-semibold tracking-wide text-amber-700">
        4.8★ Google Rating • 100+ Happy Patients
    </span>
    </div>
  );
}

function ProofStrip() {
  const items = [
    { stat: "10+", label: "Years of expertise" },
    { stat: "5,000+", label: "Smiles transformed" },
    { stat: "Same-day", label: "Emergency slots" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
      {items.map(({ stat, label }, i) => (
        <div key={stat} className="flex items-center gap-2">
          {i !== 0 && (
            <span aria-hidden="true" className="h-4 w-px bg-neutral-200" />
          )}
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-neutral-900">{stat}</span>
            <span className="text-xs text-neutral-400">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-shrink-0 fill-[#25D366]"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}