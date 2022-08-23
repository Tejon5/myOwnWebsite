import React from "react";
import "./Footer.css";
import cv from "../../media/JuanVillalbaCV(English).pdf";
import cv2 from "../../media/JuanVillalbaCV(Español).pdf";


const Footer = () => {
    const email = "juan.villalba08@gmail.com";
    const mobile = "+541137688667";
    const invite = "https://wa.me/qr/NOIABVXLSZFND1"
    return (
        <footer className="footer">

            <div className="footer-info">
                <h1> Juan Villalba </h1>
                <p>Based in Buenos Aires, Argentina</p>
            </div>
            <div className="footer-container">

                <div className="footer-contact">
                    <h3>Contact Me</h3>
                    <p className="data-contact">👉📱 <a href={invite} rel="noreferrer" target="_blank">{mobile} </a> </p>
                    <p className="data-contact">👉📧  {email}</p>
                    <p className="data-contact">👉📑​ <a className="data-contact-cv" href={cv} download="JuanVillalbaCV-english">CV - English Version </a></p>
                    <p className="data-contact">👉📑​ <a className="data-contact-cv" href={cv2} download="JuanVillalbaCV-spanish">CV - Version en Español </a></p>
                    <p>And let´s get down to work</p>
                </div>

                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/juanvillalba5/"
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