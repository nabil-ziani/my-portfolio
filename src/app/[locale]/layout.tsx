import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitch } from '@/components/ui/theme-switch'

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider>
                        <ThemeSwitch />
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
} 