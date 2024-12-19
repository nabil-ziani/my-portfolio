'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ThemeSwitch } from './ui/theme-switch'

export function SettingsPanel() {
    const currentLocale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    const switchLocale = (newLocale: string) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
        router.push(newPath)
    }

    return (
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed top-4 right-4 z-50 flex flex-col gap-3"
        >
            {/* Language Switch */}
            <div className="flex flex-col rounded-full border border-white/10 p-1 bg-black/20 backdrop-blur-md">
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
            <div className="border border-white/10 rounded-full p-2 bg-black/20 backdrop-blur-md">
                <ThemeSwitch />
            </div>
        </motion.div>
    )
} 