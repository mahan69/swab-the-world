import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mahan Luxe - Premium Shopping Experience",
  description: "Discover the finest collection of fashion, electronics, and lifestyle products at Mahan Luxe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
        <main>{children}</main>
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
