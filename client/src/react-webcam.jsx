import React from "react";
import Webcam from "react-webcam";

 const WebcamComponent = () => {
    return (
        <div>
            <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
            ></Webcam>
        </div>  
    );
 };

 export default WebcamComponent;
