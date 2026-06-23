import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Lato, Press_Start_2P, Geist_Mono } from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jamesmendenhall.dev"),
  title: {
    default: "James Mendenhall — AI Integration & Process Automation | Indianapolis",
    template: "%s | James Mendenhall",
  },
  description:
    "James Mendenhall is an AI integration and process automation specialist in Indianapolis, Indiana — building intelligent systems, custom AI assistants, and automation tooling.",
  keywords: [
    "James Mendenhall",
    "AI integration specialist",
    "process automation",
    "AI automation Indianapolis",
    "AI engineer Indianapolis",
    "Indianapolis developer",
  ],
  authors: [{ name: "James Mendenhall", url: "https://jamesmendenhall.dev" }],
  creator: "James Mendenhall",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "James Mendenhall",
    title: "James Mendenhall — AI Integration & Process Automation",
    description:
      "AI integration and process automation specialist in Indianapolis, Indiana. Intelligent systems, custom AI assistants, and automation tooling.",
    url: "https://jamesmendenhall.dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JamesMendenhall",
    creator: "@JamesMendenhall",
    title: "James Mendenhall — AI Integration & Process Automation",
    description: "AI integration and process automation specialist in Indianapolis, Indiana.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "3Ads-VLIyEVzSkcBuG_X2XaiMr2zhe2M04-3R3Xd5cU",
  },
}

// Tells Google this is the same James Mendenhall as the art site + socials.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jamesmendenhall.dev/#person",
  name: "James Mendenhall",
  url: "https://jamesmendenhall.dev",
  image: "https://jamesmendenhall.art/projects/midnight-florals/pfp-circe.png",
  jobTitle: "AI Integration & Process Automation Specialist",
  description: "AI integration and process automation specialist based in Indianapolis, Indiana.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    addressCountry: "US",
  },
  sameAs: [
    "https://jamesmendenhall.art",
    "https://www.instagram.com/jamesmendenhallart/",
    "https://x.com/JamesMendenhall",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${lato.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
