import { useContext } from 'react';

import styles from './window.module.css'
import { VT323, windowStyleContext } from './layout'

export default function Window(props:React.PropsWithChildren<{windowStyle:string}>){
    const windowStyle = props.windowStyle || useContext(windowStyleContext)
    return(
        <windowStyleContext.Provider value={windowStyle}>
            <div className={styles.window + " " + VT323.className}>
                Window
                {props.children}
            </div>
        </windowStyleContext.Provider>
        
    )
}