import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Islam Nasser - Data Scientist",
  description:
    "Professional portfolio of Islam Nasser - Data Scientist, ML Enthusiast, and Data Analytics Expert specializing in Python, Machine Learning, and Business Intelligence.",
  generator: "v0.dev",
  keywords: "Islam Nasser, Data Scientist, Machine Learning, Python, Data Analysis, AI, Portfolio",
  authors: [{ name: "Islam Nasser" }],
  creator: "Islam Nasser",
  openGraph: {
    title: "Islam Nasser - Data Scientist",
    description:
      "Professional portfolio showcasing data science projects, machine learning expertise, and analytics solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam Nasser - Data Scientist",
    description: "Data Scientist specializing in ML, Python, and Business Intelligence",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
