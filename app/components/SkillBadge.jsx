"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ skill, category }) {
  // Color coding by category
  const categoryColors = {
    Language: "bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",
    Tool: "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200",
    Database: "bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200",
  };

  const colorClass = categoryColors[category] || "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200";

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-4 py-2 rounded-full font-semibold text-sm ${colorClass} cursor-default`}
    >
      {skill}
    </motion.div>
  );
}
