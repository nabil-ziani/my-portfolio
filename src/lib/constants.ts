export const locales = ['en', 'nl'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]
