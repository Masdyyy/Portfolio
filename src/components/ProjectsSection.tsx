'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import type { Project } from '@/types';

/**
 * Projects Section - Showcase of portfolio projects
 * Features: Responsive grid, hover animations, tech stack display, external links
 */
export default function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const toggleTechStack = (projectId: string) => {
    setExpandedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'HRIS - Human Resource Information System',
      description:
        'Aeternitas Chapels and Columbarium HRIS system for managing human resources, employee data, and organizational operations efficiently.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
      githubUrl: 'https://github.com/PP-Namias/Aeternitas-Chapels-and-Columbarium',
      liveUrl: 'https://aeternitas-chapels-and-columbarium.vercel.app/',
      featured: true,
    },
    {
      id: '2',
      title: 'Vegobolt Mobile Application',
      description:
        'Interactive mobile application for Vegobolt vendo machine that converts used cooking oil into electricity. Enables users to monitor and manage energy conversion in real-time.',
      technologies: ['Flutter', 'MongoDB', 'IoT Integration'],
      githubUrl: 'https://github.com/Masdyyy/Vegobolt-App',
      featured: true,
    },
    {
      id: '3',
      title: 'Speakwise - Mobile Translation App',
      description:
        'Powerful mobile translation application enabling seamless communication across languages. Features real-time translation and user-friendly interface for travelers and language learners.',
      technologies: ['Flutter', 'Firebase', 'Translation API', 'Mobile'],
      githubUrl: 'https://github.com/zychowho/Translation_App',
    },
    {
      id: '4',
      title: 'CaseMaster - Attorney Case Management',
      description:
        'Comprehensive web application designed for managing attorney cases, client information, and legal workflows. Streamlines case organization and improves legal practice efficiency.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Case Management'],
      githubUrl: 'https://github.com/kopiibara/casemaster',
    },
    {
      id: '5',
      title: 'Tales of Rizal - E-book Platform',
      description:
        'Digital e-book platform featuring the stories and legacy of national hero José Rizal. Interactive reading experience with rich media and educational content.',
      technologies: ['Java', 'Web Development', 'E-book Technology', 'Content Management'],
      githubUrl: 'https://github.com/zychowho/Tales-of-Rizal',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          <p className="text-gray-400 mt-4 text-lg">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-blue overflow-hidden">
                {/* Featured badge */}
                {project.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {expandedProjects.includes(project.id)
                    ? project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/50 animate-pulse"
                        >
                          {tech}
                        </span>
                      ))
                    : project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                  {project.technologies.length > 3 && (
                    <button
                      onClick={() => toggleTechStack(project.id)}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      {expandedProjects.includes(project.id)
                        ? '−'
                        : `+${project.technologies.length - 3}`}
                    </button>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <HiCode className="text-lg" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <HiExternalLink className="text-lg" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-blue-400 rounded-lg font-semibold text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
          >
            Want to see more? Let's talk.
          </a>
        </motion.div>
      </div>
    </section>
  );
}
