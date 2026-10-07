import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stgloballlc.com"),
  title: "STG | Create, negotiate, and manage secure service agreements",
  description:
    "Stop wrestling with PDFs. Use STG to draft, negotiate, and sign secure service agreements in minutes. Protect your business with smarter contract management.",
  openGraph: {
    title: "STG | Create, negotiate, and manage secure service agreements",
    description:
      "Draft, negotiate, and sign secure service agreements in minutes.",
    siteName: "STG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
