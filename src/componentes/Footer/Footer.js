import React from "react";
import "./Footer.css";
import cv from "../../media/JuanVillalbaCV(English).pdf"; 

const Footer = () =>{
    const email = "juan.villalba08@gmail.com";
    const mobile = "+541137688667";
    
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1> Juan Villalba </h1>
                <p>Based in Buenos Aires</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <p className="data-contact">👉📱  {mobile}</p>
                <p className="data-contact">👉📧  {email}</p>
                <p className="data-contact">👉📑​ <a href={cv} download="JuanVillalbaCV-english">CV - English Version -</a></p>
                <p className="data-contact">👉📑​ <a href={cv} download="JuanVillalbaCV-spanish">CV - Version en Español -</a></p>
                <p>And let´s get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/juan-villalba-9aa4921a9/" 
                    rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/tejon5" rel="noreferrer" target="_blank">
                        <i className="fab fa-github github"></i>
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;