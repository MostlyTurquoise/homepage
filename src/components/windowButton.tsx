import { useContext } from "react";
import { WindowStyleContext } from "./window";

export default function WindowButton({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    let windowStyle = useContext(WindowStyleContext);
    return (
        <div
            style={{
                backgroundColor: windowStyle.backgroundColor,
            }}
        >
            {children}
        </div>
    );
}