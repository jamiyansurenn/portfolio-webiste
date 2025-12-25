'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-sm space-y-2"
        >
          <p>© {new Date().getFullYear()} Мөнгөнсүх. All rights reserved.</p>
          <p className="text-gray-600">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
