import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600"], variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"], variable: "--font-ovo"
});

export const metadata = {
  title: "Portfolio - Parveen",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-c dark:text-white `}>{children}</body>
    </html>
  );
}
