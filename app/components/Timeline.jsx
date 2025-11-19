"use client";

import { motion } from "framer-motion";

export default function Timeline({ events }) {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-600 ml-4">
      {events.map((event, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="mb-8 ml-6 relative"
        >
          {/* Dot */}
          <span className="absolute -left-5 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900"></span>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">{event.subtitle}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{event.duration}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
