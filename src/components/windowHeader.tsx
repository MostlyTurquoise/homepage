import styles from "./window.module.css";
import { useContext, type PropsWithoutRef, type ReactNode, type MouseEvent, useState, useRef } from "react";
import { WindowPosition, WindowPositionContext, WindowStyleContext } from "./window";
import { endCursorAppearance } from "./mouseHelper";
import { VT323 } from "./staticForClientComponents";

export default function WindowHeader({
    children,
    margin
}: {
    children: ReactNode;
    margin:number;
}): JSX.Element {
    const windowStyle = useContext(WindowStyleContext);
    const { x, y, setX, setY } = useContext(WindowPositionContext) as WindowPosition;
    let initialClientPosition = useRef<{x:number, y:number}>({
        x:0,
        y:0
    });
    const mouseDownListener = (e:MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("click");
        initialClientPosition.current = {x:e.clientX, y:e.clientY};
        console.log(e.clientX, e.clientY,x, y, initialClientPosition.current.x, initialClientPosition.current.y)
        document.onmousemove = (e)=>{
            e.stopPropagation();
            e.preventDefault();
            let xToSet = x + e.clientX - initialClientPosition.current.x
            let yToSet = y + e.clientY - initialClientPosition.current.y
            console.log(e.clientX - initialClientPosition.current.x, e.clientY - initialClientPosition.current.y)
            setX(xToSet)
            setY(yToSet)
        }

        document.onmouseup = (e)=>{
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    return (
        <div
            className={styles.windowHeader}
            style={{ 
                backgroundColor: windowStyle.accentColor || windowStyle.backgroundColor,
                color:windowStyle.headerTextColor || "default",
                marginBottom:margin+"px"
            }}
            onMouseDown={mouseDownListener}
        >
            {children}
        </div>
    );
}
