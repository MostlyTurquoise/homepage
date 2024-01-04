import styles from "./window.module.css"
import type { ReactNode } from "react"

export default function WindowBody(
    {children}
    :{
        children: ReactNode
    }):JSX.Element {
    return <div className={styles.windowBody}>
        {children}
    </div>
}