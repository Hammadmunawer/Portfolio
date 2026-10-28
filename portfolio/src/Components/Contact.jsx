import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      emailjs
        .send(
          "service_ea926qm", // ✅ tumhara Service ID
          "template_v1w3hgg", // ⚡ apna Template ID yahan dalna
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "2-SjB0wc0d1Sl_NBr" // ⚡ apna Public Key dalna
        )
        .then(
          () => {
            setLoading(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            if (formRef.current) formRef.current.reset();
          },
          () => {
            setLoading(false);
            setErrors({
              submit: "Failed to send message ❌. Try again later.",
            });
          }
        );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Have an AI project in mind or want to build a custom AI solution? Feel free to reach out. I'm always open to discussing AI projects, SaaS ideas, and business opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-cyan-500/10 mr-4">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Location
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                 Lahore, punjab, Pakistan
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-cyan-500/10 mr-4">
                    <FaEnvelope className="text-cyan-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Email
                  </h3>
                </div>
                <a
                  href="mailto:hammadmunawer2004@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-center lg:text-left"
                >
                  hammadmunawer2004@gmail.com
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-cyan-500/10 mr-4">
                    <FaPhone className="text-cyan-400 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Phone
                  </h3>
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-center lg:text-left"
                >
                  +92 3049430705
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center lg:text-left">
                  Follow Me
                </h3>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <motion.a
                    href="https://github.com/Hammadmunawer"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="p-3 rounded-full bg-gray-800 text-white dark:bg-gray-700 hover:bg-cyan-500 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
               
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Thank you for reaching out. I'll get back to you as soon
                        as possible.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      ref={formRef}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all ${errors.name
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              }`}
                            placeholder="Enter your name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all ${errors.email
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              }`}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <p className="mt-1 text-red-500 text-sm">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                          placeholder="What's this about?"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all ${errors.message
                            ? "border-red-500"
                            : "border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            }`}
                          placeholder="Hello, I would like to talk about..."
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-red-500 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      {errors.submit && (
                        <p className="text-red-500 text-sm">{errors.submit}</p>
                      )}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-all hover:shadow-lg disabled:opacity-50"
                      >
                        <span>{loading ? "Sending..." : "Send Message"}</span>
                        <FaPaperPlane className="text-sm" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Copyright Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-6 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Hammad Ali. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
