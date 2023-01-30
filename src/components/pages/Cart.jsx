import styled from "styled-components";
import { BsPlus, BsDash } from "react-icons/bs";
import { XCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";



const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  margin-top: 3.5rem;
  padding: 1rem 1.5rem;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media(min-width: 1450px) {
    padding-inline: 10rem;
  }
  @media(max-width: 600px) {
    flex-direction: column;
    padding: 1rem 0rem;
  }
`

const Items = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 1rem;
  background-color: #fff;
  @media(max-width: 768px) {
    width: 65%;
  }
  @media(max-width: 600px) {
    width: 100%;
    min-height: fit-content;
    padding: 0rem 1rem;
  }
`

const Summary = styled.div`
  width: 30%;
  min-height: 100vh;
  padding: 1rem;
  background-color: #fff;
  @media(max-width: 768px) {
    width: 35%;
  }
  @media(max-width: 600px) {
    width: 100%;
    min-height: fit-content;
    padding: 0rem 1rem;
  }
`

const CartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid #d7d7d7;
  @media(max-width: 539px) {
    h3 {
      border-top: none;
    }
  }
`

const Row = styled.div`
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  @media(max-width: 539px) {
    flex-wrap: wrap;
    height: 10rem;
  }
`

const Product = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 1024px) {
    width: 37%
  }
  @media(max-width: 768px) {
    width: 40%
  }
  @media(max-width: 539px) {
    width: 80%;
    justify-content: flex-start;
  }
`

const ProductImage = styled.div`
  width: 6rem;
  height: 7rem;
  border: 1px solid;
  @media(max-width: 768px) {
    width: 5rem;
    height: 6rem;
  }
  @media(max-width: 539px) {
    width: 4rem;
    height: 4.5rem;
    margin-right: 1rem;
  }
`

const ProductName = styled.h6`
  @media(max-width: 768px) {
    font-size: 0.8rem;
  }
  @media(max-width: 539px) {
    font-size: 1.2rem;
  }
`

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductDetails = styled.div`
  font-size: 0.8rem;
  @media(max-width: 768px) {
    font-size: 0.7rem;
  }
  @media(max-width: 539px) {
    font-size: 1rem;
  }
`

const ColorContainer = styled.span`
  display: inline-flex;
  width: 3rem;
  justify-content: space-between;
  align-items: center;
`

const Color = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: ${props => `${props.bg}`};
  border-radius: 50%;
  @media(max-width: 768px) {
    width: 0.8rem;
    height: 0.8rem;
  }
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductQuantity = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 0.3rem;
`

const Quantity = styled.div`
  width: 2rem;
  border: 0.5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px) {
    width: 1.5rem;
    font-size: 0.8rem;
  }
`

const Counter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0.5px solid;
  &:hover {
    background-color: #d7d7d7;
  }
  @media(max-width: 768px) {
    width: 1.6rem;
  }
`

const ProductPrice = styled.h5`
  @media(max-width: 768px) {
    font-size: 0.9rem;
  }
  @media(max-width: 539px) {
    font-size: 1rem;
    padding-top: 3px;
    margin-bottom: -1px;
  }
`

const DeleteProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0;
  border: none;
  border-radius: 50%;
  &:hover {
    background-color: #d7d7d7;
  }
`

const SummaryRow = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #d7d7d7;
`
const Coupon = styled.input`
  width: 70%;
  padding: 0.6rem;
  border: 0.5px solid;
  @media(max-width: 990px) {
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`

const ApplyCoupon = styled.button`
  width: 30%;
  padding: 0.6rem;
  border: 0.5px solid #000;
  border-left: none;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  transition: all 300ms ease;
  &:hover {
    background-color: #7d7d7d;
  }
  @media(max-width: 990px) {
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`

const TermsConditions = styled.strong`
 font-size: 0.8rem; 
 margin-left: 0.5rem;
 @media(max-width: 990px) {
  font-size: 0.6rem;
 }
`

const Checkout = styled.button`
  width: 100%;
  padding: 0.4rem;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: #000;
  color: #fff;
  transition: all 300ms ease;
  &:disabled {
    background-color: #5f5f5f;
  }
  &:enabled:hover {
    background-color: #7d7d7d;
  }
  @media(max-width: 990px) {
    font-size: 1rem;
  }
`

