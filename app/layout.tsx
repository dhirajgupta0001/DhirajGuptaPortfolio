import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "Dhiraj | Full Stack Developer",
  description: "Portfolio of Dhiraj. Full Stack Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-500/20 selection:text-brand-900 transition-colors duration-300">
        <Background />
        <Navbar />
        <main className="relative z-10 pt-24 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
