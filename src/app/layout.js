import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My-Portfolio",
  description: "Portfolio by Leandro De Leon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom`}>{children}</body>
    </html>
  );
}
