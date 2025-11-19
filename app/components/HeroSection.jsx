"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
      
      {/* Animated Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Okou Hermann</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed"
      >
        Data Analyst specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">Big Data</span>. I transform raw data into actionable insights using <span className="font-medium">Python, SQL, Power BI, Pandas, and Seaborn</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 120 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition transform hover:-translate-y-1 hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5 }}
      />
    </section>
  );
}
