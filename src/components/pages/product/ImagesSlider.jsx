import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";
import "./imageSlider.css";

const ImagesSlider = ({ images }) => {


    const [slideImages, setSlideImages] = useState([]);

    useEffect(() => {
        images && setSlideImages(images);
    }, [images])



    const properties = {
        autoplay: false,
        transitionDuration: 300,
        prevArrow: <div className="arrow arrow-left"></div>,
        nextArrow: <div className="arrow arrow-right"></div>,
        scale: 0.4,
        indicators: i => (<div className="indicator indicators-container" style={{ backgroundImage: `url(${slideImages[i]})` }}></div>)
    };

    return (
        <Slide {...properties}>
            {slideImages.map((each, index) => (
                <div key={index} className="each-slide">
                    <div style={{ backgroundImage: `url(${each})` }}></div>
                </div>
            ))}
        </Slide>
    )
}

export default ImagesSlider