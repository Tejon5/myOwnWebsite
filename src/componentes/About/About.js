import React from "react";
import "./About.css";
import imagenperfil from "../../media/imagenperfil.jpg"

const About = ()=>{
    return(
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me​</h3>
                <p>I´m a Software Developer with abilities in backend and frontend.</p>
                <p>I´m a FullStack Developer 👨‍💻.</p>
                <p> By the way, I´m always learning a little bit more, IT is like an infinite loop, don´t you think so?🤔​</p>
                <div className="languages-container">
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"  />
                    <img className="une" src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="Boostrap"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"  />
                    <img className="une" src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql"  />
                    <img className="une" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb"  />
                    <img className="une"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql"  />
                    <img className="une" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman"  />
                    <img className="due" src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg" alt="azure"  />
                    <img className="due" src="https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg" alt="shopify"  />
                    <img className="due" src="https://www.vectorlogo.zone/logos/asana/asana-ar21.svg" alt="asana" />

                </div>
            </div>
            <div className="about-img">
                <img src={imagenperfil} alt="About Juan"/>
            </div>
        </div>
    )
}

export default About;