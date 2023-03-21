import "./home.css";
import { Container, Button, Carousel } from "react-bootstrap";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Featured from "./Featured";
import ProductsSlider from "../../ProductsSlider";
import styled from "styled-components";
import { categories } from "../../../_Data";


const CategoryCard = styled.div`
  height: 100%;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const CategoryTitle = styled.h2`
  text-decoration: none;
  font-weight: 700;
`
const Overlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    transition: 500ms ease;
    &:hover {
      background-color: rgba(255,255,255,0.7);
        color: #000;
    }
`
const Home = ({ products }) => {
  return (
    <div>
      <Slider />

      <Featured products={products} />

      {/* New Arrivals */}
      <div className="d-sm-flex justify-content-sm-between align-items-center mb-lg-4 mb-md-4">
        <div className="h-line"></div><h3 className="new-arrivals-title">New Arrivals</h3><div className="h-line"></div>
      </div>
      <ProductsSlider products={products} />

      {/* Sub Hero */}
      <section className="sub-hero d-flex align-items-center justify-content-center">
        <div className="overlay d-flex align-items-center"></div>
        <Container style={{ flexDirection: 'column', position: 'absolute' }} className="d-flex justify-content-center align-items-center">
          <p>The largest community <br />of tech enthusiasts</p>
          <Button className="register sub-her-btn">Register</Button>
        </Container>


      </section>

      {/* Flash Sale */}
      <h3 className="flash-sale">#Flash Sale</h3>
      <ProductsSlider products={products} />

      {/* Categories */}
      <h3 style={{ textAlign: 'center', fontWeight: '700', marginBottom: '1rem' }}>#Categories</h3>
      <div className="categories">
        {
          categories && categories.map(category => (
            <div key={category.id} className="featured-product-card">
              <Link to={`/products/${category.cat}`} style={{ textDecoration: 'none' }}>
                <CategoryCard bg={category.img}>
                  <Overlay>
                    <CategoryTitle>{category.name}</CategoryTitle>
                  </Overlay>
                </CategoryCard>
              </Link>
            </div>

          ))
        }
      </div>

      {/* Testimonials */}
      <Testimonials />

    </div>
  )
}

export default Home;



// import ShippingBadge from "../../../assets/shipping.png";
// import GuaranteedBadge from "../../../assets/guaranteed.png";
// import WarrantyBadge from "../../../assets/warranty.png";
// import NewArrivals from "./NewArrivals"
// import OnSale from "./OnSale";
// import Brands from "./Brands";

{
  /*
   <div>
      <section className='banner d-flex align-items-center'>
        <Container>
          <h1>Leveraging tech to drive <br></br>a better IT experience.</h1>
          <Link to="/products">
            <Button className="shop-now">Shop Now</Button>
          </Link>
        </Container>
      </section>

      <section className="container d-flex align-items-center justify-content-between mt-2 badges-section">
        <span className="badge-card">
          <img src={ShippingBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Fast Shipping & Returns </span>
        </span>

        <span className="vertical-line"></span>

        <span className="badge-card">
          <img src={GuaranteedBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Lowest Price Guarantee</span>

        </span>

        <span className="vertical-line"></span>

        <span className="badge-card">
          <img src={WarrantyBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Longest Warranties Offer</span>

        </span>
      </section>

      <NewArrivals products={products} />

      <section className="sub-hero d-flex align-items-center">
        <Container className="d-grid justify-content-lg-end justify-content-md-center">
          <p>The largest community <br />of tech enthusiasts</p>
          <Button className="register sub-her-btn">Register</Button>
        </Container>
      </section>

      <OnSale products={products} />

      <Brands />

      <Testimonials />
    </div> 
    */
}


{
  /*
    <section className="badges-section">
        <Container className="d-flex h-100 align-items-center justify-content-between">
          <span style={{ flexDirection: 'column' }} className="badge-card d-flex align-items-center">
            <img src={ShippingBadge} alt='shipping badge' className="badges" />
            <div className="ms-3">Fast Shipping & Returns </div>
          </span>

          <span className="vertical-line"></span>

          <span style={{ flexDirection: 'column' }} className="badge-card d-flex align-items-center">
            <img src={GuaranteedBadge} alt='shipping badge' className="badges" />
            <span className="ms-3">Lowest Price Guarantee</span>

          </span>

          <span className="vertical-line"></span>

          <span style={{ flexDirection: 'column' }} className="badge-card d-flex align-items-center">
            <img src={WarrantyBadge} alt='shipping badge' className="badges" />
            <span className="ms-3">Longest Warranties Offer</span>

          </span>
        </Container>
    </section> 
  */
}


{
  /* 
    <div className="featured-product-card">
          <Link to={`/products`}>
            <img src='https://images.pexels.com/photos/11688446/pexels-photo-11688446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' className="image" />
            <div className="middle">
              <div className="text">Category Name</div>
            </div>
          </Link>
        </div>
        <div className="featured-product-card">
          <Link to={`/products`}>
            <img src='https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' className="image" />
            <div className="middle">
              <div className="text">Category Name</div>
            </div>
          </Link>
    </div> 
  */
}