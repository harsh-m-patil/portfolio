import type { Metadata } from "next";
import localFont from "next/font/local";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Dock } from "@/components/Dock";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harsh's Portfolio",
  description: "Portfolio made using Next.js and AcerternityUI",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>
            {children}
            <ShootingStars />
            <StarsBackground />
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
