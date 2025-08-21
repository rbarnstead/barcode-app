import React, { useState, useRef, useEffect } from "react";
import { BrowserPDF417Reader } from "@zxing/browser";
import { NotFoundException, ChecksumException, FormatException } from "@zxing/library";

export default function Scanner() {
    const videoRef = useRef(null);
    const [result, setResult] = useState("");
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        if (!scanning) return;

        let controls;
        const codeReader = new BrowserPDF417Reader();

        const start = async () => {
            controls = await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
                if (result) {
                    setResult(result.text);
                    console.log(result.text, controls);
                    if (controls) controls.stop;
                    setScanning(false);
                } else if (err) {
                    //error checking
                    if (err instanceof NotFoundException) {
                    } else if (err instanceof ChecksumException) {
                        console.log("Checksum failed – keep scanning");
                    } else if (err instanceof FormatException) {
                        console.log("Format error – keep scanning");
                    } else {
                        console.error("Unexpected error", err);
                    }
                }
            })
        }

        start();

        return () => {
            if (controls) controls.stop;
        }


    }, [scanning])

    return (
        <div>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                style={{
                    width: "100%",
                    border: "2px solid #333",
                    borderRadius: 8,
                }}
            >   
            </video>
            <button
                onClick={() => {
                    if (scanning) {
                        setScanning(false);
                        if(videoRef.current) videoRef.current.srcObject = null;
                    } else {
                        setResult("");
                        setScanning(true);
                    }
                }}  
            >
                {scanning ? "Stop Scanning" : "Start Scanning"}  
            </button>
        </div>
    );

}
