import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Can Akyüz || Software Engineer",
  description:
    "Experienced front end software engineer focused on building accessible products for the web",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}