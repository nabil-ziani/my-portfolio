'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { BlobSpotlight } from '../blob-spotlight'

interface Project {
    title: string;
    description: string;
    details: string[];
    image: string;
    link: string;
    tech: string[];
    relatedProjects?: {
        title: string;
        description: string;
        link: string;
    }[];
}

const projects: Project[] = [
    {
        title: "Nacho's Antwerp",
        description: 'Modern restaurant website with online ordering system',
        details: [
            'Developed a complete online ordering system',
            'Implemented real-time order tracking',
            'Integrated payment processing',
            'Mobile-first responsive design'
        ],
        image: '/nachos-antwerp.png',
        link: 'https://nachosantwerp.be',
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        relatedProjects: [
            {
                title: "Nacho's Admin Dashboard",
                description: 'Complete management system for orders and inventory',
                link: 'https://admin.nachosantwerp.be'
            }
        ]
    }
    // Add more projects
]

export function Projects() {
    const t = useTranslations('Projects')
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section ref={ref} id="projects" className="relative min-h-screen flex items-center py-32">
            {/* Modern grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <BlobSpotlight position="left" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                            Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                            className="group"
                        >
                            <div className="glass rounded-2xl overflow-hidden hover-card">
                                {/* Project Image */}
                                <div className="aspect-video relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />

                                    {/* View Project Button */}
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.a>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-400">{project.description}</p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm rounded-full glass"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Details */}
                                    <div className="space-y-2">
                                        {project.details.map((detail, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4D7BF3] to-[#845EF7] mt-1.5" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Related Projects */}
                                    {project.relatedProjects && (
                                        <div className="pt-4 border-t border-white/10">
                                            <h4 className="text-sm font-semibold mb-3">Related Projects</h4>
                                            <div className="space-y-2">
                                                {project.relatedProjects.map((related) => (
                                                    <a
                                                        key={related.title}
                                                        href={related.link}
                                                        className="block text-gray-400 hover:text-white transition-colors"
                                                    >
                                                        {related.title} →
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 