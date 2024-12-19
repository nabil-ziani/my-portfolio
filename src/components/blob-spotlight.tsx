'use client'

import { motion } from 'framer-motion'
import { colors } from '@/lib/constants'

export function BlobSpotlight({ position = 'left' }: { position?: 'left' | 'right' }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    x: position === 'left' ? ['-60%', '-40%', '-60%'] : ['60%', '40%', '60%'],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={`absolute ${position === 'left' ? '-left-1/4' : '-right-1/4'} top-1/4 w-[1000px] h-[300px]`}
                style={{
                    background: `linear-gradient(90deg, ${colors.primary.from}05, ${colors.primary.to}10)`,
                    filter: 'blur(100px)',
                    transform: 'skew(-15deg)',
                }}
            />
        </div>
    )
} 