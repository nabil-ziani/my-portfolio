'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { IconType } from 'react-icons'
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiPrisma, SiSupabase, SiFirebase, SiVercel,
    SiGit, SiDocker, SiNodedotjs
} from 'react-icons/si'

interface Skill {
    name: string
    icon: IconType
    color: string
}

const skills: Skill[] = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
]

interface SkillCardProps {
    skill: Skill
    index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.04] transition-colors"
        >
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/[0.03]">
                    <skill.icon 
                        className="w-6 h-6 transition-transform group-hover:scale-110" 
                        style={{ color: skill.color }} 
                    />
                </div>
                <div>
                    <h3 className="font-medium text-gray-200">{skill.name}</h3>
                </div>
            </div>
            
            {/* Gradient border on hover */}
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#36D1DC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    )
}

export function Skills() {
    const t = useTranslations('Skills')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    
    return (
        <section id="skills" className="relative min-h-screen flex items-center py-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
} 