import { useTranslations } from 'next-intl'

export function Contact() {
    const t = useTranslations('Contact')

    return (
        <section id="contact" className="py-20">
            <h2>{t('title')}</h2>
        </section>
    )
} 