import styles from "./window.module.css";
import { useContext, type PropsWithoutRef, type ReactNode } from "react";
import { WindowStyleContext } from "./window";
import { endCursorAppearance } from "./mouseHelper";
import { VT323 } from "./staticForClientComponents";

export default function WindowHeader({
    children,
    setX,
    setY,
    margin
}: {
    children: ReactNode;
    setX: (val: number) => void;
    setY: (val: number) => void;
    margin:number;
}): JSX.Element {
    let windowStyle = useContext(WindowStyleContext);
    return (
        <div
            className={styles.windowHeader}
            style={{ 
                backgroundColor: windowStyle.accentColor || windowStyle.backgroundColor,
                color:windowStyle.headerTextColor || "default",
                marginBottom:margin+"px"
            }}
        >
            {children}
        </div>
    );
}
