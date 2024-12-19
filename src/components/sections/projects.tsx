'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
    title: string
    description: string
    image: string
    tech: string[]
    github?: string
    demo?: string
}

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'Description of project one. This is a sample project showcasing various technologies and features.',
        image: '/project1.jpg',
        tech: ['Next.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    // Add more projects here
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/[0.02] rounded-xl overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-white/[0.03] border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        >
                            <FiGithub className="w-5 h-5" />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        >
                            <FiExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors rounded-xl" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#36D1DC] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    )
}

export function Projects() {
    const t = useTranslations('Projects')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    
    return (
        <section id="projects" className="relative min-h-screen flex items-center py-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
} 