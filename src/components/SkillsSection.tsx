'use client';

import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
} from 'react-icons/si';

interface SkillCard {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

/**
 * Skills Section - Technical skills and proficiencies
 * Features: Animated progress bars, skill categories, technology icons
 */
export default function SkillsSection() {
  const skillCategories: Record<string, SkillCard[]> = {
    frontend: [
      { name: 'TypeScript', icon: <SiTypescript />, level: 95, category: 'frontend' },
      { name: 'React', icon: <SiReact />, level: 95, category: 'frontend' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 90, category: 'frontend' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, category: 'frontend' },
    ],
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 85, category: 'backend' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85, category: 'backend' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, category: 'backend' },
      { name: 'Vercel', icon: <SiVercel />, level: 75, category: 'backend' },
    ],
    tools: [
      { name: 'Git', icon: <SiGit />, level: 90, category: 'tools' },
      { name: 'Docker', icon: <SiDocker />, level: 80, category: 'tools' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Skills by category */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(skillCategories).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              {/* Category title */}
              <h3 className="text-2xl font-bold text-white mb-6 capitalize">
                {category === 'frontend' && 'Frontend Development'}
                {category === 'backend' && 'Backend Development'}
                {category === 'tools' && 'Tools & Deployment'}
              </h3>

              {/* Skills grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-blue"
                  >
                    {/* Skill name and level */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl text-blue-400">{skill.icon}</span>
                      <span className="text-lg font-semibold text-white">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-700/50"
        >
          <h3 className="text-2xl font-bold mb-8">Other Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'REST APIs',
              'GraphQL',
              'Responsive Design',
              'UI/UX',
              'Performance Optimization',
              'SEO',
              'Testing (Jest, Vitest)',
              'Agile Methodology',
              'CI/CD',
              'System Design',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800/50 border border-blue-400/30 text-blue-300 rounded-full text-sm hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
