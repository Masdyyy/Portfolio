'use client';

import { motion } from 'framer-motion';

/**
 * About Section - Personal background and introduction
 * Features: Text animation, responsive layout, professional information
 */
export default function AboutSection() {
  const features = [
    { label: 'Years Experience', value: '5' },
    { label: 'Projects Completed', value: '5' },
    { label: 'Technologies Used', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30 backdrop-blur-sm">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a commitment
              to writing clean, maintainable code. I love building web applications that are not
              only functional but also intuitive and beautiful.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey into web development started with a curiosity about how things work on
              the internet. Over the years, I've honed my skills in both frontend and backend
              technologies, allowing me to build complete, end-to-end solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-blue"
              >
                <p className="text-4xl font-bold gradient-text mb-2">{feature.value}</p>
                <p className="text-gray-400">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech stack section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-gray-700/50"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Currently Working With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Tailwind CSS',
              'MongoDB',
              'PostgreSQL',
              'AWS',
              'Java',
              'Python',
              'C++',
              'Visual Basic',
              'Flutter',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 text-center text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
