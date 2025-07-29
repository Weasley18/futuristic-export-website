import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EnnGee Enterprises - Leading Merchant Export Organization",
  description: "Leading Merchant Export Organization based in Bangalore, specializing in sourcing and exporting diverse range of quality Indian products and commodities worldwide.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logofinal.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
