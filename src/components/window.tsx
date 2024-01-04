"use client";

import { useContext } from 'react';
import styles from './window.module.css'
import { VT323 } from '../app/layout'
import { windowStyleContext } from '../app/windowWrapper';

export type WindowStyle = {
    borderColour:string,
    fill:string
}


export default function Window(props:React.PropsWithChildren<{windowStyle?:WindowStyle}>){
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