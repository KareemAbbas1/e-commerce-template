import React from 'react';
import './product.css'
import { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import ImagesSlider from './ImagesSlider';
import ReviewCard from './ReviewCard';
import Rating from '../../Rating';
import ProductReviews from './ProductReviews';
import ResponsiveAccordions from './ResponsiveAccordions';
import ProductsSlider from '../../ProductsSlider';
import { Link } from "react-router-dom";



const Produt = (props) => {

  const products = props.products;

  let { id } = useParams();
  const [product, setProduct] = useState();
  const [toggleActiveTab, setToggleActiveTab] = useState(1);

  const [simillarProducts, setSimillarProducts] = useState();

  useEffect(() => {

    const handleOnSale = async () => {

      setTimeout(() => {

        const productsArray = Object.keys(products).map(key => {
          return products[key];
        });

        const product = productsArray.find(p => p.id === id);
        setProduct(product)

      }, 100)
    }
    handleOnSale();
  }, [id, products])

  const name = product && product.name;
  const rate = product && product.rate;
  const images = product && product.images;
  const reviews = product && product.reviews;
  const brand = product && product.brand;
  const quantity = product && product.quantity;
  const type = product && product.type;
  const description = product && product.description;
  const price = product && product.price;
  const color = product && product.color;
  const productDetails = product && product.productDetails;

  // Handle Simillar Products
  useEffect(() => {
    const handleSimillarProducts = async () => {

      setTimeout(() => {

        const productsArray = Object.keys(products).map(key => {
          return products[key];
        });

        // eslint-disable-next-line array-callback-return
        const simillarProductsArray = productsArray && productsArray.filter(p => {
          if (p.id !== id) {
            return p.type === type;
          }
        });
        setSimillarProducts(simillarProductsArray);

      }, 100)
    }
    handleSimillarProducts();

  }, [products, type, id])

  return (
    <Container fluid className='products-container'>
      <Row className='details-container px-xl-5'>
        <Col lg={7} md={8}>
          <ImagesSlider images={images} />
        </Col>
        <Col lg={5} md={4} sm={12} className='product-details px-xl-4'>
          <h2>{name}</h2>
          <div className='d-flex justify-content-between mt-3'>
            <Rating rate={rate} reviews={reviews} />
            <p style={{ color: "rgb(68, 66, 66)" }}> {reviews && reviews.length} reviews</p>
          </div> <br />

          <p>Brand: <span>{brand}</span></p>
          <p>Availability: <span>{quantity} in stock</span></p>
          <p>Product Type: <span>{type}</span></p>
          <br />
          <p className='mt-4'>{description}</p>
          <p className='mt-4'><strong>${price}</strong></p>
          <p className='mt-4'> Color: <span>{color}</span></p>
          <div className='color mt-4' style={{ background: `${color}` }}></div>
          <div className='buttons-container'>
            <div className='d-flex justify-content-between mt-5'>
              <span style={{ width: '48%' }} className='d-flex justify-content-between align-items-center me-2'>
                <Button variant='outline-dark' className='decrement'>
                  <span className='d-flex justify-content-between align-items-center'>
                    <BsDash size={25} />
                  </span>
                </Button>
                <div className='mx-1 quantity'>1</div>
                <Button variant='outline-dark' className='increment'>
                  <span className='d-flex justify-content-between align-items-center'>
                    <BsPlus size={25} />
                  </span>
                </Button>
              </span>

              <Button className='add-to-cart' variant='dark'>
                <Link
                  to="/cart"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "inline-block",
                    width: "100%"
                  }}
                >
                  Add To Cart
                </Link>
              </Button><br />
            </div>
            <Button
              className='w-100 mt-2'
              variant='outline-dark'
              style={{
                borderRadius: '0',
                fontWeight: '500'
              }}
            >
              <Link to="/cart" className='add-to-cart-link'>
                Buy Now
              </Link>
            </Button>
          </div>
        </Col>
      </Row>

      {/* Details & Reviews */}
      <Row className='details-row px-lg-5'>
        <div className='details-and-reviews-section'>

          <div className='tabs'>
            <div className={toggleActiveTab === 1 ? 'tab active-tab' : 'tab'}>
              <button onClick={() => setToggleActiveTab(1)}>
                <h5>Product Details</h5>
              </button>
            </div>

            <div className={toggleActiveTab === 2 ? 'tab active-tab' : 'tab'}>
              <button onClick={() => setToggleActiveTab(2)}>
                <h5>Customers Reviews</h5>
              </button>
            </div>

            <div className={toggleActiveTab === 3 ? 'tab active-tab' : 'tab'}>
              <button onClick={() => setToggleActiveTab(3)}>
                <h5>Shipping & Returns</h5>
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className='tabs-content'>
            <div className={toggleActiveTab === 1 ? 'tab-content active-tab-content w-lg-75' : 'tab-content'}>
              <p>{productDetails}</p>
            </div>

            {/* Customers Reviews */}
            <div
              className={toggleActiveTab === 2 ? 'tab-content active-tab-content' : 'tab-content'}>
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
            </div>

            {/* Shipping & Returns */}
            <div className={toggleActiveTab === 3 ? 'tab-content active-tab-content w-lg-75' : 'tab-content'}>
              <p>
                <h6>RETURNS POLICY</h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat quam a purus faucibus scelerisque. Mauris ac dui ante. Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed dictum. Duis congue posuere libero, a aliquam est porta quis.

                Donec ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed, convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit amet, fringilla felis. Nullam maximus nisi nec mi facilisis.
                <br /><br />

                <h6>SHIPPING</h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut blandit risus. Donec mollis nec tellus et rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut consequat quam a purus faucibus scelerisque. Mauris ac dui ante. Pellentesque congue porttitor tempus. Donec sodales dapibus urna sed dictum. Duis congue posuere libero, a aliquam est porta quis.

                Donec ullamcorper magna enim, vitae fermentum turpis elementum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam rutrum tempor ex ac rutrum. Maecenas nunc nulla, placerat at eleifend in, viverra etos sem. Nam sagittis lacus metus, dignissim blandit magna euismod eget. Suspendisse a nisl lacus. Phasellus eget augue tincidunt, sollicitudin lectus sed, convallis desto. Pellentesque vitae dui lacinia, venenatis erat sit amet, fringilla felis. Nullam maximus nisi nec mi facilisis.

              </p>
            </div>
          </div>
        </div>
        <div className='responsive-accordions'>
          <ResponsiveAccordions productDetails={productDetails} rate={rate} reviews={reviews} />
        </div>
      </Row>

      {/* Simillar Products */}
      <Row style={{ borderTop: '1px solid #9d9d9d' }}>
        <h4 className='mt-5'>Simillar Products</h4>
        <ProductsSlider products={simillarProducts} />
      </Row>
    </Container>
  );
}


export default Produt;