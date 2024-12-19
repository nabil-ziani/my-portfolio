import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'gradient' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    onClick?: () => void
}

export function Button({
    children,
    href,
    variant = 'gradient',
    size = 'md',
    className = '',
    onClick,
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300'
    
    const variants = {
        gradient: 'bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] text-white hover:shadow-lg hover:shadow-blue-500/25',
        outline: 'border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white'
    }
    
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
    
    const Component = motion(href ? Link : 'button')
    
    return (
        <Component
            href={href || ''}
            onClick={onClick}
            className={classes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </Component>
    )
}
