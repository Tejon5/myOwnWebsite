import React from "react";
import "./Slider.css";
import Slides from "./Slides";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const Slider = () =>{
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Proyects</h2>
            </div>
            <Carousel
            plugins={["arrows", "infinite"]}
            slidesPerPage={3}
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={Slides}
            breakpoints={{
                960:{
                    slidesPerPage:1,
                    arrows:false,
                    itemWidth:250
                }
            }}
            />
        </div>
    )
}


export default Slider;