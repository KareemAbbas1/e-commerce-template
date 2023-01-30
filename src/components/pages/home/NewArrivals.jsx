import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import NewArrivalCard from "./NewArrivalCard";
import ProductCard from "../../product card/ProductCard";
import { Link } from "react-router-dom";
import ProductsSlider from '../../ProductsSlider';



const NewArrivals = ({ products }) => {

    // const [allNewArrivals, setAllNewArrivals] = useState();
    // const [newArrivals, setNewArrivals] = useState();
    // const [newestProduct, setNewestProduct] = useState();

    // useEffect(() => {

    //     const handleNewArrivals = async () => {

    //         setTimeout(() => {
    //             const productsArray = products && Object.keys(products).map(key => {
    //                 return products[key];
    //             });

    //             const newProductsArray = productsArray && productsArray.filter(p => {
    //                 return p.state === "new arrival"
    //             });
    //             setAllNewArrivals(newProductsArray);

    //             const firstProduct = newProductsArray && newProductsArray.shift();
    //             setNewestProduct(firstProduct);

    //             const newProducts = newProductsArray && newProductsArray.slice(1, 5);
    //             setNewArrivals(newProducts);

    //         }, 100);
    //     }
    //     handleNewArrivals();
    // }, [products]);


    return (
        <>
            {/* <h3>#Featured</h3> */}
            {/* <div className="new-arrivals">
                <div className="new-arrivals-banner"></div>
                <div className="">
                </div>
            </div> */}
        </>
    )
}

export default NewArrivals;

// <section className="new-arrivals-section">
{/* <Container className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="h-line"></div><h3 className="new-arrivals">New Arrivals</h3><div className="h-line"></div>
                </div>
            </Container> */}

{/* Products Grid */ }
{/* <Container className="new-arrivals-products mb-5 mt-5">
                <Row className="d-flex justify-content-between mx-1 h-100" >

                    <Col className="grid-col" lg={6}
                        style={{
                            marginTop: '0.8%'
                        }}>
                        <NewArrivalCard product={newestProduct} />
                    </Col>

                    <Col className="d-grid grid-col" lg={6} >
                        <ul className="new-arrival-grid">
                            {newArrivals && newArrivals.map(p => (
                                <li key={p.id}>
                                    <NewArrivalCard product={p} />
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container className="products-responsive-grid">
                <Row>
                    <ul className="d-flex gap-3" style={{ listStyleType: 'none' }}>
                        <li key={newestProduct && newestProduct.id}>
                            <ProductCard product={newestProduct} />
                        </li>
                        {allNewArrivals && allNewArrivals.map(p => (
                            <li key={p.id}>
                                <ProductCard product={p} />
                            </li>
                        ))}
                    </ul>
                </Row>
            </Container>
            <Link to="/products">
                <Button className="show-more" variant="outline-secondary">Show More</Button>
            </Link> */}
{/* </section> */ }