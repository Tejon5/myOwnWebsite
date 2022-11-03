import React from "react";
import "./Cover.css";
import video2 from "../../media/video2.mp4";


const Cover = () =>{
    return (
        <div className="cover-container">
            <video className="video" src={video2} autoPlay loop muted/>
            <h1>Juan Villalba</h1>
            <p>Full Stack Developer</p>
        </div>
    )
}

export default Cover;