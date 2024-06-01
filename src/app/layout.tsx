import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "Medical Concierge | Dr Rashmi Sama | Pulmonologist, General Physician, Medical Consierge",
  description:
    "An exclusive monthly retainer based medical concierge service for oversight and co-ordination of treatment across multiple medical specialists.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
