import React from "react";
import "./Footer.css"

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1> Juan Villalba </h1>
                <p>Based in Buenos Aires</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <p className="phone">👉📱  +541137688667</p>
                <p className="email">👉📧  juan.villalba08@gmail.com</p>
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