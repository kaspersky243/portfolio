"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image / Illustration */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/profile-placeholder.png" // Remplacer par ta photo ou illustration
            alt="Okou Hermann"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Texte About */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I am Okou Hermann, a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Data Analyst</span> with experience in Big Data, SQL databases, and data visualization.
            I enjoy transforming raw data into actionable insights to support strategic decision-making.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            My expertise includes Python, SQL, Power BI, Pandas, Seaborn, and database management with PostgreSQL, MySQL, and Oracle. I am highly analytical, curious, and love tackling complex problems with elegant solutions.
          </p>

          {/* CTA Optional */}
          <motion.a
            href="#contact"
            className="self-start px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
