'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSwitch } from './ui/theme-switch'
import { colors } from '@/lib/constants'

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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'glass' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    NZ
                </motion.a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['about', 'projects', 'contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item}`}
                            className="group relative py-2"
                        >
                            <span className="relative z-10 text-sm text-gray-300 group-hover:text-white transition-colors">
                                {t(item)}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switch */}
                    <div className="glass rounded-full p-1">
                        {['en', 'nl'].map((locale) => (
                            <motion.button
                                key={locale}
                                onClick={() => switchLocale(locale)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                    currentLocale === locale
                                        ? 'bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] text-white'
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
                    <ThemeSwitch />
                </div>
            </nav>
        </motion.header>
    )
} 