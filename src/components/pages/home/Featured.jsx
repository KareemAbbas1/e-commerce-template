import { useState, useEffect } from "react";
import _debounce from 'lodash.debounce';
import { Link } from "react-router-dom";
import ProductsSlider from "../../ProductsSlider";

const Featured = ({products}) => {


    // handle products
    const [featuredProducts, setFeaturedProducts] = useState();

    // useEffect(() => {
    //     const allProdcuts = products && Object.keys(products).map(key => {
    //         return products[key];
    //     });
    //     setFeaturedProducts(allProdcuts);
    // }, [products]);


    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <>
            <h3 className='featured-title'>#Featured Products</h3>
            <div className="featured">
                <div className="featured-products-grid">
                    <div className="featured-product-card one">
                        <Link to={`/product/${products && products[0]._id}`}>
                            <img src='https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' className="image" />
                            <div className="middle">
                                <div className="text">Products Name</div>
                            </div>
                        </Link>
                    </div>
                    <div className="featured-product-card two">
                        <Link to={`/product/${products && products[1]._id}`}>
                            <img src='https://images.pexels.com/photos/11688446/pexels-photo-11688446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' className="image" />
                            <div className="middle">
                                <div className="text">Products Name</div>
                            </div>
                        </Link>
                    </div>
                    <div className="featured-product-card three">
                        <Link to={`/product/${products && products[2]._id}`}>
                            <img src='https://images.pexels.com/photos/2853909/pexels-photo-2853909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' className="image" />
                            <div className="middle">
                                <div className="text">Products Name</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {
                width <= 992 && <ProductsSlider products={products}/>
            }
        </>
    )
}

export default Featured