import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
