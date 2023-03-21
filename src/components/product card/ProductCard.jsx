import { Card } from "react-bootstrap";
import "./productCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';


const Button = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: #000;
    color: #fff;
    transition: all 500ms ease;
    &:hover {
        background-color: #fff;
        color: #000
    }
`
const ProductCard = ({ product }) => {
    // console.log(product);
    const id = product && product._id;
    const rate = product && product.rate;
    const image = product && product.images[0];
    const productName = product && product.title;
    const productDescription = product && product.description;
    const price = product && product.price;
    const oldPrice = product && product.oldPrice;
    const colors = product && product.colors

    return (
        <div className="d-flex gap-3 mb-5">
            <Card className="card-container category-card-container">
                <div className="product-card">
                    <Link to={`/product/${id}`}>
                        <Card.Img className="product-image" variant="top" src={image} />
                        <div className="middle">
                            <div className="text">More Details</div>
                        </div>
                    </Link>
                </div>
                <Card.Body className="pt-2 px-2 card-body">

                    <div className="d-flex justify-content-between align-items-start">
                        <Card.Title className="h6">{productName}</Card.Title>
                        <div style={{ marginTop: '-0.2rem' }}>
                            <Rating rate={rate} />
                        </div>
                    </div>

                    <Card.Text style={{ fontSize: '0.9rem', minHeight: '2.7rem' }}>
                        {productDescription}
                    </Card.Text>

                    <div style={{ marginTop: '-0.5rem', marginBottom: '0.5rem' }} className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            {
                                colors.map(color => (
                                    <div
                                        key={uuidv4()}
                                        className="color-circle"
                                        style={{ backgroundColor: `${color}` }}
                                    ></div>
                                ))
                            }
                        </div>
                        <div className="d-flex align-items-center">
                            {/* Old price field(only for on-sale products) */}
                            <span style={{ fontSize: '13px', textDecoration: 'line-through' }}>{oldPrice && `$${oldPrice}`}</span>
                            <Card.Title>${price}</Card.Title>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link to={`/product/${id}`} style={{width: '100%'}}>
                            <Button>
                                <h5>Add to Cart</h5>
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
        // <div className="d-flex gap-3 mt-5 mb-5">
        //     <Card className="card-container" style={{textAlign: 'center'}}>
        //         <div className="product-card">
        //             <Link to={`/products/${id}`}>
        //                 <Card.Img className="image" variant="top" src={image}
        //                     style={{
        //                         height: '50vh',
        //                         borderRadius: '0'
        //                     }} />
        //                 <div className="middle">
        //                     <div className="text">More Details</div>
        //                 </div>
        //             </Link>
        //         </div>
        //         <Card.Body className="pt-2 px-2">

        //             <div className=" justify-content-between align-items-start">
        //                 <Card.Title className="h6">{productName}</Card.Title>
        //                 <div style={{ marginTop: '-0.2rem' }}>
        //                     <Rating rate={rate} />
        //                 </div>
        //             </div>

        //             <Card.Text style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
        //                 {productDescription}
        //             </Card.Text>

        //             <div style={{ marginTop: '-0.5rem', marginBottom: '0.3rem', flexDirection: 'column' }} className="d-flex align-items-center">
        //                 <div className="d-flex">
        //                     <div className="color-circle"></div>
        //                     <div className="color-circle"></div>
        //                     <div className="color-circle"></div>
        //                 </div>
        //                 <div className="d-flex align-items-center">
        //                     {/* Old price field(only for on-sale products) */}
        //                     <Card.Title>${price}</Card.Title>
        //                     <span style={{ fontSize: '13px', textDecoration: 'line-through' }}>{oldPrice && `$${oldPrice}`}</span>
        //                 </div>
        //             </div>

        //             <div className="d-flex justify-content-center">
        //                 <Button
        //                     style={{
        //                         width: '100%',
        //                         borderRadius: '0'
        //                     }}
        //                     className="text-white pt-2"
        //                     variant="dark"
        //                 >
        //                     <h5>Add to Cart</h5>
        //                 </Button>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </div>
    )
}

export default ProductCard