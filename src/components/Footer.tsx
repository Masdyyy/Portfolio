'use client';

import { motion } from 'framer-motion';

/**
 * Footer Component - Page footer with copyright and navigation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950/80 backdrop-blur-md border-t border-gray-700/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A modern portfolio showcasing projects and expertise in full-stack development.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Current Status</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm">Open for opportunities</span>
            </div>
            <p className="text-gray-500 text-sm">
              Available for freelance & full-time positions
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm"
          >
            <span className="block mb-2">
              © {currentYear} Your Name. All rights reserved.
            </span>
            <span className="text-gray-500 text-xs">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
