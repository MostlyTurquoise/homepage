"use client";

import { useContext, createContext, useState, MouseEvent } from "react";
import styles from "./window.module.css";
import { VT323 } from "@/components/staticForClientComponents";

import WindowHeader from "./windowHeader";
import WindowBody from "./windowBody";

export type WindowStyle = {
    borderColor: string;
    backgroundColor: string;
};

export const WindowStyleContext = createContext<WindowStyle>({
    borderColor: "#d3d3d3",
    backgroundColor: "#ff11ff",
});

type ResizeDirections = {
    top?:boolean,
    bottom?:boolean,
    left?:boolean,
    right?:boolean
}

let dragLeniency = 5;

function startCursorAppearance(cx:number, cy:number, ex:number, ey:number, width:number, height:number):void{
    let mouseXWithinElement = cx - ex;
    let mouseYWithinElement = cy - ey;
    let move:ResizeDirections = {}
    move.left = mouseXWithinElement < dragLeniency
    move.top = mouseYWithinElement < dragLeniency;
    move.right = mouseXWithinElement > width - dragLeniency;
    move.bottom = mouseYWithinElement > height - dragLeniency;
    startCursorAppearanceByMove(move)
}

function startCursorAppearanceByMove(move:ResizeDirections):void{
    if(move.left || move.right && !(move.top || move.bottom)){
        document.body.style.cursor = "ew-resize";
    }
    if(move.bottom || move.top && !(move.left || move.right)){
        cursorTo("ns-resize")
    }
    if((move.bottom && move.left) || (move.top && move.right)){
        cursorTo("nesw-resize")
    }
    if((move.bottom && move.right) || (move.top && move.left)){
        cursorTo("nwse-resize")
    }
}

function cursorTo(newval:string){
    document.body.style.cursor = newval
}

function endCursorAppearance():void{
    document.body.style.cursor = "default";
}

export default function Window(
    props: React.PropsWithChildren<{ windowStyle?: WindowStyle, inx?:number,iny?:number,inw?:number, inh?:number }>
) {
    const windowStyle = props.windowStyle || useContext(WindowStyleContext);
    let [x, setX] = useState(props.inx || 20);
    let [y, setY] = useState(props.iny || 20);
    let [width, setWidth] = useState(props.inw || 100);
    let [height, setHeight] = useState(props.inh || 100);
    let clickListener = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        let mouseXWithinElement = e.clientX - x;
        let mouseYWithinElement = e.clientY - y;
        // console.log(mouseXWithinElement,mouseYWithinElement)
        let move:{
            top?:boolean,
            bottom?:boolean,
            left?:boolean,
            right?:boolean
        } = {}
        move.left = mouseXWithinElement < dragLeniency
        move.top = mouseYWithinElement < dragLeniency;
        move.right = mouseXWithinElement > width - dragLeniency;
        move.bottom = mouseYWithinElement > height - dragLeniency;


        document.onmousemove = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if(move.left){
                setX(e.clientX)
                setWidth(width - e.clientX)
            } else if(move.right) {
                setWidth(e.clientX - x)
            }

            if(move.top){
                setY(e.clientY)
                setHeight(height - e.clientY)
            } else if(move.bottom) {
                setHeight(e.clientY - y)
            }
        };
        document.onmouseup = (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.onmousemove = null;
            document.onmouseup = null;
            endCursorAppearance()
        };
    };

    let hoverStartListener = (e:MouseEvent)=>{
        if(document.onmousemove==null){
            startCursorAppearance(e.clientX,e.clientY, x, y, width, height)
        }
    }

    let hoverEndListener = (e:MouseEvent)=>{
        if(document.onmousemove==null){
            endCursorAppearance()
        }
    }

    let moveWhileHoveringListener = (e:MouseEvent)=>{
        if(document.onmousemove==null){
            startCursorAppearance(e.clientX,e.clientY,x,y,width,height)
        }
    }

    return (
        <WindowStyleContext.Provider value={windowStyle}>
            {/* Wrapper object for window */}
            <div
                className={styles.window + " " + VT323.className}
                style={{
                    left:x,
                    top:y,
                    width,
                    height,
                }}
                onMouseDown={clickListener}
                onMouseEnter={hoverStartListener}
                onMouseLeave={hoverEndListener}
                onMouseMove={moveWhileHoveringListener}
            >
                <WindowHeader setX={setX} setY={setY}>Test Window</WindowHeader>
                <WindowBody>{props.children}</WindowBody>
            </div>
        </WindowStyleContext.Provider>
    );
}
