import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexCrypto | Crypto education and financial acceleration",
  description:
    "ApexCrypto helps investors master the crypto market with courses, mentorships, and expert-guided analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
