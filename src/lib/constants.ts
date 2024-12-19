export const locales = ['en', 'nl'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const colors = {
  primary: {
    from: '#4D7BF3',
    to: '#845EF7'
  },
  dark: {
    background: '#030014',
    card: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)'
  }
}
