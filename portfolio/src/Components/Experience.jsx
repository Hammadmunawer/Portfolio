import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRocket,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const timelineData = [
  {
    company: "Techzo Ltd.",
    link: "#",
    period: "Jan 2025 - Present (2 Years)",
    position: "Software Engineer",
    location: "Lahore, Pakistan",
    icon: <FaRocket />,
    description:
      "Working on full-stack development, multi-tenant e-commerce architectures, and SaaS applications. Leading feature development, scalable RESTful API design, and database optimizations.",
    tech: [
      "Vue.js",
      "React.js",
      "Node.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "Multi-tenant",
      "REST APIs",
    ],
    achievements: [
      "Developed 'Get Shopin', a multi-tenant e-commerce platform with Vue.js frontend and separate per-tenant MongoDB databases for total data isolation.",
      "Built 'Kingdom Rides', a comprehensive UK-based vehicle booking and fleet management platform using Laravel and MySQL with instant quote calculations.",
      "Developed 'Trounce', an AI-powered SaaS platform integrating FB, Instagram, Twitter, and LinkedIn into a single unified analytics dashboard.",
      "Designed clean, scalable RESTful APIs adhering to MVC, Layered Architecture, and Repository Patterns.",
      "Actively engaged in Agile sprints, continuous feature rollouts, code reviews, and production performance tuning.",
    ],
  },
  {
    company: "HuboWeb Technology (Pvt.) Ltd.",
    link: "https://huboweb.com/",
    period: "Jan 2023 - Dec 2024 (2 Years)",
    position: "Software Engineer",
    location: "Lahore, Pakistan",
    icon: <FaLaptopCode />,
    description:
      "Spearheaded backend and full-stack development for enterprise AI platforms, multi-tenant healthcare SaaS, and internal enterprise systems.",
    tech: [
      "React",
      "ASP.NET Core",
      "Node.js",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "OpenAI API",
      "Dapper",
    ],
    achievements: [
      "Architected 'CVAI' — a production-grade AI candidate validation system orchestrating multi-stage AI pipelines with BullMQ, Redis, PostgreSQL, and React monitoring.",
      "Engineered 'CoreMax Cloud' — a multi-tenant pharmaceutical SaaS with subdomain tenant isolation, cross-timezone scheduling, and subscription plan restrictions.",
      "Developed 'HRMS' with an ASP.NET Core & Dapper backend and React frontend, automating payroll, attendance, and role-based permissions.",
      "Integrated OpenAI APIs and customized AI assistants into diverse web systems for intelligent workflow automation.",
      "Optimized query structures and database indexing across PostgreSQL and MySQL, delivering an estimated 30% speed boost.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAchievements, setOpenAchievements] = useState(null);

  // ✅ Reorder data: selected item goes to top
  const reorderedData = useMemo(() => {
    if (activeTab === null) return timelineData;
    const selected = timelineData[activeTab];
    const rest = timelineData.filter((_, i) => i !== activeTab);
    return [selected, ...rest];
  }, [activeTab]);

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-slate-200 min-h-screen px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent mb-3">
          Professional Journey
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Over 4+ years of professional engineering experience across modern SaaS, AI pipelines, and enterprise architectures
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide mb-6 justify-center">
        {timelineData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-white shadow-lg"
                : "bg-slate-800/80 border border-slate-700 text-slate-300 hover:border-sky-400"
            }`}
          >
            {item.company.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-7 sm:left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-sky-500 via-cyan-400 to-sky-500 rounded"></div>

        <div className="space-y-12">
          {reorderedData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              {/* Dot */}
              <div className="relative z-10 min-w-[60px] h-[60px] flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-white text-2xl shadow-[0_0_0_8px_rgba(14,165,233,0.25)] mr-6">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1">
                {/* Company & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                    {item.company}
                    {item.link && item.link !== "#" && (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="text-slate-400 hover:text-sky-400 transition" />
                      </a>
                    )}
                  </h2>
                  <span className="bg-sky-500/15 text-sky-400 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0">
                    {item.period}
                  </span>
                </div>

                {/* Position */}
                <h3 className="text-lg font-semibold mb-2">{item.position}</h3>

                {/* Location */}
                <p className="flex items-center gap-2 text-slate-400 mb-4">
                  <FaMapMarkerAlt /> {item.location}
                </p>

                {/* Description */}
                <p className="text-slate-300 mb-4">{item.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <button
                    className="cursor-pointer flex items-center justify-between w-full text-left"
                    onClick={() =>
                      setOpenAchievements(
                        openAchievements === index ? null : index
                      )
                    }
                  >
                    <span className="text-lg font-semibold">
                      Key Responsibilities &amp; Achievements
                    </span>
                    {openAchievements === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openAchievements === index ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="mt-3 space-y-3">
                      {item.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="pl-5 border-l-2 border-sky-400 text-slate-300 text-sm leading-relaxed"
                        >
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
