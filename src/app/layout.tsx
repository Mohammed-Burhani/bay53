import type { Metadata } from "next";
import "./globals.css";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BAY53 ERP - AI-Powered ERP Solution for Small & Medium Enterprises",
  description: "Transform your business with BAY53 ERP - a comprehensive AI-powered ERP solution designed for SMEs. Streamline operations, increase efficiency, and drive growth with our integrated platform. 14+ years of experience, 1000+ happy clients.",
  keywords: ["ERP software", "AI-powered ERP", "business management", "SME solutions", "enterprise resource planning", "BAY53", "business automation", "integrated ERP platform"],
  authors: [{ name: "BAY53" }],
  openGraph: {
    title: "BAY53 ERP - AI-Powered ERP Solution for SMEs",
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
        <RecaptchaProvider>
          {children}
          <Toaster position="top-right" richColors />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
