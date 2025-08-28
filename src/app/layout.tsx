//Layout is kind of like the main page of the app

import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react"
import { Providers } from "./providers"
import Header from "@/components/Header"


export const metadata: Metadata = {
  title: "T-Sender",
  description: "Send tokens",
};

// Every React component can accept props (inputs)
export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
      >
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
