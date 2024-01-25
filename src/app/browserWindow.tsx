import React from "react";

export default function BrowserWindow(props: { initialURL: string | null }) {
    const [url, setURL] = React.useState(
        props.initialURL || "https://www.google.com"
    );
    console.log(url)
    return (
        <>
            <div style={{ display: "flex" }}>
                <input type="text" id="url" defaultValue={url}></input>
                <button
                    onClick={() => {
                        setURL(
                            (document.getElementById("url") as HTMLInputElement)
                                .value
                        );
                    }}
                >
                    Go
                </button>
            </div>
            <iframe
                src={url}
                style={{ width: "calc(100% - 10px)", height: "calc(100% - 50px)" }}
            ></iframe>
        </>
    );
}