const ContinueShopping = styled.button`
  width: 100%;
  padding: 0.4rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  background-color: transparent;
  color: #000;
  transition: all 300ms ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media(max-width: 990px) {
    font-size: 1rem;
  }
`

const Cart = () => {

  // Enable Checkout
  const handleCheckout = () => {
    let checker = document.getElementById('checkme');
    if (checker.checked) {
      document.getElementById('checkout').disabled = false;
    } else {
      document.getElementById('checkout').disabled = true;
    }
  };

  return (
    <Container>
      <Items>
        <CartTitle>
          <h3>Shopping Cart</h3>
          <h6>2 Items</h6>
        </CartTitle>


        <Row>
          <Product>
            <ProductImage />
            <ProductDescription>
              <ProductName>Zara Jacket</ProductName>
              <ProductDetails>
                <ColorContainer>Black <Color bg='black' /></ColorContainer> / XL
              </ProductDetails>
            </ProductDescription>
          </Product>

          <DataContainer>
            <div style={{ fontSize: '0.8rem', marginBottom: '3px' }}>Quantity</div>
            <ProductQuantity>
              <Counter><BsDash size={20} /></Counter>
              <Quantity>1</Quantity>
              <Counter><BsPlus size={20} /></Counter>
            </ProductQuantity>
          </DataContainer>

          <DataContainer>
            <div style={{ fontSize: '0.8rem' }}>Total</div>
            <ProductPrice>
              $20.00
            </ProductPrice>
          </DataContainer>

          <DataContainer>
            <div style={{ fontSize: '0.8rem' }}>Remove</div>
            <DeleteProduct><XCircle size={25} /></DeleteProduct>
          </DataContainer>
        </Row>

        <Row>
          <Product>
            <ProductImage />
            <ProductDescription>
              <ProductName>H&M Jeans</ProductName>
              <ProductDetails>
                <ColorContainer>Blue <Color bg='blue' /></ColorContainer> / M
              </ProductDetails>
            </ProductDescription>
          </Product>

          <DataContainer>
            <div style={{ fontSize: '0.8rem', marginBottom: '3px' }}>Quantity</div>
            <ProductQuantity>
              <Counter><BsDash size={20} /></Counter>
              <Quantity>1</Quantity>
              <Counter><BsPlus size={20} /></Counter>
            </ProductQuantity>
          </DataContainer>

          <DataContainer>
            <div style={{ fontSize: '0.8rem' }}>Total</div>
            <ProductPrice>
              $18.00
            </ProductPrice>
          </DataContainer>

          <DataContainer>
            <div style={{ fontSize: '0.8rem' }}>Remove</div>
            <DeleteProduct><XCircle size={25} /></DeleteProduct>
          </DataContainer>
        </Row>

      </Items>

      <Summary>
        <CartTitle>
          <h3>Summary</h3>
        </CartTitle>

        <SummaryRow>
          <h6>2 Items</h6>
          <h6>$38.00</h6>
        </SummaryRow>

        <SummaryRow>
          <h6>Shipping</h6>
          <h6>$05.00</h6>
        </SummaryRow>

        <label for='coupon'><h6 style={{ marginTop: '1rem', marginBottom: '0' }}>Have a Coupon?</h6></label>
        <SummaryRow>
          <form style={{ width: '100%' }}>
            <Coupon type='text' placeholder='Enter Coupon Code' id='coupon' />
            <ApplyCoupon type="submit">Apply</ApplyCoupon>
          </form>
        </SummaryRow>

        <SummaryRow>
          <h4>Total</h4>
          <h4>$43.00</h4>
        </SummaryRow>

        <input type="checkbox" id='checkme' onChange={handleCheckout} style={{ margin: '1rem 0' }} />
        <TermsConditions>
          I agree with the <Link to="/terms-and-conditions" style={{ color: '#000' }}>Terms & Conditions</Link>
        </TermsConditions>

        <Link to="/shipping-address">
          <Checkout type="submit" name="checkout" id="checkout" value="Checkout" disabled={true}>Checkout</Checkout>
        </Link>

        <ContinueShopping>Continue Shopping</ContinueShopping>
      </Summary>
    </Container>
  )
}

export default Cart