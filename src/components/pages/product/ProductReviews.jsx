import { useEffect, useState } from 'react'
import Rating from '../../Rating'
import { Button, ProgressBar, Modal, Form } from 'react-bootstrap';

const ProductReviews = ({ rate, reviews }) => {

    const [fiveStars, setFiveStars] = useState();
    const [fourStars, setFourStars] = useState();
    const [threeStars, setThreeStars] = useState();
    const [twoStars, setTwoStars] = useState();
    const [oneStar, setOneStar] = useState();

    useEffect(() => {
        const fiveStarsArray = reviews && reviews.filter(r => {
            return r.rate === 5;
        })
        setFiveStars(fiveStarsArray)

        const fourStarsArray = reviews && reviews.filter(r => {
            return r.rate === 4;
        })
        setFourStars(fourStarsArray);

        const threeStarsArray = reviews && reviews.filter(r => {
            return r.rate === 3;
        })
        setThreeStars(threeStarsArray);

        const twoStarsArray = reviews && reviews.filter(r => {
            return r.rate === 2;
        })
        setTwoStars(twoStarsArray);

        const oneStarsArray = reviews && reviews.filter(r => {
            return r.rate === 1;
        })
        setOneStar(oneStarsArray);

    }, [reviews])

    const fiveStarsReviews = fiveStars && (fiveStars.length / 5) * 100;
    const fourStarsReviews = fourStars && (fourStars.length / 5) * 100;
    const threeStarsReviews = threeStars && (threeStars.length / 5) * 100;
    const twoStarsReviews = twoStars && (twoStars.length / 5) * 100;
    const oneStarReviews = oneStar && (oneStar.length / 5) * 100;


    // Review products modal
    const [showRateProduct, setShowRateProduct] = useState(false);
    const handleCloseRateProduct = () => setShowRateProduct(false);
    const handleShowRateProduct = () => setShowRateProduct(true);

    const handelSubmit = (e) => {
        e.preventDefault()
    }


    return (

        <div className='product-reviews-container'>
            <div className='d-lg-flex justify-content-lg-between d-sm-grid justify-content-sm-center rate-this-product'>
                <div><Rating rate={rate} /></div>
                <div>{rate} out of 5</div>
            </div>

            <div className='mt-4 rates'>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <span>5 stars</span>
                    <ProgressBar className='rating-bar' now={fiveStarsReviews} />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <span>4 stars</span>
                    <ProgressBar className='rating-bar' now={fourStarsReviews} />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <span>3 stars</span>
                    <ProgressBar className='rating-bar' now={threeStarsReviews} />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <span>2 stars</span>
                    <ProgressBar className='rating-bar' now={twoStarsReviews} />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                    <span>1 star</span>
                    <ProgressBar className='rating-bar' now={oneStarReviews} />
                </div>
            </div>

            <Button
                className='w-100 text-white mt-lg-4 mt-sm-0 mb-sm-5'
                onClick={handleShowRateProduct}
            >
                <strong>Review this Product</strong>
            </Button>

            <Modal
                show={showRateProduct}
                onHide={handleCloseRateProduct}
                backdrop="static"
                keyboard={false}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Review this Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Give a Rate</Form.Label>
                            <Form.Select aria-label="">
                                <option>Choose a rate from 1 to 5</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Leave a Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div className='d-flex justify-content-between'>
                            <Button className='w-25' variant="outline-secondary" onClick={handleCloseRateProduct}>
                                Close
                            </Button>
                            <Button
                                className='text-white w-25'
                                variant="primary"
                                type='submit'
                                onClick={handleCloseRateProduct}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ProductReviews