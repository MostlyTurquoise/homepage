"use client";

import BrowserWindow from "./browserWindow";
import styles from "./page.module.css";
import Window from "@/components/window";

export default function Home() {
    return (
        <>
            <div>
                <Window title="Boogle Drome">
                    <BrowserWindow initialURL="http://localhost:3000" />
                </Window>
                <Window title="Test Window Title">
                    <iframe
                        src="https://www.archive.org"
                        style={{
                            width: "calc(100% - 4px)",
                            height: "calc(100% - 4px)",
                            margin: "2px",
                        }}
                    />
                </Window>
            </div>
        </>
    );
}
