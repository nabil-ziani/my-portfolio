'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Palette, Lightbulb } from 'lucide-react'

const skillCategories = [
    {
        title: 'Frontend',
        icon: Palette,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        color: '#ffe259'
    },
    {
        title: 'Backend',
        icon: Database,
        skills: ['Node.js', 'PostgreSQL', 'Supabase', 'REST API', 'GraphQL'],
        color: '#ffa751'
    },
    {
        title: 'Development',
        icon: Code2,
        skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'Agile'],
        color: '#ff7c51'
    },
    {
        title: 'Soft Skills',
        icon: Lightbulb,
        skills: ['Problem Solving', 'Communication', 'Team Work', 'Adaptability'],
        color: '#ff5151'
    }
]

export function Skills() {
    const t = useTranslations('Skills')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            {/* Verbeterde gradient overgang */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#ffe259] to-[#ffa751] bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
                        >
                            {/* Icon */}
                            <div 
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                style={{ backgroundColor: `${category.color}20` }}
                            >
                                <category.icon className="w-6 h-6" style={{ color: category.color }} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 