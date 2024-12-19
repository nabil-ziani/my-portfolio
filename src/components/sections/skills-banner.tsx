'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Framer Motion',
    'PostgreSQL', 'Supabase', 'GraphQL', 'Docker', 'Git', 'CI/CD'
]

export function SkillsBanner() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <div ref={ref} className="relative -skew-y-3 py-20 overflow-hidden bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]">
            <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px]" />
            
            <div className="flex gap-8 animate-scroll">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-8 whitespace-nowrap">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="text-2xl font-bold text-white/90"
                            >
                                {skill}
                                <span className="mx-8 text-white/20">•</span>
                            </motion.span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
} 