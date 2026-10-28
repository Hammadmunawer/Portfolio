import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaGlobe className="text-4xl text-cyan-400" />,
    title: "AI Website Development",
    description:
      "I build intelligent, AI-powered websites and web applications that automate workflows, engage users, and scale with your business.",
    features: [
      "AI-powered websites & web applications",
      "AI chatbot & virtual assistant integration",
      "OpenAI API & third-party AI integrations",
      "Intelligent automation & smart workflows",
    ],
  },
  {
    icon: <FaMobileAlt className="text-4xl text-cyan-400" />,
    title: "AI Mobile App Development",
    description:
      "Delivering cutting-edge AI-powered Android and iOS applications with smart features that users love and businesses rely on.",
    features: [
      "AI-powered Android & iOS applications",
      "AI chatbots & virtual assistants",
      "AI text, image & content generation",
      "API integration & backend development",
    ],
  },
  {
    icon: <FaCloud className="text-4xl text-cyan-400" />,
    title: "AI SaaS Development",
    description:
      "Building custom AI SaaS platforms and web applications that help startups launch fast and businesses automate at scale.",
    features: [
      "Custom AI SaaS platforms & web applications",
      "AI-powered MVP development for startups",
      "Subscription-based platforms & dashboards",
      "Business automation tools & AI integrations",
    ],
  },
];

const whyChooseMe = [
  { icon: <FaRobot />, label: "Custom AI Solutions" },
  { icon: <FaCheckCircle />, label: "Modern Technology" },
  { icon: <FaCheckCircle />, label: "User-Friendly Design" },
  { icon: <FaCheckCircle />, label: "Scalable Development" },
  { icon: <FaCheckCircle />, label: "Quality-Focused Delivery" },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            What I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end AI solutions — from intelligent websites and mobile apps
            to full-scale SaaS platforms built for growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/20 shadow-lg hover:shadow-cyan-900/30 transition-all"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <FaCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-cyan-300 mb-8">
            Why Choose Me?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-medium text-sm hover:bg-cyan-500/20 transition cursor-default"
              >
                <span className="text-cyan-400">{item.icon}</span>
                {item.label}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-gray-400 text-lg mb-6">
              Ready to Build Your AI Solution?
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              Message Me Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
