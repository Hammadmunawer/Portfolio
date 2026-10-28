import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Akhtar Abbas",
    role: "Engineering Team Lead",
    company: "HuboWeb Technology",
    text: "Hammad has been one of the most reliable and valuable assets in our engineering team. His depth in backend architecture, .NET, Node.js, and multi-tenant architectures allowed us to deliver critical enterprise products like our HRMS and CVAI ahead of schedule. Highly dedicated and quick at solving complex problems.",
    project: "HRMS & CVAI Systems",
    rating: 5,
  },
  {
    name: "Mantas V.",
    role: "Product Owner",
    company: "Get Shopin (Lithuania)",
    text: "Working with Hammad on our multi-tenant e-commerce platform was seamless. He designed a clean database isolation setup on MongoDB and delivered a robust Vue.js front-end that easily handles dynamic tenant configurations. Great technical communication throughout.",
    project: "Get Shopin E-Commerce",
    rating: 5,
  },
  {
    name: "David H.",
    role: "Operations Director",
    company: "Kingdom Rides (UK)",
    text: "Hammad took our vehicle hire requirements and turned them into a fast, reliable booking engine with automated quoting and fleet dispatching. The Laravel backend is rock solid, and our daily operations across the UK have run smoothly since launch.",
    project: "Kingdom Rides Platform",
    rating: 5,
  },
  {
    name: "Dr. Tariq R.",
    role: "Co-Founder & Clinical Director",
    company: "CoreMax Cloud",
    text: "The healthcare domain requires strict role-based access, tenant isolation, and zero scheduling friction across timezones. Hammad nailed the multi-tenant architecture and doctor-patient assignment system on Node.js & React.",
    project: "CoreMax Cloud SaaS",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Client & Team Endorsements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            What engineering leaders, founders, and product owners say about collaborating with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-cyan-950/40 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-cyan-400/30 text-4xl mb-4" />

              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base italic">
                "{item.text}"
              </p>

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-300">{item.name}</h3>
                    <p className="text-xs text-slate-400">
                      {item.role} • <span className="text-slate-300">{item.company}</span>
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full font-medium">
                    {item.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
