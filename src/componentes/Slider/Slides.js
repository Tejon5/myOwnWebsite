import React from "react";
import "./Slider.css";
import todo from "../../media/todoapp2.jpg";


const slidesInfo = [
    {
        src: "https://images.pexels.com/photos/8339775/pexels-photo-8339775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        src: "https://images.pexels.com/photos/8339774/pexels-photo-8339774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt:"Project 3",
        href:"https://actitud.herokuapp.com/",
        desc:"Ecommerce"
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