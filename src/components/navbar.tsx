'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSwitch } from './ui/theme-switch'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()
    const t = useTranslations('Nav')
    const currentLocale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

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
        <AnimatePresence>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-4 inset-x-0 mx-auto z-50 max-w-7xl px-4 sm:px-6"
            >
                <nav className={`${
                    isScrolled ? 'bg-black/20' : 'bg-transparent'
                } backdrop-blur-md rounded-full border border-white/10 h-16 flex items-center justify-between transition-colors`}>
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-2xl font-bold relative group px-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                            NZ
                        </span>
                    </motion.a>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center">
                        {['about', 'projects', 'contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="group relative px-4 py-2 mx-2"
                            >
                                <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {t(item)}
                                </span>
                                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.05] transition-colors" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 px-6">
                        {/* Language Switch */}
                        <div className="flex rounded-full border border-white/10 p-1">
                            {['en', 'nl'].map((locale) => (
                                <motion.button
                                    key={locale}
                                    onClick={() => switchLocale(locale)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                        currentLocale === locale
                                            ? 'bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {locale.toUpperCase()}
                                </motion.button>
                            ))}
                        </div>

                        {/* Theme Switch */}
                        <div className="border border-white/10 rounded-full p-2">
                            <ThemeSwitch />
                        </div>
                    </div>
                </nav>
            </motion.header>
        </AnimatePresence>
    )
} 