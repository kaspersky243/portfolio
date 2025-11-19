"use client";

import { motion } from "framer-motion";
import SkillBadge from "../components/SkillBadge";

export default function SkillsPage() {
  const skills = [
    { skill: "Python", category: "Language" },
    { skill: "SQL", category: "Language" },
    { skill: "Power BI", category: "Tool" },
    { skill: "Pandas", category: "Tool" },
    { skill: "Seaborn", category: "Tool" },
    { skill: "PostgreSQL", category: "Database" },
    { skill: "MySQL", category: "Database" },
    { skill: "Oracle", category: "Database" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Skills
        </h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((s, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <SkillBadge skill={s.skill} category={s.category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
