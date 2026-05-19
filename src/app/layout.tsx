import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diablo Huma — Archivo Digital",
  description:
    "Sitio documental sobre el Diablo Huma, danzante ceremonial del Inti Raymi en Ecuador.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
