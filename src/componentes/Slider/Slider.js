import React,{useState} from "react";
import "./Slider.css";
import Slides from "./Slides";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReviewModal from "../modals/ReviewModal";
import Button from 'react-bootstrap/Button';

const Slider = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) =>{
        e.target.console.log("hice click te dije capo")
    }
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2 >My Proyects</h2>
            </div>
            <Carousel
            plugins={["arrows" /*"infinite"*/]}
            slidesPerPage={4}
            animationSpeed={900}
            centered
            offset={50}
            itemWidth={400}
            slides={Slides}

            breakpoints={{
                960:{
                    slidesPerPage:1,
                    arrows:false,
                    itemWidth:250,           
                }
            }}
            
            />
            
        </div>
    )
}


export default Slider;