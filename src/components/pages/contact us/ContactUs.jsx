import "./contactUs.css";
import styled from "styled-components";
import LogoWhite from "../../../assets/Logo.png";
import { GeoAltFill, ChatSquareDots, Envelope } from 'react-bootstrap-icons';


const Container = styled.div`
    max-width: 100%;
    height: 100%;
    padding-top: 3.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    @media(max-width: 1366px) {
        gap: 1rem;
    }
`


const Banner = styled.div`
    width: 100%;
    height: 40vh;
    background-image: ${({ bg }) => `url('${bg}')`};
    background-position: 1px -130px;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    h2 {
        z-index: 10;
    }
    p {
        width: 30%;
        z-index: 10;

        @media(max-width: 992px) {
            width: 50%;
        }

        @media(max-width: 450px) {
            width: 80%;
        }
    }


    @media(max-width: 992px) {
        background-position: 1px -70px;
    }

    @media(max-width: 450px) {
        background-position: 1px -1px;
    }
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 40vh;
    background-color: rgba(0,0,0,0.5);
`

const ContactInfo = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    gap: 4rem;
    padding-top: 1rem;
    
    
    @media(min-width: 1680px) {
        padding-inline: 19%;
    }

    @media(max-width: 1440px) {
        padding-inline: 10%;
        height: 100vh;
    }

    @media(max-width: 1366px) {
        padding-inline: 5rem;
    }

    @media(max-width: 992px) {
        padding-inline: 2rem;
    }

    @media(max-width: 450px) {
        flex-flow: column;
        min-height: 100vh;
        /* width: 100vw; */
    }


    form {
        width: 53%;
        height: 82%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 1.5rem;


        h5 {
            margin-bottom: 0;
        }
        p {
            /* margin-top: -7px; */
            color: #232323;
            opacity: 0.9;

        }

        input {
            width: 100%;
            padding: 10px 5px;
            border: 1px solid #ccc;
        }

        textarea {
            width: 100%;
            border: 1px solid #ccc;
            resize: none;
        }

        label {
            /* margin-bottom: -12px; */
            strong {
                font-size: 13px;
                color: #da0000c5;
            }
        }


        button {
            width: 11vw;
            background: #000;
            color: #fff;
            font-weight: 500;
            font-size: 1.1rem;
            padding: 8px;
            transition: all 300ms ease;

            &:hover {
                background: #fff;
                color: #000;
            }

            @media(max-width: 992px) {
                width: 10rem;
            }
        }


        @media(height: 907px), (height: 757px) {
            height: 89%;
        }

        @media(max-width: 450px) {
            width: 100%;
            height: 90vh;
        }
    }

    div.contact-info {
        width: 41%;
        height: 74.7%;
        background: #fafafa;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        padding: 4rem;
        color: #232323;
        opacity: 0.9;

        button {
            border: 1px solid #000;
            padding: 10px;
            font-size: 1.1rem;
            width: 12rem;
            margin-block: 13px;
            background: transparent;

            @media(max-width: 1366px) {
                margin-block: 5px;
            }
        }

        @media(max-width: 1680px) {
            padding-top: 2.5rem;
        }
        @media(height: 907px), (height: 757px) {
            height: 82%;
            padding-top: 2rem;

            button {
                margin-block: 0px;
            }
        }

        @media(min-width: 1365px) and (max-width: 1366px) {
            padding: 1rem 4rem;
            height: 82%;
        }

        @media(max-width: 992px) {
            padding: 4rem 1rem;
        }

        @media(max-width: 450px) {
            width: 100%;
            display: none;
        }
    }


    @media(height: 757px) {
        transform: scale(0.9);
        padding-top: 0;
        margin-top: -2rem;
    }

    @media(height: 625px) {
        height: 126vh;
    }
`

const ContactUs = () => {
    return (
        <Container>
            <Banner bg="https://images.pexels.com/photos/3858268/pexels-photo-3858268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                <Overlay />
                <h2>Contact Us</h2>
                <p>
                    We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated.
                </p>



            </Banner>


            <h1>Get In Touch</h1>


            <ContactInfo>
                <form className="contact-for">
                    <h5>Send us a message</h5>
                    <p>Ask us anything! We're here to help.</p>


                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                    />

                    <label id="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                    />

                    <label htmlFor="email">Email <strong>*</strong></label>
                    <input
                        id="email"
                        type="email"
                    />

                    <label id="message">Message <strong>*</strong></label>
                    <textarea
                        id="message"
                        rows="9"
                    />


                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <h5>Live Help</h5>
                    <p>
                        If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative. If we aren’t available, drop us an email to the left and we will get back to you within 20-36 hours!
                    </p>
                    <button>Message Us</button>

                    <img src={LogoWhite} alt='logo' style={{ width: '5.5rem', marginLeft: '-0.6rem' }} />
                    <div className='d-flex'>
                        <GeoAltFill size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            685 Market Street<br />
                            San Francisco, CA 94105,<br />
                            United States
                        </p>
                    </div>
                    <div className='d-flex'>
                        <ChatSquareDots size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            Text: (091)-123-9665<br />
                        </p>
                    </div>
                    <div className='d-flex'>
                        <Envelope size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            email@domain.com
                        </p>
                    </div>
                    <div>
                        Opening Hours:<br />
                        MON to SAT: 9:00AM - 10:00PM<br />
                        SUN: 10:00AM - 6:00PM
                    </div>
                </div>
            </ContactInfo>
        </Container>
    )
}

export default ContactUs


{/* <div className="contact-us d-flex align-items-center justify-content-center"> */ }
    // < div className = "contact-form-container d-grid justify-content-center" >
    //             <h3 className="mt-4">Contact us</h3>

    //             <div className="form-container" style={{ width: '55vw' }}>
    //                 <Form>
    //                     <Row className="mb-5 mb-md-3 mb-sm-1">
    //                         <Col xs={12} lg={6}>
    //                             <Form.Group>
    //                                 <Form.Label>Name</Form.Label>
    //                                 <Form.Control placeholder="Enter your name" />
    //                             </Form.Group>
    //                         </Col>

    //                         <Col>
    //                             <Form.Group>
    //                                 <Form.Label>Email</Form.Label>
    //                                 <Form.Control placeholder="Enter your email" />
    //                             </Form.Group>
    //                         </Col>
    //                     </Row>

    //                     <Row>
    //                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //                             <Form.Label>Enter your Message</Form.Label>
    //                             <Form.Control as="textarea" rows={7} className="message-input" />
    //                         </Form.Group>
    //                     </Row>
    //                     <Row className="d-flex justify-content-center">
    //                         <Button
    //                         className="send-message"
    //                             variant="primary"
    //                             type='submit'
    //                         >
    //                             Send Message
    //                         </Button>

    //                     </Row>
    //                 </Form>
    //             </div>
    //         </div >