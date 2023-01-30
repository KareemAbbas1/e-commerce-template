import background from "../../assets/aboutus.jpg";
import { Container, Card, Image, Button } from "react-bootstrap";
import "../pages/home/home.css";
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <>
      <div
        style={{
          maxWidth: '100vw',
          height: '100vh',
          background: `url(${background})`,
          backgroundSize: 'cover',
          color: '#fff',
          textAlign: 'center'
        }}
        className='container d-flex align-items-center justify-content-between'
      >
        <div className="w-50"></div>
        <Container
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5rem' }}
          className="pe-5 w-50">
          <h3 style={{ width: '15rem', borderBottom: '1px solid', marginBottom: '1.2rem', paddingBottom: '0.6rem' }}>We Are Egy Tech</h3>
          <p style={{ fontSize: '1.2rem' }}>
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abo
            This is about us page template, write here the story you want to tell abotyour company.
          </p>
        </Container>
      </div>

      <section
        style={{ maxWidth: '100vw', height: 'auto', marginBottom: '-4rem' }}
        className="container d-grid align-items-center testimonials py-5">
        <h2>Our Team</h2>
        <p className="mt-2">rinting and typesetting industry. Lorem rinting and typesetting industry. Lorem</p>
        <Container className="d-flex justify-content-between testimonials-cards mt-4">
          <Card className="testimonials-card d-flex align-items-center mb-5">
            <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80" />
            <Card.Body>
              <Card.Text>
                <h5>John Smith</h5>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="testimonials-card d-flex align-items-center mb-5">
            <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1541499768294-44cad3c95755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
            <Card.Body>
              <Card.Text>
                <h5>Sara Edo</h5>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="testimonials-card d-flex align-items-center mb-5">
            <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Card.Body>
              <Card.Text>
                <h5>Petter Kendy</h5>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
      <div className='w-100 d-flex justify-content-center mb-5'>
        <Link to="/contact-us">
          <Button
            style={{ width: '10rem', color: '#fff' }}
            variant='primary'
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </>
  )
}

export default AboutUs