import { Accordion, Row, Col } from "react-bootstrap";
import ProductReviews from "./ProductReviews";
import ReviewCard from "./ReviewCard";


const ResponsiveAccordions = ({ productDetails, rate, reviews }) => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Product Details</Accordion.Header>
                    <Accordion.Body>
                        {productDetails}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Customers Reviews</Accordion.Header>
                    <Accordion.Body>
                        <div className='w-100 mb-4'>
                            <Row className='d-flex flex-lg-row-reverse justify-content-lg-between'>
                                <Col lg={6} md={12} sm={12} className='d-flex justify-content-lg-end justify-content-sm-center'>
                                    <ProductReviews rate={rate} reviews={reviews} />
                                </Col>

                                <Col lg={6} md={12} sm={12} className='d-flex justify-content-lg-start justify-content-sm-center'>
                                    <ReviewCard reviews={reviews} />
                                </Col>
                            </Row>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Shipping & Returns</Accordion.Header>
                    <Accordion.Body>
                        <h6>RETURNS POLICY</h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat quam a purus faucibus scelerisque. Mauris ac dui ante. Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed dictum. Duis congue posuere libero, a aliquam est porta quis.

                        Donec ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                        Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed, convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit amet, fringilla felis. Nullam maximus nisi nec mi facilisis.
                        <br /><br />

                        <h6>SHIPPING</h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat quam a purus faucibus scelerisque. Mauris ac dui ante. Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed dictum. Duis congue posuere libero, a aliquam est porta quis.

                        Donec ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                        Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed, convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit amet, fringilla felis. Nullam maximus nisi nec mi facilisis.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default ResponsiveAccordions