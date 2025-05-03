import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skolaris | Education",
  description: "Reimagining education for the digital age",
};

const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased, poppins.className`
        )}
      >
        {children}
      </body>
    </html>
  );
}
