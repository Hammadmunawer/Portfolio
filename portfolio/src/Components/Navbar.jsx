import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Nav Items
  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "testimonials", label: "Reviews" },
    ],
    []
  );

  // ✅ Intersection Observer for Active Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // ✅ Scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth Scroll
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  }, []);

  // ✅ Disable body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ✅ Dark Mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${scrolled
          ? "bg-gray-900/90 py-2 shadow backdrop-blur border-b border-cyan-500/20"
          : "bg-transparent py-3"
        }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="cursor-pointer text-sm md:text-base font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 8px rgba(56,189,248,0.5)",
                "0 0 16px rgba(56,189,248,0.8)",
                "0 0 8px rgba(56,189,248,0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span>Hammad</span>
        </motion.a>

        {/* ✅ Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-800/40 border border-gray-700/30 backdrop-blur shadow-inner">
          {navItems.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer relative px-3 py-1.5 text-xs font-medium flex items-center gap-2 transition-colors ${activeSection === id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-300"
                }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-1/2 w-4/5 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transform -translate-x-1/2"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* ✅ Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer px-4 py-2 text-xs font-medium text-cyan-300 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>

        </div>

        {/* ✅ Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={() => setDarkMode((prev) => !prev)}
            className="cursor-pointer p-2 rounded-full bg-gray-800/70 text-yellow-300 hover:text-white border border-gray-700/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            title="Toggle Theme"
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2.5 rounded-lg bg-gray-800/70 text-slate-300 hover:text-cyan-400 border border-gray-700/50 z-[9999]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-[9998] bg-gray-950/95 backdrop-blur-lg flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col items-center gap-5 w-full">
              {navItems.map(({ id, label }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`cursor-pointer w-full py-3 px-4 rounded-lg flex items-center gap-3 text-sm ${activeSection === id
                      ? "bg-cyan-500/10 text-cyan-300 shadow"
                      : "text-slate-300 hover:bg-gray-800/40"
                    }`}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.button>
              ))}

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer w-full py-3 px-4 text-center rounded-lg text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/10 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
