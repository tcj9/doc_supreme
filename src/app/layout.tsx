import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doc Supreme',
  description: 'Beautiful documentation for modern tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
