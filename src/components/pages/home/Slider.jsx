import styled from "styled-components";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const slidesData = [
    {
        id: 2,
        title: "Summer Sale",
        description: "Don't Compromise on style! Get flat 30% off for new arrivals",
        bg: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 1,
        title: "Winter Sale",
        description: "Don't Compromise on style! Get flat 30% off for new arrivals",
        bg: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "Regular Sale",
        description: "Don't Compromise on style! Get flat 30% off for new arrivals",
        bg: "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    @media(max-width: 450px) {
        margin-bottom: 0;
    }
`
const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    background-color: #fff7f7;
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
    @media(max-width: 450px) {
        display: none;
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: ${props => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 2;
    background-color: rgba(0,0,0,0.2);
    @media(max-width: 990px) {
        align-items: center;
        justify-content: center;
    }
`

const InfoContainer = styled.div`
    position: relative;
    width: 45%;
    padding-left: 7rem;
    color: #fff;
    @media(max-width: 990px) {
        width: 50%;
        text-align: center;
        padding: 1rem;
    }
    @media(max-width: 450px) {
        width: 100%;
        top: 10%;
        text-align: center;
    }
`
const Title = styled.h1`
    font-size: 4rem;
    @media(max-width: 990px) {
        font-size: 2rem;
    }
`
const Description = styled.p`
    margin: 2rem 0;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media(max-width: 990px) {
        font-size: 1rem;
        margin: 1.5rem 0;
    }
`
const Button = styled.button`
    width: fit-content;
    padding: 0rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    &:hover {
        border: 2px solid #fefefe;
        color: #000;
    }
    @media(max-width: 990px) {
        font-size: 1rem;
    }
`
const ButtonText = styled.div`
    width: 9rem;
    margin: 0rem;
    padding: 0.4rem;
    @media(max-width: 450px) {
        width: 8rem
    }
`
const HoverEffect = styled.div` 
    width: 0%;
    height: 100%;
    transition: all 400ms ease-in;
    &:hover {
        width: 100%;
        background-color: #fff;
    }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    // Handle auto slide
    useEffect(() => {
        setTimeout(() => {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }, 8000)
    })

    return (
        <Container className="Large-slider">
            {
                slideIndex > 0 &&
                <Arrow direction='left' onClick={() => handleClick("left")}>
                    <CaretLeft />
                </Arrow>
            }
            <Wrapper slideIndex={slideIndex}>
                {slidesData.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <Overlay>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Link to="/products">
                                    <Button>
                                        <HoverEffect>
                                            <ButtonText>Shop Now</ButtonText>
                                        </HoverEffect>
                                    </Button>
                                </Link>
                            </InfoContainer>
                        </Overlay>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <CaretRight />
            </Arrow>
        </Container>
    )
}

export default Slider