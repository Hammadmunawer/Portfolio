import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Trounce ",
      description:
        "A SaaS-based platform integrating multiple social media accounts (Facebook, Instagram, Twitter, LinkedIn) into a single dashboard. Built with Node.js backend, MongoDB databases, implementing JWT authentication, role-based access control, and MVC architecture for maintainable, scalable, and secure operations.",
      technologies: [   "Node.js",
    "Express.js",
     "node.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "MVC Architecture",
  ],
      githubLink: "https://github.com/akhtarabbas-909/TrounceAPI",
      image: "/img/saas.jpg",
    },
    {
      id: 2,
      name: "Authentication App",
      description:
        "A secure authentication system built with Node.js and SQL database. Implements user signup, login, and JWT-based authentication using repository pattern and layered architecture for maintainable and scalable backend design.",
      technologies: [ "Node.js",
    "Express.js",
    "SQL",
    "JWT Authentication",
    "Repository Pattern",
    "Layered Architecture"],
      githubLink: "https://github.com/akhtarabbas-909/AuthenticationApp",
      image: "/img/authentication.jpg",
    },
    {
      id: 3,
      name: "Internal Management System",
      description:
        "An employee management system built with Node.js and SQL database, following MVC architecture. Features include attendance tracking, task assignment, and role-based access control, designed using clean layered backend principles for scalability and maintainability.",
      technologies: [    "Node.js",
    "Express.js",
    "SQL",
    "MVC Architecture",
    "Role-Based Access Control",
    ],
      githubLink: "https://github.com/Moughees110/Internal-Management-System",
      image: "/img/internal.jpg",
    },
 
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 
                 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 
                 text-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-xl text-cyan-300 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Some of my recent works showcasing my skills and experience
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 shadow-lg hover:shadow-cyan-900/20 transition-all flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover shadow-md"
                  whileHover={{ scale: 1.05 }}
                />
              )}

              <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg hover:bg-cyan-500/20 transition"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-gray-200 rounded-lg hover:bg-gray-700/70 transition"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
