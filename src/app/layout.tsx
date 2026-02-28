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
      <body className="bg-white text-gray-900 font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
