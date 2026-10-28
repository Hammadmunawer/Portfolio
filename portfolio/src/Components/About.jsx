import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaLaptopCode } from "react-icons/fa";
import photo from "/img/proile 2.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* ✅ Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>

      {/* ✅ Overlay Glow Effect */}
      <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay"></div>

      {/* ✅ Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            About Me
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Get to know who I am, what I do, and my journey in AI & tech.
          </p>
        </motion.div>

        {/* ✅ Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 👤 Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20 group">
              <img
                src={photo}
                alt="Profile"
                className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition"></div>
            </div>
          </motion.div>

          {/* 📄 Right - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8 text-left"
          >
            {/* Who I Am */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 flex items-center gap-2">
                <FaUser className="text-cyan-400" /> Who I Am
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                I'm{" "}
                <span className="text-cyan-400 font-medium">Hammad</span>, an
                AI Engineer passionate about building intelligent, scalable, and
                user-friendly applications. I specialize in{" "}
                <span className="text-teal-300">
                  AI website development, AI mobile app development, and custom
                  AI SaaS solutions
                </span>
                . I help startups, entrepreneurs, and businesses bring their AI
                ideas to life — from concept to production-ready products.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 flex items-center gap-2">
                <FaCode className="text-cyan-400" /> What I Do
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                I build{" "}
                <span className="text-cyan-400">
                  AI-powered web apps, mobile apps, and SaaS platforms
                </span>{" "}
                integrated with cutting-edge AI technologies like OpenAI,
                custom chatbots, virtual assistants, intelligent automation, and
                smart workflows. I deliver modern, scalable, and user-friendly
                digital products tailored to real-world business needs.
              </p>
            </div>

            {/* My Vision */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 flex items-center gap-2">
                <FaLaptopCode className="text-cyan-400" /> My Vision
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                My goal is to empower businesses with the power of AI — making
                technology more intelligent, accessible, and impactful. I
                believe in{" "}
                <span className="text-teal-300">
                  innovation, quality, collaboration,
                </span>{" "}
                and continuously pushing the boundaries of what AI can achieve
                for modern businesses and startups.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
