'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'

const timeline = [
    {
        year: '2023',
        title: 'Senior Frontend Developer',
        company: 'Company Name',
        description: 'Leading the frontend team and implementing modern web solutions.'
    },
    // Voeg meer tijdlijn items toe
]

export function About() {
    const t = useTranslations('About')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} id="about" className="relative py-32 overflow-hidden">
            {/* Vergelijkbare background effects als andere secties */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Title sectie */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-[#ffe259] to-[#ffa751] bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            {t('description')}
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#ffe259] to-[#ffa751]" />
                        
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="relative pl-12 pb-8"
                            >
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#ffe259] to-[#ffa751] flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-background" />
                                </div>
                                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                    <span className="text-sm text-[#ffa751]">{item.year}</span>
                                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                                    <p className="text-gray-400 mt-1">{item.company}</p>
                                    <p className="text-gray-300 mt-2">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 