import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nabil Ziani - Next.js Developer',
    description: 'Custom web applications built with Next.js and Supabase',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}