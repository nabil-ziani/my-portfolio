import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Inter, Poppins } from 'next/font/google';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedLayout } from '@/components/animated-layout';

// Import Mantine styles
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning className={poppins.variable}>
            <head>
                <ColorSchemeScript />
            </head>
            <body className="font-poppins">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <MantineProvider
                        defaultColorScheme="dark"
                        theme={{
                            primaryColor: 'yellow',
                            colors: {
                                // Custom gradient colors
                                brand: [
                                    '#FFF5D9',
                                    '#FFE7B3',
                                    '#FFD98C',
                                    '#FFCB66',
                                    '#FFBD3F',
                                    '#FFB019',
                                    '#FFA200',
                                    '#E69200',
                                    '#CC8200',
                                    '#B37200'
                                ],
                            },
                        }}
                    >
                        <ThemeProvider>
                            <AnimatedLayout>
                                {children}
                            </AnimatedLayout>
                        </ThemeProvider>
                    </MantineProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
} 