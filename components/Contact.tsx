'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const contactInfo = {
    email: 'jjcage67@gmail.com',
    phone: '86337099',
    links: {
      github: 'https://github.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="contact" className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-16 font-light max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-8 mb-12"
          >
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group block glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5 border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider font-semibold">
                Email
              </div>
              <div className="text-2xl md:text-3xl text-white group-hover:text-blue-200 transition-colors">
                {contactInfo.email}
              </div>
            </motion.a>

            <motion.a
              href={`tel:${contactInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group block glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-pink-500/5 border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider font-semibold">
                Phone
              </div>
              <div className="text-2xl md:text-3xl text-white group-hover:text-purple-200 transition-colors">
                {contactInfo.phone}
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 pt-8"
          >
            {Object.entries(contactInfo.links).map(([platform, url]) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass rounded-lg text-gray-400 hover:text-white border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 capitalize font-medium"
                >
                  {platform}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
