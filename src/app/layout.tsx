import type { Metadata } from 'next'
import * as config from '@/config'

export const metadata: Metadata = {
    title: 'My Endless Adventures',
    description: '...', // TODO: Add a description
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <config.Providers>{children}</config.Providers>
            </body>
        </html>
    )
}
