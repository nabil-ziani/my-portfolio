'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()
    const t = useTranslations('Nav')
    const currentLocale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    // Handle scroll effect
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
    }, [scrollY])

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
        router.push(newPath)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/10 backdrop-blur-xl border-b border-white/10' 
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-bold bg-gradient-to-r from-[#ffe259] to-[#ffa751] bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    NZ
                </motion.a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['about', 'projects', 'contact'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item}`}
                            className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t(item)}
                            <motion.span
                                className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#ffe259] to-[#ffa751]"
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switch */}
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
                        {['en', 'nl'].map((locale) => (
                            <motion.button
                                key={locale}
                                onClick={() => switchLocale(locale)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                                    currentLocale === locale
                                        ? 'bg-gradient-to-r from-[#ffe259] to-[#ffa751] text-white'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {locale.toUpperCase()}
                            </motion.button>
                        ))}
                    </div>

                    {/* Theme Switch */}
                    <motion.button
                        onClick={() => document.documentElement.classList.toggle('dark')}
                        className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="sr-only">Toggle theme</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </motion.button>
                </div>
            </nav>
        </motion.header>
    )
} 