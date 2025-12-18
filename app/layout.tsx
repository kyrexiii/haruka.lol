import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Haruka | Types Fast, Breaks Things Faster",
  description: "Personal site of Haruka — 17 y/o web developer, dashboard enjoyer, part-time terminal goblin. Built with React 19 and Next.js 15 because stable is boring.",
  keywords: [
    "Haruka", "web developer", "Next.js 15", "React 19", "dashboard dev", "terminal addict",
    "freelance", "JavaScript chaos", "coding while tired", "portfolio with vibes"
  ],
  authors: [{ name: "Haruka", url: "https://haruka.lol" }],
  creator: "Haruka (with a little too much caffeine)",
  generator: "Next.js 15 & React 19 (running on vibes)",
  applicationName: "haruka.lol",
  referrer: "no-referrer-when-downgrade",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "noarchive": true,
    },
  },
  openGraph: {
    title: "Haruka | Web Developer (but weirder)",
    description: "17 and dangerously caffeinated. Building weird stuff with React 19 + Next.js 15.",
    url: "https://haruka.lol",
    siteName: "haruka.lol",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruka | Full-time dev, part-time chaos agent",
    description: "17 and dangerously caffeinated. Building weird stuff with React 19 + Next.js 15.",
    creator: "@not_haruka",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geistMono.variable} font-mono bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
