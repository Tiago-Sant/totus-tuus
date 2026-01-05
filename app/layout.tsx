import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consagração a Jesus por Maria",
  description: "App para preparação espiritual da Consagração a Jesus por Maria.",
  icons: {
    icon: "/icons/favicon.svg",
  },
  openGraph: {
    title: "Consagração a Jesus por Maria",
    description: "App para preparação espiritual da Consagração a Jesus por Maria.",
    url: "https://totus-tuus-zeta.vercel.app/",
    images: [
      {
        url: "/icons/share.png",
        width: 512,
        height: 512,
        alt: "Consagração a Jesus por Maria",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consagração a Jesus por Maria",
    description: "App para preparação espiritual da Consagração a Jesus por Maria.",
    images: ["/icons/share.png"],
  },
};

import { ModeToggle } from "./components/ModeToggle";
import { Heart } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          <div className="min-h-screen flex flex-col px-4 md:px-0">
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <footer className="mt-16 text-sm text-center text-zinc-400 py-8 flex flex-col items-center gap-2">
              <Heart className="mx-auto mb-1 w-6 h-6 text-indigo-400 dark:text-indigo-300" />
              <span>
                App para auxiliar na preparação da consagração a Jesus por Maria, segundo o método de São Luís Maria Grignion de Montfort.
              </span>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
