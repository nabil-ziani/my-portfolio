import { useTranslations } from 'next-intl'

export function Projects() {
    const t = useTranslations('Projects')

    return (
        <section id="projects" className="py-20">
            <h2>{t('title')}</h2>
        </section>
    )
} 