import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import { Carousel } from "react-bootstrap";
import _debounce from 'lodash.debounce';
import ProductCard from "./product card/ProductCard";
import { v4 as uuidv4 } from 'uuid';


// Styles
const Container = styled.div`
        width: 100%;
        height: 100%;   
        display: flex;
        position: relative;
        overflow: hidden;
        margin-bottom: 3rem;
        @media(max-width: 990px) {
            overflow-x: scroll;
            margin-bottom: 0;
        }
        @media(max-width: 540px) {
            display: none;
        }
    `
const Arrow = styled.div`
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        background-color: #000;
        opacity: 0.3;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 4;
        left: ${props => props.direction === 'left' && '25px'};
        right: ${props => props.direction === 'right' && '25px'};
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
        @media(max-width: 990px) {
            position: sticky;
            padding: 1rem
        }
        @media(max-width: 450px) {
            display: none;
        }
    `
const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transition: 1s ease;
        transform: translateX(${props => props.slideIndex * -19.9}vw);
        @media(min-width: 1425px) {
            transform: translateX(${props => props.slideIndex * -19.9}vw);
        }
        @media(max-width: 990px) {
        transform: translateX(${props => props.slideIndex * -33.4}vw);
        }
        @media(max-width: 768px) {
            transform: translateX(${props => props.slideIndex * -33.3}vw);
        }
    `
const Slide = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    `


const ProductsSlider = ({ products }) => {

    const [slideProducts, setSlideProducts] = useState();

    useEffect(() => {
        const allProdcuts = products && Object.keys(products).map(key => {
            return products[key];
        });
        setSlideProducts(allProdcuts);
    }, [products]);


    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideProducts.length);
        } else if (direction === 'right' && width <= 990) {
            setSlideIndex(slideIndex + 4 <= slideProducts.length ? slideIndex + 1 : 0);
        }
        else if (direction === 'right') {
            setSlideIndex(slideIndex + 5 <= slideProducts.length ? slideIndex + 1 : 0);
        }
    }

    
    // Disable context menu
    const slides = Array.from(document.querySelectorAll('.slide-card'));
    slides.oncontextmenu = function (event) {
        event.preventDefault()
        event.stopPropagation()
        return false
    }


    return (

        <>
            <Container>
                {
                    slideIndex > 0 &&
                    <Arrow direction='left' onClick={() => handleClick("left")}>
                        <CaretLeft color="#fff" />
                    </Arrow>
                }
                <Wrapper className="slider" slideIndex={slideIndex}>
                    <Slide className="slide-card">
                        {slideProducts && slideProducts.map(p => (
                            <div key={uuidv4()} >
                                <ProductCard product={p} />
                            </div>
                        ))};
                    </Slide>
                </Wrapper>
                <Arrow direction='right' onClick={() => handleClick("right")}>
                    <CaretRight color="#fff"/>
                </Arrow>
            </Container>
            <Carousel variant="dark" className="products-carousel" interval={null}>
                {
                    slideProducts && slideProducts.map(p => (
                        <Carousel.Item key={uuidv4()} className='products-carousel-item'>
                            <ProductCard product={p}/>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </>
    )
}



export default ProductsSlider


// Handle scroll on touch
    // const slider = document.querySelector('.slider'),

    // let isDragging = false,
    //     startPosition = 0,
    //     currentTranslate = 0,
    //     prevTranslate = 0,
    //     animationID = 0,
    //     currentIndex = 0;





    // slides.forEach((slide, index) => {

    //     // Touch Events
    //     slide.addEventListener('touchstart', touchStart(index));
    //     slide.addEventListener('touchend', touchEnd);
    //     slide.addEventListener('touchmove', touchMove);

    //     // Mouse Events
    //     slide.addEventListener('mousedown', touchStart(index));
    //     slide.addEventListener('mouseup', touchEnd);
    //     slide.addEventListener('mouseleave', touchEnd);
    //     slide.addEventListener('mousemove', touchMove);
    // })

    // function touchStart(index) {
    //     return (event) => {
    //         console.log('start')
    //         currentIndex = index
    //         startPosition = getPositionX(event)
    //         isDragging = true;

    //         https://css-tricks.com/using-requestAnimationFrame/
    //         animationID = requestAnimationFrame(animation)
    //     }
    // }

    // function touchEnd() {
    //     console.log('end')
    //     isDragging = false;
    //     cancelAnimationFrame(animationID);

    //     const movedBy = currentTranslate - prevTranslate;

    //     if(movedBy < -100 && currentIndex < slides.length - 1) {currentIndex += 1};

    //     if(movedBy > 100 && currentIndex > 0) {currentIndex -= 1};

    //     setPositionByIndex()
    // };

    // function touchMove(event) {
    //     console.log('move')
    //     if (isDragging) {
    //         const currentPosition = getPositionX(event)
    //         currentTranslate = prevTranslate + currentPosition - startPosition
    //     }
    // }

    // const getPositionX = (event) => {
    //     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    // }

    // const animation = () => {
    //     setSliderPosition()
    //     if(isDragging) requestAnimationFrame(animation)
    // }

    // const setSliderPosition = () => {
    //     slider.style.transform = `translateX(${currentTranslate}vw)`
    // }

    // const setPositionByIndex = () => {
    //     currentTranslate = currentIndex * -window.innerWidth
    //     prevTranslate = currentTranslate
    //     setSliderPosition()
    // }
