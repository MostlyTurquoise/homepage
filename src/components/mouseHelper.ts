type ResizeDirections = {
    top?:boolean,
    bottom?:boolean,
    left?:boolean,
    right?:boolean
}

function startCursorAppearance(cx:number, cy:number, ex:number, ey:number, width:number, height:number, dragLeniency:number):void{
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
    document.body.style.cursor = "auto";
}

export {startCursorAppearance, startCursorAppearanceByMove, cursorTo, endCursorAppearance, type ResizeDirections}