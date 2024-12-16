import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <div className="container mx-auto px-4 py-20">
                <Hero />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}