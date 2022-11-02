import React, { /*useState */} from "react";
import "./Slider.css";
import todo from "../../media/todoapp.jpg";
import meli from "../../media/henrymelichallenge.jpg";
import calculadolar from "../../media/calculadolar.jpg";
import henrydevjob from "../../media/henrydevjob.jpg";
import henryecommerce from "../../media/henryecommerce.jpg";
import samvilla from "../../media/samvilla.jpg";
/*import ReviewModal,{handleShow} from "../modals/ReviewModal";*/



const slidesInfo = [
    {
        src: henrydevjob,
        alt: "Project1",
        href: "https://find-your-henry-rho.vercel.app",
        desc: "Henry Dev Job",

    },
    {
        src: todo,
        alt: "To Do App",
        href: "https://tejon-todo-type-react.herokuapp.com/",
        desc: "To Do App"
    },
    {
        src: henryecommerce,
        alt: "Project 3",
        href: "https://actitud.herokuapp.com/",
        desc: "Ecommerce"
    },
    {
        src: meli,
        alt: "Proyect 4",
        href: "https://mchallenge-tejon5.vercel.app/",
        desc: "MELI"
    },
    {
        src: calculadolar,
        alt: "Proyecto 5",
        href: "https://www.linkedin.com/posts/juanvillalba5_reactnative-expo-reactnative-activity-6909883248349188096-B7Ti?utm_source=linkedin_share&utm_medium=member_desktop_web",
        desc: "Calculadolar"
    },
    {
        src: samvilla,
        alt: "Proyecto 6",
        href: "https://www.samvilla.com/",
        desc: "Sam Villa"
    },
]


/*Por favor, leer documentacion, es un lindo desafio conectar el modal */
const Slides = slidesInfo.map(slide => (
    <>
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} /*onClick={() => handleShow}*/ />
        <div className="slide-desc">
       

            <a className='clicked' href={slide.href} rel="noreferrer" target="_blank">Click Here!</a>
        </div>
    </div>
        
        </>
))


export default Slides;