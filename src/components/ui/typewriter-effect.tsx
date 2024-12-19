'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterEffectProps {
    words: string[]
    className?: string
}

export function TypewriterEffect({ words, className = '' }: TypewriterEffectProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < words[currentWordIndex].length) {
                    setCurrentText(words[currentWordIndex].slice(0, currentText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                if (currentText.length === 0) {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                } else {
                    setCurrentText(currentText.slice(0, -1))
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, currentWordIndex, words])

    return (
        <div className={className}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentText}
                </motion.span>
            </AnimatePresence>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="ml-1"
            >
                |
            </motion.span>
        </div>
    )
} 