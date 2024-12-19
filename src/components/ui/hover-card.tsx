'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'

export function HoverCard({ 
    children,
    className = ""
}: { 
    children: React.ReactNode
    className?: string
}) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className={`group relative rounded-xl border border-white/10 bg-gray-900/50 px-8 py-16 shadow-2xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(77, 123, 243, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    )
} 