import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "T-Sender",
  description: "Send tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
