export const locales = ['en', 'nl'] as const
export const defaultLocale = 'en' as const

export type Locale = (typeof locales)[number]

export const colors = {
  primary: {
    from: '#36D1DC',
    to: '#5B86E5'
  },
  dark: {
    background: '#0F1117',
    card: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)'
  },
  light: {
    background: '#FAFAFA',
    card: 'rgba(0, 0, 0, 0.02)',
    border: 'rgba(0, 0, 0, 0.05)'
  }
}
