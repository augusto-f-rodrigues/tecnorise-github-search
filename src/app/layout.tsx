import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'fallback',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tecnorise - GitHub Search",
  description: "Aplicação web para pesquisa de repositórios do github desenvolvida por Augusto Felipe Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
