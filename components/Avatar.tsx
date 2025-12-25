'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface AvatarProps {
  src?: string
  alt: string
  name: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Avatar({ src, alt, name, size = 'lg' }: AvatarProps) {
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: 'w-20 h-20 md:w-24 md:h-24',
    md: 'w-28 h-28 md:w-32 md:h-32',
    lg: 'w-32 h-32 md:w-40 md:h-40',
  }

  const textSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Gradient border ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-black"></div>
        </div>
      </motion.div>

      {/* Avatar image or placeholder */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black z-10">
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <span className={`${textSizes[size]} font-bold text-white`}>
              {getInitials(name)}
            </span>
          </div>
        )}
      </div>

      {/* Animated glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

