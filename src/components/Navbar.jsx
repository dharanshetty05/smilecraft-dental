"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const SMILE_SOLUTIONS = [
  {
    label: "Dental Implants",
    href: "/services/dental-implants",
  },
  {
    label: "Teeth Whitening",
    href: "/services/teeth-whitening",
  },
  {
    label: "Smile Makeovers",
    href: "/services/smile-makeovers",
  },
  {
    label: "Root Canal Treatment",
    href: "/services/root-canal",
  },
  {
    label: "Braces & Aligners",
    href: "/services/braces-aligners",
  },
  {
    label: "Emergency Dental Care",
    href: "/services/emergency",
  },
];

const NAV_LINKS = [
  { label: "Smile Solutions", href: "#", hasDropdown: true },
  { label: "Why SmileCraft", href: "/why-smilecraft" },
  { label: "Results & Reviews", href: "/results" },
  { label: "FAQs", href: "/faqs" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function Logo() {
  return (
    <a
        href="/"
        className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
        aria-label="SmileCraft Dental Studio — home"
    >
        <div className="leading-none">
            <span className="block text-gray-900 text-[20px] font-bold tracking-[-0.03em]">
            SmileCraft
            </span>
        </div>
    </a>
  );
}

function DropdownPanel({ isOpen }) {
    return (
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-100 p-3 z-50 "
                role="menu"
                aria-label="Smile Solutions"
            >
                <div className="grid grid-cols-2 gap-1">
                    {SMILE_SOLUTIONS.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        role="menuitem"
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
                    >
                        <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-150">
                                {label}
                            </p>
                        </div>
                    </a>
                    ))}
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}

function DesktopNav({ activeDropdown, setActiveDropdown, dropdownRef }) {
    const openDropdown = useCallback(
        (label) => {
        clearTimeout(closeTimeout.current);
        setActiveDropdown(label);
        },
        [setActiveDropdown]
    );

    const scheduleClose = useCallback(() => {
        closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
    }, [setActiveDropdown]);

    useEffect(() => () => clearTimeout(closeTimeout.current), []);

  return (
    <nav
        aria-label="Primary"
        className="
            hidden lg:flex
            items-center
            gap-1
            rounded-full
            border border-neutral-200
            bg-white
            backdrop-blur-md
            px-1.5
            py-1.5
            shadow-sm
        "
    >
      {NAV_LINKS.map(({ label, href, hasDropdown }) =>
        hasDropdown ? (
          <div
            key={label}
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => openDropdown(label)}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown((p) => (p === label ? null : label))
              }
              onFocus={() => openDropdown(label)}
              onBlur={scheduleClose}
              aria-expanded={activeDropdown === label}
              aria-haspopup="true"
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:text-blue-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {label}
              <motion.span
                animate={{ rotate: activeDropdown === label ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </motion.span>
            </button>

            <DropdownPanel isOpen={activeDropdown === label} />
          </div>
        ) : (
          <a
            key={label}
            href={href}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:text-blue-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {label}
          </a>
        )
      )}
    </nav>
  );
}

function CTAButton({ className = "" }) {
  return (
    <a
      href="/book"
      className={`
        inline-flex items-center justify-center
        px-5 py-2 rounded-full
        bg-blue-600 hover:bg-blue-700
        text-white text-sm font-semibold
        shadow-sm
        transition-all duration-200 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        whitespace-nowrap
        ${className}
      `}
    >
      Book Appointment
    </a>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Close on escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lg:hidden overflow-hidden border-t border-gray-100"
          id="mobile-menu"
        >
          <div className="px-4 pt-3 pb-6 space-y-0.5">
            {/* Smile Solutions accordion */}
            <motion.div custom={0} initial="hidden" animate="visible">
              <button
                type="button"
                onClick={() => setServicesExpanded((p) => !p)}
                aria-expanded={servicesExpanded}
                aria-controls="mobile-services"
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Smile Solutions
                <motion.span
                  animate={{ rotate: servicesExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesExpanded && (
                  <motion.div
                    id="mobile-services"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.16 } }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 mt-1 space-y-0.5 pl-3 border-l-2 border-blue-100">
                      {SMILE_SOLUTIONS.map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          onClick={onClose}
                          className="block px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Other nav links */}
            {NAV_LINKS.filter((l) => !l.hasDropdown).map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={onClose}
                custom={i + 1}
                initial="hidden"
                animate="visible"
                className="block px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {label}
              </motion.a>
            ))}

            {/* Divider + CTA */}
            <motion.div
              custom={NAV_LINKS.length + 1}
              initial="hidden"
              animate="visible"
              className="pt-3 mt-2 border-t border-gray-100"
            >
              <CTAButton className="w-full" />
            </motion.div>

            {/* Trust badge */}
            <motion.p
              custom={NAV_LINKS.length + 2}
              initial="hidden"
              animate="visible"
              className="text-center text-[11px] text-gray-400 pt-2"
            >
              ★ 4.9 · 500+ happy patients · No wait lists
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => { if (e.matches) setMobileOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        id="smilecraft-navbar"
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out`}
        role="banner"
      >
        {/* Top bar */}
        <div className="max-w-6xl mx-auto px-6 pt-4">
          <div
            className="
                flex items-center justify-between
                h-[64px]
                rounded-full
                border border-neutral-100
                bg-white/90
                backdrop-blur-md
                px-5
                shadow-sm
            "
        >
            {/* Left – Logo */}
            <Logo />

            {/* Center – Desktop Nav */}
            <DesktopNav
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              dropdownRef={dropdownRef}
            />

            {/* Right – CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <CTAButton className="hidden lg:inline-flex" />

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen((p) => !p)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="
                  lg:hidden flex items-center justify-center
                  w-9 h-9 rounded-lg
                  text-gray-600 hover:text-gray-900 hover:bg-gray-100
                  transition-colors duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden`}>
          <MobileMenu isOpen={mobileOpen} onClose={closeMobileMenu} />
        </div>
      </header>

      <div className="h-[64px]" aria-hidden="true" />
    </>
  );
}