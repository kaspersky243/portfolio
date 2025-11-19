"use client";

import { motion } from "framer-motion";

import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import ExperiencePage from "./experience/page";
import ContactPage from "./contact/page";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <main className="scroll-smooth">
      {/* Hero Section */}
      <motion.section
        id="home"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-900"
      >
        <About />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 py-20"
      >
        <SkillsPage />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-900 py-20"
      >
        <ProjectsPage />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 py-20"
      >
        <ExperiencePage />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-900 py-20"
      >
        <ContactPage />
      </motion.section>
    </main>
  );
}
