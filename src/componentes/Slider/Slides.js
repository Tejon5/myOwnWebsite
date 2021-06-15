import React from "react";
import "./Slider.css";



const slidesInfo = [
    {
        src: "https://images.pexels.com/photos/8339774/pexels-photo-8339774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt:"Project1",
        href: "https://find-your-henry-rho.vercel.app",
        desc:"E commerce"
    },
   /* {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt:"Project 2",
        href:"",
        desc:"Project 2"
    }, */
    {
        src: "https://images.pexels.com/photos/8339775/pexels-photo-8339775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt:"Project 3",
        href:"https://actitud.herokuapp.com/",
        desc:"Henry Dev Job"
    },
]

const Slides = slidesInfo.map(slide=>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
          <a href={slide.href}>{slide.desc}</a> 
        </div>
    </div>
))

export default Slides;