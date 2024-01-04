import styles from "./window.module.css"
import { useContext, type PropsWithoutRef, type ReactNode } from "react"
import { WindowStyleContext } from "./window"

export default function WindowHeader(
    {children, setX, setY, }
    :{
        children: ReactNode
        setX:(val:number)=>void, 
        setY:(val:number)=>void
    }):JSX.Element {
    let windowStyle = useContext(WindowStyleContext)
    return <div className={styles.windowHeader} style={{backgroundColor:windowStyle.backgroundColor}}>
        {children}
    </div>
}