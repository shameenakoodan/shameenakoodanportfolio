import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "Shameena Koodan | AI Engineer & Developer",
  description: "Portfolio showcasing AI, LLM, and full‑stack projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
