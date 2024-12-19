'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const t = useTranslations('Nav')

    const menuItems = ['about', 'projects', 'contact']

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 glass rounded-lg"
            >
                <Menu className="w-6 h-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-content p-6">
                            <div className="flex justify-end mb-8">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 glass rounded-lg"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="space-y-6">
                                {menuItems.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="block text-2xl font-medium gradient-text"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t(item)}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
} 