import type { Metadata } from 'next'
import * as config from '@/config'

export const metadata: Metadata = {
    title: 'My Endless Adventures',
    description: 'Come travel with me!',
    icons: {
        icon: '/globe_logo.png',
    },
    // openGraph: {
    //     images: [
    //         {
    //             url: '/my_endless_adventures_logo.png',
    //         },
    //     ],
    // },
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
