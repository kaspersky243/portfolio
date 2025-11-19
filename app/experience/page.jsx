"use client";

import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const events = [
    { title: "Master 1 Big Data Analytics", subtitle: "Université Virtuelle de Côte d'Ivoire", duration: "Jul 2025 - Dec 2025" },
    { title: "Data Analyst", subtitle: "WeCode - Abidjan", duration: "2024 - 2025" },
    { title: "Database Admin (Internship)", subtitle: "IPS-CGRAE - Abidjan", duration: "Aug 2024 - Nov 2024" },
    { title: "Licence in Computer Science (DB Option)", subtitle: "Université Virtuelle de Côte d'Ivoire", duration: "2020 - 2023" },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience & Education
        </h2>

        <Timeline events={events} />

        {/* Download CV Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="/CV_OKOU_HERMAN_AUGUSTIN.pdf" // Chemin vers ton CV
            download
            className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
