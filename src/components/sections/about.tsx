'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useInView } from 'react-intersection-observer'
import { BlobSpotlight } from '../blob-spotlight'

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
        <section ref={ref} id="about" className="relative min-h-screen flex items-center py-32">
            {/* Modern grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <BlobSpotlight position="right" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                                About Me
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-gray-400">
                            {t('description')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#4D7BF3] to-[#845EF7] opacity-20" />
                        
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="relative pl-12 pb-8"
                            >
                                <div className="absolute left-0 w-8 h-8 rounded-full glass flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] opacity-20" />
                                </div>
                                <div className="glass rounded-xl p-6 hover-card">
                                    <span className="text-sm gradient-text">{item.year}</span>
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