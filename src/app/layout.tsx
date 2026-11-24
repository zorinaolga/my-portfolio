import type { Metadata } from 'next'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/aboreto/400.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Olha Zorina — Візуальна дизайнерка',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
