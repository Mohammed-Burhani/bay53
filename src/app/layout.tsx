import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bay53 ERP - AI-Powered ERP Solution for Small & Medium Enterprises",
  description: "Transform your business with Bay53 ERP - a comprehensive AI-powered ERP solution designed for SMEs. Streamline operations, increase efficiency, and drive growth with our integrated platform. 14+ years of experience, 1000+ happy clients.",
  keywords: ["ERP software", "AI-powered ERP", "business management", "SME solutions", "enterprise resource planning", "Bay53", "business automation", "integrated ERP platform"],
  authors: [{ name: "Bay53" }],
  openGraph: {
    title: "Bay53 ERP - AI-Powered ERP Solution for SMEs",
    description: "Comprehensive AI-powered ERP solution designed for Small and Medium Enterprises. Streamline operations, increase efficiency, and drive growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
