import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Inter, Poppins } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { AnimatedLayout } from '@/components/animated-layout';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const locale = params.locale;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning className={poppins.variable}>
            <body className="font-poppins">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider>
                        <AnimatedLayout>
                            {children}
                        </AnimatedLayout>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
} 