import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cards UI - Beautiful Tailwind Bank Cards",
  description:
    "A collection of stunning bank card UI components built with Tailwind CSS. Copy and use them instantly in your projects.",
  keywords: "UI library, bank cards, Tailwind CSS, React, component library, Tailwind components, Tailwindcss components"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
