import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Shan Daniel | Cybersecurity Student & Software Engineer",
  description: "Professional portfolio of David Shan Daniel - Aspiring Cybersecurity Expert, Software Engineer, and Best Graduate from Destiny Schools. Passionate about technology and innovation.",
  keywords: "David Shan Daniel, cybersecurity, software engineer, FUASKACHIA, technology, programming, graphic design, problem solving, Microsoft",
  authors: [{ name: "David Shan Daniel" }],
  metadataBase: new URL('http://localhost:3001'),
  openGraph: {
    title: "David Shan Daniel | Cybersecurity Student & Software Engineer",
    description: "Professional portfolio of David Shan Daniel - Aspiring Cybersecurity Expert, Software Engineer, and Best Graduate from Destiny Schools.",
    type: "website",
    images: ["/david_danie.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
