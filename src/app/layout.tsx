import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import WindowWrapper from "./windowWrapper";

export const VT323 = localFont({
  src: "./fonts/VT323/VT323-Regular.ttf",
});

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
      <body>
        <WindowWrapper>{children}</WindowWrapper>
      </body>
    </html>
  );
}
