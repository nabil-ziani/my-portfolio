'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Palette, Lightbulb } from 'lucide-react'
import { BlobSpotlight } from '../blob-spotlight'

const skillCategories = [
    {
        title: 'Frontend',
        icon: Palette,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        gradient: 'from-[#4D7BF3] to-[#845EF7]'
    },
    {
        title: 'Backend',
        icon: Database,
        skills: ['Node.js', 'PostgreSQL', 'Supabase', 'REST API', 'GraphQL'],
        gradient: 'from-[#845EF7] to-[#D946EF]'
    },
    {
        title: 'Development',
        icon: Code2,
        skills: ['Git', 'Docker', 'CI/CD', 'Testing', 'Agile'],
        gradient: 'from-[#D946EF] to-[#4D7BF3]'
    },
    {
        title: 'Soft Skills',
        icon: Lightbulb,
        skills: ['Problem Solving', 'Communication', 'Team Work', 'Adaptability'],
        gradient: 'from-[#4D7BF3] to-[#845EF7]'
    }
]

export function Skills() {
    const t = useTranslations('Skills')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} className="relative min-h-screen flex items-center py-32">
            {/* Modern grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <BlobSpotlight position="left" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                            Skills & Expertise
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                            className="group"
                        >
                            <div className="glass rounded-xl p-6 hover-card h-full">
                                {/* Icon with gradient background */}
                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 rounded-lg blur-xl`} />
                                    <div className="relative glass rounded-lg w-12 h-12 flex items-center justify-center">
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2 text-gray-400">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover gradient effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 