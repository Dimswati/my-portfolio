import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubic = Rubik({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Paul Portfolio',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubic.className}>{children}</body>
    </html>
  )
}
