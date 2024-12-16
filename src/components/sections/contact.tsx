'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Send, Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function Contact() {
    const t = useTranslations('Contact')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} id="contact" className="relative py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ffe259]/10 rounded-full blur-3xl" />
            </div>

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

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder={t('email')}
                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#ffa751]/50 outline-none transition-colors"
                            />
                            <textarea
                                placeholder={t('message')}
                                rows={6}
                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#ffa751]/50 outline-none transition-colors resize-none"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ffe259] to-[#ffa751] text-gray-900 font-medium flex items-center justify-center gap-2 group"
                        >
                            {t('send')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Download CV */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
                            <h3 className="text-xl font-semibold">{t('downloadCV')}</h3>
                            <p className="text-gray-400">{t('cvDescription')}</p>
                            <motion.a
                                href="/cv.pdf"
                                download
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                {t('downloadButton')}
                            </motion.a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-4">
                            <SocialLink href="mailto:your@email.com" icon={Mail} />
                            <SocialLink href="https://github.com/yourusername" icon={Github} />
                            <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
            <Icon className="w-6 h-6" />
        </motion.a>
    )
} 