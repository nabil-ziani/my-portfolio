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
        primary: 'from-[#4D7BF3] to-[#845EF7]',
        secondary: 'from-[#845EF7] to-[#D946EF]'
    }

    const y = useTransform(scrollYProgress, [0, 1], [0, 100])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate, scale }}
            className={`absolute ${position === 'top' ? '-top-40' : '-bottom-40'} 
                       ${position === 'top' ? '-right-40' : '-left-40'} 
                       ${sizes[size]} rounded-full blur-[100px] opacity-20`}
            animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <div className={`w-full h-full rounded-full bg-gradient-to-r ${colors[color]}`} />
        </motion.div>
    )
} 