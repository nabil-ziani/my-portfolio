'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface GradientBlobProps {
    size?: 'sm' | 'md' | 'lg'
    position?: 'top' | 'bottom'
    color?: 'primary' | 'secondary'
}

export function GradientBlob({ 
    size = 'md', 
    position = 'top',
    color = 'primary'
}: GradientBlobProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const sizes = {
        sm: 'w-[300px] h-[300px]',
        md: 'w-[500px] h-[500px]',
        lg: 'w-[800px] h-[800px]'
    }

    const colors = {
        primary: 'from-[#2563EB]/20 to-[#7C3AED]/20',
        secondary: 'from-[#7C3AED]/20 to-[#2563EB]/20'
    }

    const y = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate, scale }}
            className={`absolute ${position === 'top' ? '-top-1/4' : '-bottom-1/4'} 
                       ${position === 'top' ? 'right-0' : '-left-1/4'} 
                       ${sizes[size]} rounded-full mix-blend-multiply filter blur-[100px]`}
            animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        >
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${colors[color]}`} />
        </motion.div>
    )
} 