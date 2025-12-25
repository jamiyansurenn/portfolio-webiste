'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
    <section ref={ref} id="about" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            About
          </span>
        </motion.h2>

          <motion.div
            variants={itemVariants}
            className="space-y-6 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light"
          >
            <p>
              Би Pinecone Academy-г төгссөн веб хөгжүүлэгч бөгөөд{' '}
              <span className="text-white font-medium">
                frontend болон backend-ийн суурь мэдлэгтэй
              </span>
              . React, Next.js, Node.js, MongoDB зэрэг орчин үеийн технологиудыг
              ашиглан бодит хэрэглээнд чиглэсэн, масштабдах боломжтой веб
              аппликейшнүүд хөгжүүлдэг.
            </p>
            <p>
              <span className="text-white font-medium">
                Багаар ажиллах, асуудал шийдэх, цэвэр код бичих соёлыг
                эрхэмлэдэг
              </span>
              . Төсөл бүрт хэрэглэгчийн туршлагыг эхний байранд тавьж,
              гүнзгий бодож, шийдэл гаргахыг зорьдог.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="section-separator mt-24" />
    </section>
  )
}
