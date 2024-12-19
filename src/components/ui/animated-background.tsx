'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let frame = 0
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const noise = () => {
            const imageData = ctx.createImageData(canvas.width, canvas.height)
            const data = imageData.data

            for (let i = 0; i < data.length; i += 4) {
                const rand = Math.floor(Math.random() * 255)
                data[i] = data[i + 1] = data[i + 2] = rand
                data[i + 3] = 15 // Alpha voor subtiel effect
            }

            ctx.putImageData(imageData, 0, 0)
        }

        const animate = () => {
            frame = requestAnimationFrame(animate)
            noise()
        }

        animate()

        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full opacity-[0.015] pointer-events-none"
        />
    )
} 