'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,226,89,0.3),rgba(255,255,255,0))]" />
            </div>

            {/* Animated blobs met verbeterde animaties */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#ffe259]/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-[#ffa751]/20 rounded-full blur-[100px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center space-y-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold">
                        <span className="bg-gradient-to-r from-[#ffe259] to-[#ffa751] bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {/* Glass button */}
                        <motion.a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2 text-gray-100 font-medium">
                                {t('viewProjects')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#ffe259]/20 to-[#ffa751]/20"
                                animate={{
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        </motion.a>

                        {/* Gradient button met donkere tekst */}
                        <motion.a
                            href="#contact"
                            className="relative px-8 py-4 rounded-full overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 font-medium text-gray-900">
                                {t('contact')}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffe259] to-[#ffa751]" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
