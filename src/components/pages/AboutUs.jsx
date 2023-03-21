import "../pages/home/home.css";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Container = styled.div`
    max-width: 100%;
    height: 100%;
    padding-top: 3.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 2rem;

    @media(max-width: 1366px) {
        gap: 1rem;
    }

    @media(height: 625px) {
      padding-inline: 5rem;
    }
`


const Banner = styled.div`
    width: 100%;
    height: 40vh;
    background-image: ${({ bg }) => `url('${bg}')`};
    background-position: 1px -130px;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    h2 {
        z-index: 10;
    }
    p {
        width: 30%;
        z-index: 10;

        @media(max-width: 992px) {
            width: 50%;
        }

        @media(max-width: 450px) {
            width: 80%;
        }
    }


    @media(max-width: 992px) {
        background-position: 1px -70px;
    }

    @media(max-width: 450px) {
        background-position: 1px -1px;
    }
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 40vh;
    background-color: rgba(0,0,0,0.5);
`

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  padding-top: 1rem;
  padding-bottom: 5rem;

  
  h3 {
    text-align: center;
  }
    
    
  @media(min-width: 1680px) {
      padding-inline: 19%;
  }

  @media(max-width: 1440px) {
      padding-inline: 10%;
  }

  @media(max-width: 1366px) {
      padding-inline: 5rem;
  }

  @media(max-width: 992px) {
      padding-inline: 2rem;
  }

  @media(max-width: 450px) {
    gap: 0;
  }



  div.paragraph {
    position: relative;
    width: 100%;
    min-height: 49vh;
    display: flex;

    img.image {
      width: 50%;
      height: 86%;
      position: absolute;
      z-index: 10;
      background-size: cover;
    }
    
    div.p-text {
      position: absolute;
      width: 55%;
      height: 100%;
      right: 0;
      background: #fafafa;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      text-align: center;
      padding-inline-start: 10%;
      padding-inline-end: 5%;

      p {
        padding-inline: 2rem;
        color: #3c3c3c;
      }
    }
    
    :nth-child(2) {
      img.image {
        right: 0;
      }

      div.p-text {
        left: 0;
        padding-inline-start: 5%;
        padding-inline-end: 10%;
      }
    }

    @media(max-width: 1366px) {
      min-height: 70vh;
      max-height: 80vh;
    }


    @media(min-height: 991px) and (max-width: 992px) {
      min-height: 30vh;
      max-height: 50vh;

      img.image {
        width: 50%;
        height: 100%;
      }

      div.p-text {
        width: 50%;
        padding-inline: 5px;
        font-size: 0.85rem;
      }
      
      :nth-child(2) {
        div.p-text {
          width: 50%;
          padding-inline: 5px;
          font-size: 0.85rem;
        }
      }

      padding-bottom: 1rem;
    }

    @media(max-width: 450px) {
      flex-flow: column;
      height: 50vh;
      margin-bottom: -5rem;

      img.image {
        width: 100%;
        height: 45%;
        position: unset;
      }


      div.p-text {
        position: unset;
        width: 100%;
        height: 35%;
        gap: 5px;
        right: unset;
        padding-inline-start: 0;
        padding-inline-end: 0;
        
        p {
          width: 100%;
          font-size: 0.8rem;
          padding-inline: 6px;
        }
      }
      
      :nth-child(2) {
        div.p-text {
          padding-inline-start: 0;
          padding-inline-end: 0;
        }
      }
    }

  }


  div.our-team {
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;


    div {
      width: 32%;
      height: 45vh;
      display: flex;
      flex-flow: column;
      align-items: center;

      img {
        width: 90%;
        height: auto;
        border-radius: 50%;
        margin-bottom: 2rem;
        
        @media(min-width: 1365px) and (max-width: 1366px) {
          width: 65%;
        }
      }

      @media(max-width: 992px) {
        height: auto;
      }

      /* @media(max-width: 450px) {
        width: 100vw !important;
      } */
    }

    @media(max-width: 450px) {
      overflow-x: scroll;

      div {
        min-width: 100%;
      }
    }
  }
`

const AboutUs = () => {
  return (
    <Container>
      <Banner bg="https://images.pexels.com/photos/3858268/pexels-photo-3858268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <Overlay />
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla de tincidunt risus morbi ultricies est ditae odio mmultrices.
        </p>
      </Banner>

      <h1>BEHIND THE SCENE</h1>

      <Content>
        <div className="paragraph">
          <img className="image" src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/about-us-2-banner-1_570x.jpg?v=1648441420" />
          <div className="p-text">
            <h4>OUR MISSION</h4>
            <p>Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis. Quisque hendrerit nibh an purus...</p>
          </div>
        </div>


        <div className="paragraph">
          <img className="image" src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/our-story-about-2-banner-1_570x.jpg?v=1648441453" />
          <div className="p-text">
            <h4>OUR STORY</h4>
            <p>Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis. Quisque hendrerit nibh an purus...</p>
          </div>
        </div>


        <div className="paragraph">
          <img className="image" src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/our-approach-about-2-banner_570x.jpg?v=1648441432" />
          <div className="p-text">
            <h4>OUR APPROACH</h4>
            <p>Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis. Quisque hendrerit nibh an purus...</p>
          </div>
        </div>



        <h3 className="mt-4">Meet Our Team</h3>

        <div className="our-team">
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/contributor-image-1_370x.jpg?v=1648443126" />
            <h4>Annie.L</h4>
            <p>MANAGING DIRECTOR</p>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/contributor-image-2_370x.jpg?v=1648443135" />
            <h4>Annie.D</h4>
            <p>MANAGING DIRECTOR</p>
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0081/3305/0458/files/contributor-image-3_370x.jpg?v=1648443144" />
            <h4>Annie.C</h4>
            <p>MANAGING DIRECTOR</p>
          </div>
        </div>





      </Content>
    </Container>
  )
}

export default AboutUs


{/* <>
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
</> */}