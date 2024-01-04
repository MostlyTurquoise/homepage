"use client";

import { useContext, createContext, useState, MouseEvent } from "react";
import styles from "./window.module.css";
import { VT323 } from "@/components/staticForClientComponents";

export type WindowStyle = {
  borderColour: string;
  fill: string;
};

export const windowStyleContext = createContext({
  borderColour: "#d3d3d3",
  fill: "#ffffff",
});

export default function Window(
  props: React.PropsWithChildren<{ windowStyle?: WindowStyle }>
) {
  const windowStyle = props.windowStyle || useContext(windowStyleContext);
  let [width, setWidth] = useState("100px");
  let [height, setHeight] = useState("100px");
  let clickListener = (e: MouseEvent<HTMLDivElement>)=>{
    
  }

  return (
    <windowStyleContext.Provider value={windowStyle}>
      {/* Outer window object */}
      <div
        className={styles.window + " " + VT323.className}
        style={{
          width,
          height,
        }}
        onClick={clickListener}
      >
        Window
        {props.children}
      </div>
    </windowStyleContext.Provider>
  );
}
