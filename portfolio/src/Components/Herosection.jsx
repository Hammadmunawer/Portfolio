import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import particleConfig from "./particle-config.js";

// ✅ Centralized Hero Data
const heroData = {
  name: "Hammad Ali",
  roles: [
    "AI Engineer",
    "AI Website Developer",
    "AI Mobile App Developer",
    "Custom AI SaaS Builder",
    "Intelligent Automation Expert",
  ],
  description:
    "I'm an AI Engineer specializing in AI website development, AI mobile app development, and custom AI SaaS solutions. I help startups, entrepreneurs, and businesses build intelligent, scalable, and user-friendly applications that solve real-world problems and drive business growth.",
  cta: {
    contact: "#contact",
    cv: "/assets/Hammad.pdf",
  },
  socialLinks: [
    { id: "github", icon: FaGithub, url: "https://github.com/Hammadmunawer" },
    {
      id: "linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/hammad-munawer",
    },
  ],
};

const HeroSection = () => {
  // ✅ Init Particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // ✅ Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* ✅ Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* ✅ Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="text-slate-200">Hi, I'm </span>
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {heroData.name}
          </span>
        </motion.h1>

        {/* Dynamic Roles */}
        <motion.div
          variants={itemVariants}
          className="text-lg md:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6"
          aria-label="Dynamic roles"
        >
          I am an{" "}
          <TypeAnimation
            sequence={heroData.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            className="text-cyan-400"
            repeat={Infinity}
          />
        </motion.div>

        {/* Short Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {heroData.description}
        </motion.p>

        {/* ✅ CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* Contact Me */}
          <motion.a
            href={heroData.cta.contact}
            aria-label="Contact Me"
            className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          {/* Download CV */}
          <motion.a
            href={heroData.cta.cv}
            download
            aria-label="Download CV"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-cyan-300 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload />
            Download CV
          </motion.a>
        </motion.div>

        {/* ✅ Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 flex-wrap"
        >
          {heroData.socialLinks.map(({ id, icon: Icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={id}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon size={28} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
