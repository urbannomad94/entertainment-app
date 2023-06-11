import './globals.css'
import { Outfit } from 'next/font/google'

const inter = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Entertainment App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
