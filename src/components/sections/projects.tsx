'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const projects = [
    {
        title: "Nacho's Antwerp",
        description: 'Modern restaurant website with online ordering system',
        image: '/nachos.jpg', // Zorg dat je deze afbeelding hebt
        link: 'https://nachosantwerp.be',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        color: '#FFA751'
    },
    {
        title: 'Project 2',
        description: 'Description of your second project',
        image: '/project2.jpg',
        link: '#',
        tech: ['React', 'Node.js', 'MongoDB'],
        color: '#FFE259'
    }
]

export function Projects() {
    const t = useTranslations('Projects')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            {/* Verbeterde gradient overlay voor vloeiende overgang */}
            <div className="absolute inset-x-0 -top-96 h-96 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />
            
            {/* Subtiele blob decoratie */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ffe259]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ffa751]/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#ffe259] to-[#ffa751] bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative aspect-video overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                {/* Preview Image */}
                                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full p-6 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-full bg-white/10 text-white backdrop-blur-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm opacity-0 transform translate-y-4 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 