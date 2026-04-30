import type { Metadata } from "next";
import { Inter, Fredoka, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Fusion Tales | Local Night Café",
  description: "Real moments, authentic vibes in Rourkela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${fredoka.variable} ${caveat.variable} font-sans antialiased bg-night text-warmWhite min-h-screen selection:bg-leaf selection:text-night`}>
        {children}
      </body>
    </html>
  );
}
