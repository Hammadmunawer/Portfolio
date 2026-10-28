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
    company: "HuboWeb Technology (Pvt.) Ltd.",
    link: "https://huboweb.com/",
    period: "Jan 2025 - Present",
    position: "AI Engineer & Full Stack Developer",
    location: "Lahore, Punjab, Pakistan",
    icon: <FaLaptopCode />,
    description:
      "Building intelligent AI-powered web applications, SaaS platforms, and mobile apps. Integrating OpenAI APIs, designing custom AI chatbots, virtual assistants, and developing scalable full-stack products for startups and businesses.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "OpenAI API",
      "MongoDB",
      "MySQL",
      "JWT",
      "REST APIs",
    ],
    achievements: [
      "Developed AI-powered SaaS platform integrating multiple social media platforms (FB, Instagram, Twitter, LinkedIn) into a unified dashboard with intelligent analytics",
      "Built custom AI chatbot & virtual assistant integrations using OpenAI API for client web applications",
      "Developed HRMS system on .NET backend with React frontend — managing employee records, attendance, payroll, and roles",
      "Implemented secure JWT-based authentication and role-based access control across multiple projects",
      "Delivered AI Mobile App with content generation features (text, image) using AI APIs for Android & iOS",
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
          My career path, experiences, and technologies I've worked with
        </p>
      </header>

      {/* Mobile Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide mb-6">
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
      <div className="relative">
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
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt className="text-slate-400 hover:text-sky-400 transition" />
                    </a>
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
                      Key Achievements
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
                          className="pl-5 border-l-2 border-sky-400 text-slate-300"
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
