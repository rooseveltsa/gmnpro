import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMN Pro - Otimização Profissional do Google Meu Negócio",
  description: "Coloque sua empresa no topo do Google e atraia mais clientes todos os dias. Especialistas em otimização do Google Meu Negócio para empresas locais.",
  keywords: ["Google Meu Negócio", "otimização", "marketing digital", "visibilidade local", "SEO local", "empresas locais"],
  authors: [{ name: "GMN Pro Team" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: { url: "/favicon.png", type: "image/png" },
  },
  openGraph: {
    title: "GMN Pro - Otimização do Google Meu Negócio",
    description: "Coloque sua empresa no topo do Google e atraia mais clientes todos os dias",
    url: "https://gmnpro.com",
    siteName: "GMN Pro",
    type: "website",
    images: [
      {
        url: "/google-logo.png",
        width: 1024,
        height: 1024,
        alt: "GMN Pro - Otimização do Google Meu Negócio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMN Pro - Otimização do Google Meu Negócio",
    description: "Coloque sua empresa no topo do Google e atraia mais clientes todos os dias",
    images: ["/google-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
