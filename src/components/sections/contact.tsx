'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername' },
]

interface FormState {
    email: string
    message: string
}

export function Contact() {
    const t = useTranslations('Contact')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [formState, setFormState] = useState<FormState>({ email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simuleer een API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsLoading(false)
        setIsSent(true)
        setFormState({ email: '', message: '' })
        
        // Reset success message after 3 seconds
        setTimeout(() => setIsSent(false), 3000)
    }

    return (
        <section id="contact" className="relative min-h-screen flex items-center py-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="mt-16 max-w-3xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* Email Input */}
                        <div className="relative group">
                            <input
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                                required
                                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-[#36D1DC] transition-colors"
                                placeholder={t('email')}
                            />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#36D1DC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <textarea
                                value={formState.message}
                                onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                                required
                                rows={6}
                                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 outline-none focus:border-[#36D1DC] transition-colors resize-none"
                                placeholder={t('message')}
                            />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#36D1DC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] text-white font-medium px-6 py-4 rounded-lg relative overflow-hidden group disabled:opacity-50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">
                                {isLoading ? 'Sending...' : isSent ? 'Sent!' : t('send')}
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                        </motion.button>
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 