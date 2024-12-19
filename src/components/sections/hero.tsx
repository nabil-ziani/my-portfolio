'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { GradientBlob } from '../ui/gradient-blob'
import { ParticleGrid } from '../ui/particle-grid'

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <ParticleGrid />
            <GradientBlob size="lg" position="top" color="primary" />
            <GradientBlob size="md" position="bottom" color="secondary" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                                Full-Stack Developer
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                            <span className="gradient-text">
                                {t('title')}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-[#4D7BF3] to-[#845EF7]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                                {t('viewProjects')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-4 rounded-full glass hover:bg-white/10 text-white font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('contact')}
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
                >
                    <motion.div className="w-1 h-1 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
