import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/CSS/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boss's Website | Full-Stack Developer",
  description: "Welcome to Boss's Website. Explore my projects, skills, and portfolio as a Full-Stack Developer.",
  keywords: "Full-Stack Developer, Web Developer, Next.js, React, Tailwind CSS, MongoDB",
  authors: [{ name: "Sahasawat Ruenkaew", url: "https://bossbsynth.com" }],
  creator: "Sahasawat Ruenkaew",
  robots: "index, follow",  // Allow search engines to index the site
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
