import './productList.css';
import ProductCard from '../../product card/ProductCard';
import { useEffect, useState } from "react";
import Paginationn from './Pagination';
import styled from 'styled-components';
import FiltersBar from './FiltersBar';
import _debounce from 'lodash.debounce';
import FiltersIcon from '../../../assets/Slider.png';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



const Banner = styled.div`
  width: 100vw;
  height: 40vh;
  margin: 3.5rem 0;
  background-image: url(https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-position-y: 50%;
  background-repeat: no-repeat;
`
const Overlay = styled.div`
  width: 100vw;
  height: 40vh;
  margin: 3.5rem 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`
const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 1rem 3rem;
  display: flex;
  gap: 1rem;

  @media(min-width: 1450px) {
    /* padding-inline: 23vw 5rem; */
  }
  @media(max-width: 990px) {
    padding: 0;
  }
`
const ProductsGrid = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media(max-width: 990px) {
    width: 100vw;
  }
`
const GridItem = styled.div`
  width: 30%;
  margin: 0 1rem;
  @media(min-width: 1450px) {
    max-width: 24%;
    margin: 0;
  }
  @media(max-width: 990px) {
    width: 32%;
    margin: 0 0.2rem;
  }
  @media(max-width: 540px) {
    width: 47%;
  }
  @media(max-width: 450px) {
    width: 90%;
  }
`

const FiltersBarButton = styled.button`
  width: 100%;
  position: sticky;
  top: 3.45rem;
  z-index: 100;
  margin-bottom: 1rem;
  background-color: #fff;
  border: none;
  border: 1px solid #ccc;
  text-align: center;
  padding-block: 0.6rem;
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  &:focus {
    border: 2px solid #000;
  }
`

const BackDropEffect = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: none;
`

const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(255,255,255,0.5);
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: ${({ width }) => width > 992 ? "5%" : "15%"};
    height: 0;
    padding-bottom: 100%;
    position: relative;
    -web-kit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`


const ProductsList = () => {


  /* Fetch & Filter Products */
  const [products, setProducts] = useState();

  // helper states
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Filter & Sort states & extract category from url
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const category = location.pathname.split("/")[2];

  // Generate dynamic URL(DB filteration query)
  const url = `${import.meta.env.VITE_APP_API_URL}/api/products?${category ? `category=${category}` : ''}` + `${Object.keys(filters).map(filter =>
    filters[filter].split(",").length >= 1 && filters[filter].split(",")[0] !== '' ?
      `&${filter}=${filters[filter]}` : '')}`


  const searchQuery = location.search !== "" ? location.search.split("?")[1] : false;



  // Fetching products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        // check for searchQuery
        searchQuery
          // fetch product based on search query
          ? `${import.meta.env.VITE_APP_API_URL}/api/products-search?${searchQuery}`
          // check for category without filters
          : category && Object.keys(filters).length <= 0
            // fetch products by category
            ? `${import.meta.env.VITE_APP_API_URL}/api/products?category=${category}`
            // check for filters
            : Object.keys(filters).length > 0
              // ftech filtered products by the dunamically generated URL
              ? url
              // Fetch all products without category and filters
              : `${import.meta.env.VITE_APP_API_URL}/api/products`
      );

      setProducts(res.data);
      setTimeout(() => {
        setLoading(false)
      }, 500);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, filters, searchQuery]);


  // Sort products
  useEffect(() => {
    if (sort === "on-sale") {
      setLoading(true);
      setProducts((prev) => [...prev].filter(product => product.state === "on-sale"));
      setTimeout(() => { setLoading(false) }, 500);
    } else if (sort === "low-to-high") {
      setLoading(true);
      fetchProducts();
      setTimeout(() => {
        setProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
        setLoading(false);
      }, 1000);
    } else if (sort === "high-to-low") {
      setLoading(true);
      fetchProducts();
      setTimeout(() => {
        setProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        setLoading(false);
      }, 1000);
    }
  }, [sort]);

  /* End Fetch & Filter Products */



  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])




  /* handle pagenation */

  const [productsList, setProductsList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    setProductsList(products);
  }, [products])

  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList && productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  /* End handle pagenation */



  // Handle toggle filters bar(offcanvas) < 992px
  const openFiltersBar = () => {
    const sidebar = document.getElementById("filters-bar");
    sidebar.style.transform = 'translateX(0%) scale(0.92)';
    document.getElementById("back-drop").style.display = "block";
    document.querySelector("body").style.overflow = 'hidden';
  }

  const closeFiltersBar = () => {
    const sidebar = document.getElementById("filters-bar");
    sidebar.style.transform = 'translateX(-130%) scale(0.92)';
    document.getElementById("back-drop").style.display = "none";
    document.querySelector("body").style.overflow = 'auto';
  }

  useEffect(() => {
    const backDrop = document.getElementById("back-drop");
    backDrop.addEventListener("click", closeFiltersBar);

    return () => {
      backDrop.removeEventListener("click", closeFiltersBar)
    }
  }, []);



  return (
    <div id='produts-list'>
      {/* Back drop when the filtersbar is open < 992 */}
      <BackDropEffect id="back-drop" />

      {
        loading &&
        <LoadingDiv id="laoding-div" width={width}>
          <div>
            <iframe src="https://giphy.com/embed/L05HgB2h6qICDs5Sms"
              width="100%"
              height="100%"
              style={{ position: 'absolute' }}
              className="giphy-embed" allowFullScreen
            />
          </div>
        </LoadingDiv>
      }

      <Banner id='banner'>
        <Overlay>
          <h1>
            {
              category === "products-search"
              ? `${searchQuery.split("=")[1]}: ${currentProducts && currentProducts.length} results`
              : category
            }
          </h1>
        </Overlay>
      </Banner>

      {/* Open filters bar btn */}
      {
        width <= 992 &&
        <FiltersBarButton onClick={openFiltersBar}>
          <span>Filter Products</span><img style={{ height: '1.7rem', width: 'auto', marginTop: '3px' }} src={FiltersIcon} alt='filters' />
        </FiltersBarButton>
      }


      <Container id="products-list-container">
        <FiltersBar setSort={setSort} setFilters={setFilters} filters={filters} width={width} closeFiltersBar={closeFiltersBar} />

        <ProductsGrid>
          {
            currentProducts && currentProducts.length > 0 ? currentProducts.map(p => (
              <GridItem key={uuidv4()}>
                <ProductCard key={p.id} product={p} />
              </GridItem>
            ))
              : (<h5>Sorry, no products found. Try to change your filters.</h5>)
          }
        </ProductsGrid>
      </Container>

      <div className="d-flex justify-content-center">
        <Paginationn
          productsPerPage={productsPerPage}
          totalProducts={productsList && productsList.length}
          paginate={paginate}
        />
      </div>
    </div >
  )
}

export default ProductsList;