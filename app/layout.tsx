import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FJAT Mecanindustria | Ingeniería de Precisión y Mantenimiento Industrial",
  description:
    "FJAT Mecanindustria SAC ofrece soluciones integrales de mantenimiento industrial, fabricación CNC de precisión y montajes metálicos de alto rendimiento. Certificación A1.",
  keywords: [
    "ingeniería industrial",
    "mantenimiento industrial",
    "fabricación CNC",
    "montajes metálicos",
    "precisión mecánica",
    "industria Perú",
    "FJAT Mecanindustria",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "FJAT Mecanindustria | Ingeniería de Precisión",
    description:
      "Soluciones integrales de mantenimiento, fabricación CNC y montajes industriales de alto rendimiento.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-steel-300">
        <div className="ambient-glow" />
        <div className="tech-grid" />
        <div className="noise-overlay" />
        <div className="blueprint-ruler blueprint-ruler--left" />
        <div className="blueprint-ruler blueprint-ruler--right" />
        {children}
      </body>
    </html>
  );
}
