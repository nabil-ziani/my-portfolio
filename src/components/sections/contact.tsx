'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { BlobSpotlight } from '../blob-spotlight'

export function Contact() {
    const t = useTranslations('Contact')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} id="contact" className="relative min-h-screen flex items-center py-32">
            {/* Modern grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <BlobSpotlight position="right" />

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
                            Get in Touch
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder={t('email')}
                                    className="w-full px-6 py-4 rounded-xl glass focus:border-[#4D7BF3]/50 outline-none transition-colors"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] opacity-0 transition-opacity peer-focus:opacity-10" />
                            </div>
                            <div className="relative">
                                <textarea
                                    placeholder={t('message')}
                                    rows={6}
                                    className="w-full px-6 py-4 rounded-xl glass focus:border-[#4D7BF3]/50 outline-none transition-colors resize-none"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] opacity-0 transition-opacity peer-focus:opacity-10" />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full py-4 rounded-xl overflow-hidden bg-gradient-to-r from-[#4D7BF3] to-[#845EF7]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium">
                                {t('send')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                        <div className="glass rounded-xl p-6 hover-card">
                            <h3 className="text-xl font-bold mb-2">{t('downloadCV')}</h3>
                            <p className="text-gray-400 mb-4">{t('cvDescription')}</p>
                            <motion.a
                                href="/cv.pdf"
                                download
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-colors"
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
            className="group p-4 rounded-xl glass hover-card relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] opacity-0 group-hover:opacity-10 transition-opacity" />
            <Icon className="w-6 h-6 relative z-10" />
        </motion.a>
    )
} 