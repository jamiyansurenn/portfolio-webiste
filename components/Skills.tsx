'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = {
  Frontend: [
    { name: 'React', level: 'advanced', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'Next.js', level: 'advanced', color: 'from-gray-500/20 to-gray-400/20' },
    { name: 'TypeScript', level: 'advanced', color: 'from-blue-600/20 to-blue-400/20' },
    { name: 'JavaScript', level: 'advanced', color: 'from-yellow-500/20 to-yellow-400/20' },
    { name: 'HTML / CSS', level: 'advanced', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'Tailwind CSS', level: 'advanced', color: 'from-cyan-500/20 to-blue-500/20' },
    { name: 'Framer Motion', level: 'intermediate', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Responsive Design', level: 'advanced', color: 'from-green-500/20 to-emerald-500/20' },
  ],
  Backend: [
    { name: 'Node.js', level: 'intermediate', color: 'from-green-600/20 to-green-400/20' },
    { name: 'Express', level: 'intermediate', color: 'from-gray-500/20 to-gray-400/20' },
    { name: 'MongoDB', level: 'intermediate', color: 'from-green-500/20 to-emerald-500/20' },
    { name: 'MySQL', level: 'intermediate', color: 'from-blue-600/20 to-blue-500/20' },
    { name: 'REST APIs', level: 'intermediate', color: 'from-indigo-500/20 to-purple-500/20' },
    { name: 'Authentication', level: 'intermediate', color: 'from-red-500/20 to-pink-500/20' },
    { name: 'JWT', level: 'intermediate', color: 'from-yellow-500/20 to-orange-500/20' },
  ],
  Tools: [
    { name: 'Git / GitHub', level: 'advanced', color: 'from-gray-600/20 to-gray-500/20' },
    { name: 'Figma', level: 'intermediate', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Postman', level: 'intermediate', color: 'from-orange-500/20 to-red-500/20' },
    { name: 'VS Code', level: 'advanced', color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'npm / yarn', level: 'advanced', color: 'from-red-500/20 to-pink-500/20' },
    { name: 'Vercel', level: 'intermediate', color: 'from-gray-500/20 to-gray-400/20' },
    { name: 'Docker', level: 'beginner', color: 'from-blue-600/20 to-cyan-500/20' },
  ],
}

const levelColors = {
  advanced: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 text-blue-200',
  intermediate: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-200',
  beginner: 'bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-gray-500/30 text-gray-300',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="group"
            >
              <div className="glass rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white/5 hover:to-white/0 transition-all duration-500 h-full border-white/10 hover:border-blue-500/30">
                <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 cursor-default ${levelColors[skill.level as keyof typeof levelColors]} hover:shadow-lg hover:shadow-blue-500/20`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
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
