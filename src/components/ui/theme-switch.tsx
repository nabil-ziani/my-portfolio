'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null // Return null on server-side and first render
    }

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-4 right-4 p-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-colors"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            type="button"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
            ) : (
                <Moon className="w-5 h-5" />
            )}
        </motion.button>
    )
} 