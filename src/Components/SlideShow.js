import React from 'react'
import slide1 from '../ImageSlideShow/slide1.jpg'
import slide2 from '../ImageSlideShow/slide2.jpg'

import {Carousel} from 'react-bootstrap';
function SlideShow(){
    return(
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                   <h3>Thời trang</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Two slide"
                />
                <Carousel.Caption>
                    <h3>Phong cách</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}
export default SlideShow;
   