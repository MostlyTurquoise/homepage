"use client";
import Image from "next/image";
import { createContext } from "react";
import Window from "../components/window";

export const windowStyleContext = createContext({
  borderColour:"#d3d3d3",
  fill:"#ffffff",
})

export default function ClientWrapper({children}:{children: React.ReactNode}) {
  return (
    <>
      <div>
        <Window>Test</Window>
      </div>
    </>
  );
}
