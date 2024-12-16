'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MantineProvider } from '@mantine/core'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <MantineProvider
                defaultColorScheme="dark"
                theme={{
                    primaryColor: 'yellow',
                    colors: {
                        dark: [
                            '#C1C2C5',
                            '#A6A7AB',
                            '#909296',
                            '#5C5F66',
                            '#373A40',
                            '#2C2E33',
                            '#25262B',
                            '#1A1B1E',
                            '#141517',
                            '#101113',
                        ],
                    },
                }}
            >
                {children}
            </MantineProvider>
        </NextThemesProvider>
    )
}