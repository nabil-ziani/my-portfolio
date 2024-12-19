'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StatItemProps {
    value: string
    label: string
}

function StatItem({ value, label }: StatItemProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <div className="text-3xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                {value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{label}</div>
        </motion.div>
    )
}

interface TimelineItemProps {
    year: string
    title: string
    description: string
}

function TimelineItem({ year, title, description }: TimelineItemProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative pl-8 pb-8 border-l border-white/10 last:pb-0"
        >
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]" />
            <div className="text-sm text-gray-400">{year}</div>
            <div className="font-medium mt-1">{title}</div>
            <div className="text-sm text-gray-400 mt-1">{description}</div>
        </motion.div>
    )
}

export function About() {
    const t = useTranslations('About')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    return (
        <section 
            id="about" 
            className="relative min-h-screen flex items-center py-20"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                    {/* Left Column */}
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                            {t('title')}
                        </h2>
                        <p className="text-gray-400">
                            {t('description')}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 py-8">
                            <StatItem value="5+" label={t('yearsExp')} />
                            <StatItem value="20+" label={t('projects')} />
                            <StatItem value="10+" label={t('clients')} />
                        </div>

                        {/* Timeline */}
                        <div className="space-y-6 mt-12">
                            <h3 className="text-xl font-semibold">{t('experience')}</h3>
                            <div className="space-y-6">
                                <TimelineItem
                                    year="2023"
                                    title={t('exp1.title')}
                                    description={t('exp1.description')}
                                />
                                <TimelineItem
                                    year="2021"
                                    title={t('exp2.title')}
                                    description={t('exp2.description')}
                                />
                                <TimelineItem
                                    year="2019"
                                    title={t('exp3.title')}
                                    description={t('exp3.description')}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative aspect-square"
                    >
                        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl" />
                        <div className="relative h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt={t('imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 