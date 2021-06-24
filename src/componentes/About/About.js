import React from "react";
import "./About.css";
import imagenperfil from "../../media/imagenperfil.jpg"

const About = ()=>{
    return(
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>I´m a Software Developer with abilities in backend and frontend. I´m a FullStack Developer.
                By the way, I´m always learning a little bit more, IT is like an infinite loop 👨‍💻, don´t you think so?.</p>
            </div>
            <div className="about-img">
                <img src={imagenperfil} alt="About Juan"/>
            </div>
        </div>
    )
}

export default About;