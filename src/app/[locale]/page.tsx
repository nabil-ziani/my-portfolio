import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}