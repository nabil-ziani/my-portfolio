import { useTranslations } from 'next-intl'

export function Hero() {
    const t = useTranslations('Hero')

    return (
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
            <h1>{t('title')}</h1>
        </section>
    )
}
