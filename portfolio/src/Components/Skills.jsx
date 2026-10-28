import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const aboutData = {
  skills: [
    // Frontend
    "React.js",
    "Vue.js",
    "Next.js",
    "Redux Toolkit",
    // Backend
    "Node.js",
    "Laravel",
    "Flask",
    "PHP",
    // Databases
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    // Languages
    "JavaScript",
    "Python",
    "C++",
    "SQL",
    // DevOps / Tools
    "Git / GitHub",
    "Postman",
    "Linux",
    "Docker",
    // Core / Architecture
    "REST API",
    "MERN Stack",
    "Multi-tenant Architecture",
    "RBAC",
    "OAuth 2.0",
    "OpenAI API Integration",
    "Scalable Architecture",
    "Agile / SDLC",
  ],
  education: [
    {
      year: "2022 - 2026",
      university: "Superior University of Pakistan",
      degree: "BS in Computer Science",
      description:
        "Focused on AI, Web Development, Software Engineering, and Databases.",
    },
    {
      year: "2019 - 2021",
      university: "KIPS College",
      degree: "Intermediate in Pre-Engineering",
      description: "Studied Mathematics, Physics, and Computer Science.",
    },
    {
      year: "2017 - 2019",
      university: "Govt. High School",
      degree: "Matriculation (Science)",
      description: "Completed studies with focus on Science and Mathematics.",
    },
  ],
};

const Skills = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isPaused = useRef(false);
  const lastTime = useRef(0);

  // Smooth auto-scroll for education
  const smoothScroll = (time) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused.current) return;

    if (!lastTime.current) lastTime.current = time;
    const deltaTime = time - lastTime.current;
    lastTime.current = time;

    scrollContainer.scrollTop += deltaTime * 0.04;

    if (
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight
    ) {
      scrollContainer.scrollTop = 0;
    }

    animationRef.current = requestAnimationFrame(smoothScroll);
  };

  const startScroll = () => {
    if (!animationRef.current) {
      isPaused.current = false;
      animationRef.current = requestAnimationFrame(smoothScroll);
    }
  };

  const stopScroll = () => {
    isPaused.current = true;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300"
        >
          My <span className="text-cyan-400">Skills &amp; Journey</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 p-6 rounded-2xl shadow-lg border border-cyan-400/20 max-h-[550px] flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300 flex-shrink-0">
              Education
            </h3>

            <div
              ref={scrollRef}
              className="relative border-l border-gray-700 pl-6 space-y-6 overflow-hidden flex-1"
              onMouseEnter={stopScroll}
              onMouseLeave={startScroll}
            >
              {aboutData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <span className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-cyan-400"></span>
                  <p className="text-xs text-gray-400">{edu.year}</p>
                  <h4 className="text-sm font-semibold text-gray-200">
                    {edu.university}
                  </h4>
                  <p className="text-sm text-cyan-300">{edu.degree}</p>
                  <p className="text-xs text-gray-400 mt-1">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills as stylish badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900/40 p-6 rounded-2xl shadow-lg border border-cyan-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300 text-center">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {aboutData.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-medium text-sm hover:scale-110 transition-transform cursor-pointer shadow-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
