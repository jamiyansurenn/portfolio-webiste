'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Pinecone Academy',
    period: '2025.06 – 2025.07',
    type: 'Internship',
    description: 'Backend системийн хөгжүүлэлт, API дизайн, мэдээллийн сангийн удирдлага.',
  },
  {
    title: '3rd Place Winner',
    company: 'PineQuest S1 Hackathon',
    period: '2025',
    type: 'Achievement',
    description: 'Workplace 2.0 веб апп. React / Next.js / Node.js / MongoDB ашигласан.',
    highlight: true,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="experience" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/50 to-blue-500/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative pl-0 md:pl-20 ${
                  exp.highlight ? 'md:pl-24' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden md:block">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.highlight
                        ? 'bg-gradient-to-br from-blue-400 to-purple-500 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]'
                        : 'bg-black border-blue-500/50'
                    }`}
                  />
                </div>

                <div
                  className={`glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 ${
                    exp.highlight
                      ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]'
                      : ''
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-gray-500">•</span>
                    <span className="text-xl text-gray-400">{exp.company}</span>
                    {exp.highlight && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full border border-blue-500/30">
                        Achievement
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-4 font-medium">
                    {exp.period}
                  </p>
                  {exp.description && (
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="section-separator mt-24" />
    </section>
  )
}
