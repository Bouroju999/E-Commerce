import React, { Component } from "react";
import Slider from "react-slick";

function ProductCarousel({ images }) {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
    return (
        <div className="slider-container w-50">
            <Slider {...settings}>
                {images&&images.length>0&&images.map(img => {
                    return <div className="p-2 d-flex justify-content-center align-items-center">
                        <img src={img} width={'500px'} />
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default ProductCarousel;
