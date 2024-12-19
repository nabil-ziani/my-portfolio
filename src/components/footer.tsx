'use client'

import { motion } from 'framer-motion'

export function Footer() {
    return (
        <footer className="relative py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-[#16A085] to-[#F4D03F] bg-clip-text text-transparent">
                                Let's Connect
                            </span>
                        </h3>
                        <p className="text-gray-400">
                            Always open to interesting projects and opportunities
                        </p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
} 