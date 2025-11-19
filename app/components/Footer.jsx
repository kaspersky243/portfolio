"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Footer() {
  const iconVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.9 }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-sm"
        >
          &copy; {new Date().getFullYear()} Okou Hermann. All rights reserved.
        </motion.p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <motion.a
            href="https://www.linkedin.com/in/okou-hermann-augustin-okou-165502237/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            className="transition-colors"
          >
            <FaLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </motion.a>

          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            className="transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:hermann.okou@epitech.eu"
            aria-label="Email"
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            variants={iconVariants}
            className="transition-colors"
          >
            <HiOutlineMail className="w-6 h-6 text-red-600 dark:text-red-400" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
