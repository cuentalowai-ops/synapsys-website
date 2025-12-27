/**
 * SYNAPSYS Website - Root Layout
 *
 * European Digital Identity Verification Platform
 * eIDAS 2.0, NIS2, ISO 27001 Compliant Architecture
 */

import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "SYNAPSYS - Universal eIDAS 2.0 Verification Platform",
  description:
    "European Digital Identity Verification Platform. Compliance in 2 weeks, not 12 months. eIDAS 2.0, NIS2, ISO 27001 certified. EU-native data residency.",
  keywords: [
    "eIDAS 2.0",
    "NIS2",
    "ISO 27001",
    "EUDI wallet",
    "digital identity",
    "verification platform",
    "EU compliance",
    "data residency",
    "ARF",
    "OpenID4VC",
  ],
  openGraph: {
    title: "SYNAPSYS - Universal eIDAS Verifier",
    description: "Compliance in 2 weeks. Not 12 months.",
    type: "website",
    locale: "en_EU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
