import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { Layout } from "@/components/layout/Layout";
import { siteConfig } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins h-full antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
