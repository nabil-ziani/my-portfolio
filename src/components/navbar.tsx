'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()
    const t = useTranslations('Nav')

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
    }, [scrollY])

    return (
        <AnimatePresence>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-4 inset-x-0 mx-auto z-40 max-w-md px-4 sm:px-6"
            >
                <nav className={`${isScrolled ? 'bg-black/20' : 'bg-transparent'
                    } backdrop-blur-md rounded-xl border border-white/10 h-14 flex items-center justify-center transition-colors`}>
                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">
                        {['about', 'projects', 'contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                className="group relative px-4 py-2"
                            >
                                <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {t(item)}
                                </span>
                                <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.05] transition-colors" />
                            </Link>
                        ))}
                    </div>
                </nav>
            </motion.header>
        </AnimatePresence>
    )
} 