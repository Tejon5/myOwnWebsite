import React from "react";
import "./Slider.css";
import todo from "../../media/todoapp.jpg";
import meli from "../../media/henrymelichallenge.jpg";
import calculadolar from "../../media/calculadolar.jpg"
import henrydevjob from "../../media/henrydevjob.jpg"
import henryecommerce from "../../media/henryecommerce.jpg"

const consologuer = ()=>{
    console.log("hola chiche")
}


const slidesInfo = [
    {
        src: henrydevjob,
        alt:"Project1",
        href: "https://find-your-henry-rho.vercel.app",
        desc:"Henry Dev Job"
    },
     {
        src: todo,
        alt:"To Do App",
        href:"https://tejon-todo-type-react.herokuapp.com/",
        desc:"To Do App"
    }, 
    {
        src: henryecommerce,
        alt:"Project 3",
        href:"https://actitud.herokuapp.com/",
        desc:"Ecommerce"
    },
    {
        src:meli,
        alt:"Proyect 4",
        href:"https://mchallenge-tejon5.vercel.app/",
        desc:"MELI"
    },
    {
        src:calculadolar,
        alt:"Proyecto 5",
        href:"",
        desc:"Calculadolar"
    },
]



const Slides = slidesInfo.map(slide=>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
          <a href={slide.href} rel="noreferrer" target="_blank">{slide.desc}</a> 
        </div>  
    
    </div>
))


export default Slides;