// src/app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Hensolution",
  description: "Bem-vindo ao Hensolution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
