import styled from "styled-components";
import { CaretRight } from "react-bootstrap-icons";
import Stars from "../../../assets/stars.png";



const TestimonialsHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 3rem;
    margin-bottom: -1.5rem;
    border: none;
    text-align: center;
`
const TestimonialsTitle = styled.h3`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    @media(max-width: 450px) {
        font-size: 1.5rem;
    }
`

const Container = styled.div`
    width: 100vw;
    height: 70vh;
    padding:  3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 990px) {
        overflow-x: scroll;
        padding: 0;
    }
`
const TestimonialCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 2rem;
    @media(max-width: 990px) {
        min-width: 100vw;
        margin: 0;
    }
    @media(max-width: 450px) {
        width: 100%;
    }
`
const Image = styled.div`
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Para = styled.p`
    max-width: 50vw;
    @media(max-width: 450px) {
        max-width: 94vw
    }
`
const Arrow = styled.div`
        display: none;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 4;
        left: ${props => props.direction === 'left' && '25px'};
        right: ${props => props.direction === 'right' && '25px'};
        @media(max-width: 990px) {
            display: block;
            position: sticky;
        }
    `
const cards = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1541499768294-44cad3c95755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const Testimonials = () => {


    return (
        <>
            <TestimonialsHeader>
                <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
                <p style={{fontSize: '0.8rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            </TestimonialsHeader>
            <Container id="testimonials-container">
                {
                    cards.map(card => (
                        <TestimonialCard key={card.id}>
                            <Image bg={card.img} />
                            <img src={Stars} alt='rate' style={{ width: '5rem', height: 'auto', marginBottom: '0.5rem' }} />
                            <Para>{card.description}</Para>
                        </TestimonialCard>
                    ))
                }
                <Arrow direction='right'>
                    <CaretRight color="#000" size={30} />
                </Arrow>
            </Container>
        </>
    )
}

export default Testimonials
