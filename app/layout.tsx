import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hephzibah Global Christian Centre",
  description:
    "Welcome to Hephzibah Global Christian Centre (HGCC). A vibrant faith-preaching community committed to making the Word of God real.",
  metadataBase: new URL("https://hgcc.org"),
  openGraph: {
    title: "Hephzibah Global Christian Centre",
    description:
      "Welcome to Hephzibah Global Christian Centre (HGCC). A vibrant faith-preaching community committed to making the Word of God real.",
    images: [
      {
        url: "/Hepzibah_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hephzibah Global Christian Centre",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${playfair.variable} overflow-x-hidden`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
