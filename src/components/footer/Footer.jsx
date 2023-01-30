import './footer.css';
import { GeoAltFill, ChatSquareDots, Envelope } from 'react-bootstrap-icons';
import LogoWhite from '../../assets/LogoWhite.png'
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Image = styled.img`
    border-radius: ${props => `${props.borderRadius}`};
    width: 2rem;
    height: auto;
    margin-left: 0.5rem;
    transition: 150ms ease;
    &:hover {
    border: 2px solid ${props => `${props.borderColor}`};
    transform: translateY(-5px);
    }
`

const Footer = () => {
    return (
        <section className="footer">
            <div className='news-letter'>
                <div className='d-flex flex-column align-items-center'>
                    <h3 className='mb-4'>Subscribe to Get Our Latest Offers</h3>
                    <div className='d-flex align-items-center'>
                        <input />
                        <button><h4>Subscribe</h4></button>
                    </div>
                </div>
            </div>
            <div className='info-container'>
                <div>
                    <img src={LogoWhite} alt='logo' style={{ width: '5.5rem', marginLeft: '-0.6rem' }} />
                    <div className='d-flex'>
                        <GeoAltFill size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            685 Market Street<br />
                            San Francisco, CA 94105,<br />
                            United States
                        </p>
                    </div>
                    <div className='d-flex'>
                        <ChatSquareDots size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            Text: (091)-123-9665<br />
                        </p>
                    </div>
                    <div className='d-flex'>
                        <Envelope size={25} style={{ marginRight: '1rem' }} />
                        <p className='footer-p'>
                            email@domain.com
                        </p>
                    </div>
                    <div className='d-flex align-items-start icons-container'>
                        <p className='follow-us'>Follow us:</p>
                        <div className='d-flex justify-content-between w-50'>
                            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                                <Image borderColor="#4267B2" borderRadius="50%" src={facebook} />
                            </a>
                            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                                <Image borderColor="#00acee" borderRadius="50%" src={twitter} />
                            </a>
                            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                                <Image borderColor="#8a3ab9" borderRadius="10px" src={instagram} style={{ marginRight: '0' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='t-header'>Shop By</th>
                                <th className='t-header'>Company</th>
                                <th className='t-header'>Customer Service</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='first-row'>
                                <td><Link to="/products">Women</Link></td>
                                <td><Link to="/products">About Us</Link></td>
                                <td><Link to="/products">Contact Us</Link></td>
                            </tr>
                            <tr className='tabel-row'>
                                <td><Link to="/products">Men</Link></td>
                                <td><Link to="/products">Privacy Policy</Link></td>
                                <td><Link to="/products">Shipping & Returns</Link></td>
                            </tr>
                            <tr className='tabel-row'>
                                <td><Link to="/products">Jackets</Link></td>
                                <td><Link to="/products">Terms & Condition</Link></td>
                                <td><Link to="/products">FAQs</Link></td>
                            </tr>
                            <tr className='tabel-row'>
                                <td><Link to="/products">Shoes</Link></td>
                            </tr>
                            <tr className='tabel-row'>
                                <td><Link to="/products">Jeans</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{marginTop: '1rem'}}>All Design & Development Copyright, Rights Reserved to <a href='https://www.linkedin.com/in/kareem-abbas-715868210/' target="_blank" rel='noreferrer'>Kareem Abbas</a></p>
                </div>
            </div>
        </section>
    )
}

export default Footer
