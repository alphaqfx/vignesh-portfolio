import { Outfit, Jost, Strait, Lexend } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";
const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600", "700"]
});

const jost = Jost({
  subsets: ["latin"],weight: ["400"]
});

const strait = Strait({
  subsets: ["latin"],weight: ["400"]
});

const lexend = Lexend({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Vignesh Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${jost.variable} ${strait.variable} ${lexend.variable} antialiased leading-8 overflow-x-hidden dark:bg-[var(--color-dark-theme)] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
} 
