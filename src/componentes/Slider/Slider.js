import React from "react";
import "./Slider.css";
import Slides from "./Slides";
import Carousel , { slidesToShowPlugin }from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";



const Slider = () =>{
 
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2 >My Projects</h2>
            </div>
            <Carousel
            plugins={["arrows","infinite",
            {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: 2
                }
              },
        ]}
            
            slides={Slides}
            
            breakpoints={{
              /*Este es el Breakpoint del xiaomi m1 a1*/
              360:{   
                plugins: [
                    'arrows','centered',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 0.85 
                      }
                    },
                  ],
                  /*itemWidth:250*/
            },
                380:{   
                    plugins: [
                        'arrows','centered',
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                           numberOfSlides: 0.9 
                          }
                        },
                      ]
                },
                394:{   
                  plugins: [
                      'arrows','centered',
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                         numberOfSlides: 0.95 
                        }
                      },
                    ]
              },
                415:{   
                  plugins: [
                      'arrows','centered',
                      {
                        resolve: slidesToShowPlugin,
                        options: {
                         numberOfSlides: 1.07
                        }
                      },
                    ]
              },
                462:{
                    /*arrows:false,*/
                    /*centered:true,
                    itemWidth:250,
                    animationSpeed:500,
                    offset:20*/
                    
                    plugins: [
                        'arrows','centered',
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                           numberOfSlides: 1.1/*OPTIMO 1.1*/ 
                          }
                        },
                      ]
                },
                960:{
                    plugins: [
                        'arrows','centered',
                        {
                          resolve: slidesToShowPlugin,
                          options: {
                           numberOfSlides: 2
                          }
                        },
                      ],
                    itemWidth:250
                },
            }}
            
            />
            
        </div>
    )
}


export default Slider;