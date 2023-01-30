import "./contactUs.css";
import { Form, Button, Row, Col } from "react-bootstrap";


const ContactUs = () => {
    return (
        <div className="contact-us d-flex align-items-center justify-content-center">
            <div className="contact-form-container d-grid justify-content-center">
                <h3 className="mt-4">Contact us</h3>

                <div className="form-container" style={{ width: '55vw' }}>
                    <Form>
                        <Row className="mb-5 mb-md-3 mb-sm-1">
                            <Col xs={12} lg={6}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Enter your name" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="Enter your email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Enter your Message</Form.Label>
                                <Form.Control as="textarea" rows={7} className="message-input" />
                            </Form.Group>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Button
                            className="send-message"
                                variant="primary"
                                type='submit'
                            >
                                Send Message
                            </Button>

                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs