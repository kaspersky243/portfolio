"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.message) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000); 
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const errorVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col gap-4"
    >
      <motion.div variants={inputVariants}>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          } dark:bg-gray-700 dark:text-gray-100`}
        />
        {errors.name && (
          <motion.p variants={errorVariants} initial="hidden" animate="visible" className="text-red-500 text-sm mt-1">
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={inputVariants}>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          } dark:bg-gray-700 dark:text-gray-100`}
        />
        {errors.email && (
          <motion.p variants={errorVariants} initial="hidden" animate="visible" className="text-red-500 text-sm mt-1">
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={inputVariants}>
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.message ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          } dark:bg-gray-700 dark:text-gray-100`}
        />
        {errors.message && (
          <motion.p variants={errorVariants} initial="hidden" animate="visible" className="text-red-500 text-sm mt-1">
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      <motion.button
        type="submit"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow transition"
      >
        Send Message
      </motion.button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-green-500 font-semibold mt-2 text-center"
        >
          Message sent successfully!
        </motion.p>
      )}
    </motion.form>
  );
}
