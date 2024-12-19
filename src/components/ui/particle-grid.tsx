'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ParticleGrid() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const gridY = useTransform(scrollYProgress, [0, 1], [0, 200])

    return (
        <motion.div
            ref={ref}
            style={{ y: gridY }}
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        >
            <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 transform -skew-y-12">
                {Array.from({ length: 144 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: Math.random() }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: Math.random() * 2,
                        }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] opacity-20"
                    />
                ))}
            </div>
        </motion.div>
    )
} 