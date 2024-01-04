import { WindowStyleContext } from "./window"
import styles from "./window.module.css"
import { useContext, type ReactNode } from "react"

export default function WindowBody(
    {children, margin}
    :{
        children: ReactNode,
        margin:number
    }):JSX.Element {
    let windowStyle = useContext(WindowStyleContext)
    return <div className={styles.windowBody} style={{
        backgroundColor:windowStyle.backgroundColor,
        marginTop:margin/2+"px"
    }}>
        {children}
    </div>
}