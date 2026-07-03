import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paruni Winery — Elegant wines from the highlands of Macedonia",
  description:
    "A boutique winery in Gostivar, beneath the Šar Planina highlands. Small-batch Macedonian wines shaped by altitude, patience, and cold mountain air.",
  keywords: [
    "Paruni",
    "Macedonian wine",
    "Gostivar winery",
    "highland wine",
    "boutique winery",
    "wine tasting Macedonia",
  ],
  openGraph: {
    title: "Paruni Winery — Elegant wines from the highlands of Macedonia",
    description:
      "Small-batch Macedonian wines shaped by altitude, patience, and cold mountain air. Visit the cellar in Gostivar.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
