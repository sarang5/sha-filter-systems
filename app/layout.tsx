import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SHA Filtration Systems - Professional Filtration Equipment",
  description:
    "Premium filtration and separation equipment for industrial wastewater treatment, sludge dewatering, and more. Established since 1995.",
  generator: "v0.app",
  keywords: "filtration, separation, equipment, filter press, centrifuge, wastewater treatment, sludge dewatering",
  authors: [{ name: "SHA Filtration Systems" }],
  openGraph: {
    title: "SHA Filtration Systems",
    description: "Professional filtration solutions since 1995",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
