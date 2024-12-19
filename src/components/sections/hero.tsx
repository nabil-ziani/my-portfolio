'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { Button } from '../ui/button'

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="min-h-[90vh] relative flex items-center justify-center">
            {/* Subtiele gradient die doorloopt */}
            <div className="fixed inset-0 bg-[#5B86E5]/5" />

            {/* Subtiel grid patroon dat doorloopt */}
            <div className="fixed inset-0 bg-grid-white/[0.015] bg-[length:50px_50px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center space-y-8">
                    {/* Welcome text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-400 font-medium"
                    >
                        {t('welcome')}
                    </motion.p>

                    {/* Main heading with gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                            {t('name')}
                        </span>
                    </motion.h1>

                    {/* Typewriter effect for roles */}
                    <div className="h-8 md:h-12">
                        <TypewriterEffect
                            words={[
                                t('role1'),
                                t('role2'),
                                t('role3')
                            ]}
                            className="text-xl md:text-2xl text-gray-300"
                        />
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-gray-400 text-lg"
                    >
                        {t('description')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            href="#contact"
                            variant="gradient"
                            size="lg"
                            className="group"
                        >
                            {t('cta')}
                            <motion.span
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </Button>
                        <Button
                            href="#projects"
                            variant="outline"
                            size="lg"
                        >
                            {t('secondary_cta')}
                        </Button>
                    </motion.div>

                    {/* Scroll indicator subtieler maken */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-6 h-10 rounded-full border border-white/10 flex justify-center p-2"
                        >
                            <motion.div className="w-1 h-1 rounded-full bg-white/30" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
