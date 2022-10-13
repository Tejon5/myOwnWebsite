import React from "react";
import "./Slider.css";
import Slides from "./Slides";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const Slider = () =>{
 
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2 >My Projects</h2>
            </div>
            <Carousel
            plugins={["arrows","infinite"]}
            /*slidesPerPage={6}*/
            animationSpeed={700}
            centered
            offset={0}
            itemWidth={400}
            slides={Slides}
            
            breakpoints={{
                960:{
                    slidesPerPage:1.5,
                    arrows:false,
                    itemWidth:250, 
                },
                /*No tocar, ahi esta bien chango, para hacer cambios mutear este por las dudas, mucho costo*/
                420:{
                    slidesPerPage:6,
                    /*arrows:false,*/
                    centered:true,
                    itemWidth:250,
                    animationSpeed:500,
                    offset:20
                }
            }}
            
            />
            
        </div>
    )
}


export default Slider;