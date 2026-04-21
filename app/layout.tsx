import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const _caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://haruka.lol"),
  title: "Haruka | Types Fast, Breaks Things Faster",
  description: "Personal site of Haruka — 19 y/o web developer, dashboard enjoyer, part-time terminal goblin. Built with React 19 and Next.js 15 because stable is boring.",
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
    description: "19 and dangerously caffeinated. Building weird stuff with React 19 + Next.js 15.",
    url: "https://haruka.lol",
    siteName: "haruka.lol",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruka | Full-time dev, part-time chaos agent",
    description: "19 and dangerously caffeinated. Building weird stuff with React 19 + Next.js 15.",
    creator: "@not_haruka",
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { CommandPalette } from "@/components/command-palette"
import { EasterEggAlert } from "@/components/easter-egg-alert"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} ${_caveat.variable} font-sans bg-background text-foreground antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <CommandPalette />
          <EasterEggAlert />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
