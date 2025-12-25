'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'Instagram Clone',
    description:
      'Next.js, MongoDB ашиглан хийсэн social media веб апп. Authentication, CRUD, profile, post системтэй.',
    features: [
      'User Authentication & Authorization',
      'CRUD Operations',
      'Profile Management',
      'Post Creation & Interaction',
      'Real-time Updates',
    ],
    tech: ['Next.js', 'MongoDB', 'React', 'Tailwind CSS', 'NextAuth'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
    hidden: { opacity: 0, y: 40 },
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
    <section ref={ref} id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-500 overflow-hidden ${
                project.featured
                  ? 'lg:col-span-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                  : 'border-white/10 hover:border-blue-500/30'
              }`}
            >
              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full border border-blue-500/30">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                    Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 text-sm flex items-center gap-2"
                      >
                        <span className="text-white">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-200 rounded-lg hover:border-blue-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-200 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <span>GitHub</span>
                      <motion.span
                        className="text-blue-400"
                        animate={
                          hoveredIndex === index
                            ? { x: [0, 4, 0] }
                            : { x: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20"
                    >
                      <span>Live Demo</span>
                      <motion.span
                        animate={
                          hoveredIndex === index
                            ? { x: [0, 4, 0] }
                            : { x: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="section-separator mt-24" />
    </section>
  )
}
