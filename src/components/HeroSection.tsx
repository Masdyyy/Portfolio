'use client';

import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';

/**
 * Hero Section - The main landing section with name, introduction, and CTA
 * Features: Animated text, gradient background, multiple CTA buttons, smooth scroll
 */
export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Welcome text */}
        <motion.div variants={itemVariants}>
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Yvez Lawrence M. Cabudsan</span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
        >
          Full Stack Developer & Creative Problem Solver
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I craft beautiful, high-performance web experiences. With expertise in modern
          technologies and a passion for clean code, I help bring ideas to life on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-glow-blue transition-shadow duration-300"
          >
            View My Work
            <HiArrowNarrowRight className="text-xl" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-blue-400 flex items-center gap-2 hover:bg-blue-400/10 transition-all duration-300"
          >
            Get In Touch
            <HiDownload className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-8"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
