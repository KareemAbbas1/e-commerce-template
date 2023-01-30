import './productList.css'
import ProductCard from '../../product card/ProductCard'
import { useEffect, useState } from "react";
import Paginationn from "./Pagination";
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import FiltersBar from './FiltersBar';
import _debounce from 'lodash.debounce';
import { Offcanvas } from 'react-bootstrap';
import FiltersIcon from '../../../assets/Slider.png';




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
    padding: 1rem 5rem;
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


const ProductsList = ({ products }) => {

  // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const [productsList, setProductsList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    const handleProductsList = async () => {

      setTimeout(() => {
        const productsArray = Object.keys(products).map(key => {
          return products[key];
        })
        setProductsList(productsArray);

      }, 100)
    }
    handleProductsList();
  }, [products])

  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList && productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  // Handle close offcanvas on route change
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  }
  const handleCloseOffcanvas = () => setOffcanvasOpen(false);


  return (
    <>
      <Banner>
        <Overlay>
          <h1>#Category Name</h1>
        </Overlay>
      </Banner>

      {
        width <= 990 &&
        <Navbar
          key='expand'
          expand='lg'
          style={{
            height: '3rem',
            maxWidth: '100%',
            padding: '0 1rem',
            marginBottom: '0.5rem',
            borderBottom: '1px solid #c7c7c7',
          }}
        >
          <Navbar.Toggle
            aria-controls='offcanvasNavbar-expand'
            onClick={toggleOffcanvas}
            className='d-flex align-items-start justify-content-between'
            style={{ 
              border: 'none', 
              borderRadius: '0', 
              padding: '0', 
              color: '#000', 
              maxWidth: '55%' 
            }}
          >
            <h4 className='p-0 m-0 me-2'>Filter Products</h4><img style={{height: '1.7rem', width: 'auto'}} src={FiltersIcon}  alt='filters'/>
          </Navbar.Toggle>


          <Navbar.Offcanvas
            id='offcanvasNavbar-expand'
            aria-labelledby='offcanvasNavbarLabel-expand'
            show={offcanvasOpen}
            onHide={handleCloseOffcanvas}
            className='offcanvas'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand' />
            </Offcanvas.Header>

            <FiltersBar />
          </Navbar.Offcanvas>
        </Navbar>
      }

      <Container>
        {
          width > 990 && <FiltersBar />
        }


        <ProductsGrid>
          {currentProducts && currentProducts.map(p => (
            <GridItem>
              <ProductCard key={p.id} product={p} />
            </GridItem>
          ))}
        </ProductsGrid>
      </Container>

      <div className="d-flex justify-content-center">
        <Paginationn
          productsPerPage={productsPerPage}
          totalProducts={productsList && productsList.length}
          paginate={paginate}
        />
      </div>
    </>
  )
}

export default ProductsList

