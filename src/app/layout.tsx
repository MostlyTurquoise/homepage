import type { Metadata } from "next";
import { createContext } from "react";
import localFont from "next/font/local";
import "./globals.css";

export const VT323 = localFont({
  src: "./fonts/VT323/VT323-Regular.ttf",
});

export const windowStyleContext = createContext({
  border:"2px solid #d3d3d3",
  fill:"#ffffff",
})

export const metadata: Metadata = {
  title: "Home | MostlyTurquoise",
  description: "The MostlyTurquoise Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header></header>
      <body>
        {children}
      </body>
    </html>
  );
}
