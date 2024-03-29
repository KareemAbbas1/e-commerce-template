import './navbar.css';
import { Container, Nav, Navbar, Offcanvas, Button, Image } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import whiteLogo from "../../assets/LogoWhite.png";
import { useState, useEffect } from 'react';
import { Search, Cart3, Person, X } from 'react-bootstrap-icons';
import _debounce from 'lodash.debounce';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';


const CartBadge = styled.span`
    background-color: ${props => `${props.bg}`};
    color: ${props => `${props.color}`};
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: .9rem;
    font-weight: 500;
    position: absolute;
    right: 0.1rem;
    top: -0.2rem;
`

const CustomLI = styled.li`
    transition: all 300ms ease;

    &:hover {
        opacity: 0.7;
        div.more-details {
            display: block;
        }
    }
`
const NavBar = () => {

    // Cart State
    const quantity = useSelector(state => state.cart.quantity);

    // Handle Rerender at screen width change: Check this answer for elaboration (https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react#:~:text=As%20of%20React,Flag)
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    // Handle navbar background visibility onScroll and route change
    const location = useLocation();
    const [showNavBackground, setShowNavBackground] = useState(false)
    const navbarVisibility = () => {
        if (window.scrollY > 70) {
            setShowNavBackground(true);
        } else {
            setShowNavBackground(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", navbarVisibility);

        return () => {
            window.removeEventListener("scroll", navbarVisibility);
        };
    }, []);


    // Handle close offcanvas on route change
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
    const toggleOffcanvas = () => {
        setOffcanvasOpen(!offcanvasOpen);
    }
    const handleCloseOffcanvas = () => setOffcanvasOpen(false);


    // Handle toggle search bar
    const [showSearchbar, setShowSearchbar] = useState(false);
    const toggleSearchbar = () => {
        if (showSearchbar === (false)) {
            document.getElementById("searchBar-container").style.display = 'block'
            setShowSearchbar(true)
        } else {
            document.getElementById("searchBar-container").style.display = 'none';
            document.getElementById('search-form').reset();
            setSearchResults([]);
            setShowSearchbar(false);
        }
    }


    // Handle nav links style
    const navLinkStyle = () => {
        if (showNavBackground || location.pathname !== '/') {
            return 'link black-link';
        } else {
            return 'link';
        }
    }


    // Handle login offcanvas
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    // handle search
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showMoreResults, setShowMoreResults] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/products/products-search?query=${searchQuery}`);
        toggleSearchbar();
    };


    useEffect(() => {
        const handleSearchResults = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/products-search?query=${searchQuery}`);
                const resToShow = res.data.length > 5 ? res.data.slice(0, 6) : res.data;
                setSearchResults(resToShow);
                res.data.length > 5 ? setShowMoreResults(true) : setShowMoreResults(false);
            } catch (err) {
                setSearchResults(err.response.data.message);
            }
        };
        searchQuery.length > 0 && handleSearchResults();
    }, [searchQuery]);


    return (
        <Navbar
            key='expand'
            expand='lg'
            className={`${showNavBackground || location.pathname !== '/' ? 'nav show-navbar-background' : 'nav'}`}
        >
            <Container fluid className='nav-content'>

                <div className='brand-container' >
                    <Navbar.Brand>
                        <Link to="/">
                            {
                                showNavBackground || width <= 990 || location.pathname !== '/'
                                    ? <Image fluid src={logo} alt='logo' className='logo' />
                                    : <Image fluid src={whiteLogo} alt='logo' />
                            }
                        </Link>
                    </Navbar.Brand>
                </div>

                <div className='nav-links-container' >
                    <Navbar.Toggle
                        aria-controls='offcanvasNavbar-expand'
                        className='offcanvasToggler'
                        onClick={toggleOffcanvas}
                        style={{ border: 'none', borderRadius: '0', padding: '0' }}
                    />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand'
                        aria-labelledby='offcanvasNavbarLabel-expand'
                        show={offcanvasOpen}
                        onHide={handleCloseOffcanvas}
                        className='offcanvas'
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className='justify-content-between flex-grow-1 nav-links'>
                                <Link
                                    to="/"
                                    className={`home-link ${navLinkStyle()}`}
                                    onClick={handleCloseOffcanvas}
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/products/women"
                                    className={navLinkStyle()}
                                    onClick={handleCloseOffcanvas}
                                >
                                    Women
                                </Link>

                                <Link
                                    to="/products/men"
                                    onClick={handleCloseOffcanvas}
                                >
                                    <span className={navLinkStyle()}>
                                        Men
                                    </span>
                                </Link>

                                <Link
                                    to="/products/kids"
                                    onClick={handleCloseOffcanvas}
                                >
                                    <span className={navLinkStyle()}>
                                        Kids
                                    </span>
                                </Link>

                                <Link
                                    to="/about-us"
                                    onClick={handleCloseOffcanvas}
                                >
                                    <span className={location.pathname === '/about-us' ? `active-link ${navLinkStyle()}` : navLinkStyle()}>
                                        About Us
                                    </span>
                                </Link>

                                <Link
                                    to="/contact-us"
                                    onClick={handleCloseOffcanvas}
                                >
                                    <span className={location.pathname === '/contact-us' ? `active-link ${navLinkStyle()}` : navLinkStyle()}>
                                        Contact Us
                                    </span>
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>

                <div className='d-flex justify-content-end icons-container' >
                    <button className='icons search-icon' onClick={() => toggleSearchbar()}>
                        <Search color={showNavBackground || width <= 990 || location.pathname !== '/' ? '#000' : '#fff'} size={20} className='me-2' />
                    </button>

                    <button className='icons login-icon' onClick={() => handleShowLogin()}>
                        <Person color={showNavBackground || width <= 990 || location.pathname !== '/' ? '#000' : '#fff'} size={26} />
                    </button>

                    <Link to='/cart'>
                        <button className='icons' style={{ position: 'relative' }}>
                            <Cart3
                                color={
                                    showNavBackground || width <= 990 || location.pathname !== '/' ? '#000' : '#fff'
                                }
                                size={21}
                                className='me-2'
                            />
                            <CartBadge
                                color={showNavBackground || width <= 990 || location.pathname !== '/' ? '#fff' : '#000'}
                                bg={showNavBackground || width <= 990 || location.pathname !== '/' ? '#000' : '#fff'}
                            >{quantity}</CartBadge>
                        </button>
                    </Link>
                    <div id='searchBar-container'>
                        <form id='search-form' className='d-flex' onSubmit={(e) => handleSearch(e)}>
                            <input
                                type='search'
                                placeholder='Search Products'
                                className='search-bar-show'
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button className='searchBar-buttons' type="submit">
                                <Search color='#6e6e6e' size={20} />
                            </Button>
                            <Button className='searchBar-buttons' onClick={() => toggleSearchbar()}>
                                <X color='#6e6e6e' size={35} />
                            </Button>
                            {
                                searchResults.length > 0 && (
                                    <ul className='search-resutls'>
                                        {
                                            searchResults.map(product => (
                                                <CustomLI key={`${product._id}search-result`}>
                                                    <div className='details-container'>
                                                        <div className='product-thumpnail' style={{ backgroundImage: `url('${product.images[0]}')` }} />
                                                        <div>
                                                            <div className='lead'>{product.title}</div>
                                                            <div className='line-break' />
                                                            <div style={{ float: 'left' }}>
                                                                {
                                                                    product.colors.map(color => (
                                                                        <div
                                                                            className='color'
                                                                            key={`${color}search-result`}
                                                                            style={{ backgroundColor: `${color}` }}
                                                                        />
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>${product.price}</p>
                                                    <div className='more-details'>
                                                        more details
                                                    </div>
                                                </CustomLI>
                                            ))
                                        }
                                        {
                                            showMoreResults &&
                                            <li className="show-more" onClick={toggleSearchbar}>
                                                <Link to={`/products/products-search?query=${searchQuery}`}>
                                                    Show more results
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                )
                            }
                        </form>
                    </div>
                </div>
            </Container>

            {/* Log in offcanvas */}
            <Offcanvas className='login-offcanvas' show={showLogin} onHide={() => handleCloseLogin()} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Log In</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form>
                        <input placeholder='Enter your email' />
                        <input placeholder='Enter your password' />
                        <div>
                            <a href=''>don't have an account? Sign up</a>
                            <a href=''>forgot password</a>
                        </div>
                        <button onClick={(e) => { e.preventDefault() }}>Log in</button>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Cart Modal */}
            {/* <Modal show={showCart} onHide={handleCloseCart} size='lg' fullscreen>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Cart />
                </Modal.Body>

            </Modal> */}
        </Navbar>
    )
}

export default NavBar