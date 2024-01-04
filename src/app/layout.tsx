import "./globals.css";

import { ScriptProps } from "next/script";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(props: ScriptProps, parent: ResolvingMetadata):Promise<Metadata>{
  return {
    title: "MostlyTurquoise"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
