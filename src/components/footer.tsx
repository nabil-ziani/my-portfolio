'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: FiTwitter, href: 'https://twitter.com/yourusername' },
]

export function Footer() {
    return (
        <footer className="relative py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                            NZ
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Building modern web experiences with cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium mb-4">Quick Links</h3>
                        <div className="space-y-3">
                            {['about', 'projects', 'contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item}`}
                                    className="block text-gray-400 hover:text-white transition-colors capitalize"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-medium mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Your Name. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            Made with <FiHeart className="text-[#36D1DC]" /> using Next.js
                        </p>
                    </div>
                </div>

                {/* Gradient line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#36D1DC] to-transparent opacity-20" />
            </div>
        </footer>
    )
} 