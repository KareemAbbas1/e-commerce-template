import styled from "styled-components";
import CheckoutSteps from "../CheckoutSteps";
import { Link } from "react-router-dom";


const Container = styled.div`
    max-width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: center;
`

const Title = styled.h2`
    text-align: center;
    margin-top: -1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid #d7d7d7;
`

const Form = styled.form`
    width: 50vw;

    @media(max-width: 450px) {
        width: 95%;
    }
`

const Input = styled.input`
    width: fit-content;
    margin-right: 0.5rem;
    padding: 0.4rem;
    cursor: pointer;
`

const SmallContainer = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid #d7d7d7;
`

const PlaceOrder = styled.button`
    margin-top: 0.5rem;
    padding: 0.4rem;
    background-color: #000;
    color: #fff;
    font-weight: 500;
    transition: all 500ms ease;

    &:hover {
        background-color: #7f7f7f;
        border-color: #7f7f7f;
    }
`

const EditAddres = styled.button`
    margin-top: 0.5rem;
    padding: 0.4rem;
    background-color: transparent;
    font-weight: 500;
    transition: all 500ms ease;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const PaymentMethod = () => {
    return (
        <div style={{ margin: '3.5rem 0rem', maxHeight: '100vh', maxWidth: '100vw' }}>
            <CheckoutSteps step1 step2 step3 />
            <Container>
                <Form>
                    <Title>Choose Payment Method</Title>

                    <Input type='radio' id='cash-on-delivery' name='payment-method' />
                    <label for='cash-on-delivery' style={{ cursor: 'pointer' }}>
                        <h5>Cash On Delivery(only within Egypt)</h5>
                    </label><br /><br />

                    <Input type='radio' id='paypal' name='payment-method' />
                    <label for='paypal' style={{ cursor: 'pointer' }}>
                        <h5>PayPal</h5>
                    </label><br /><br />

                    <Input type='radio' id='credit-card' name='payment-method' />
                    <label for='credit-card' style={{ cursor: 'pointer' }}>
                        <h5>Credit or Debit Card</h5>
                    </label><br />

                    <SmallContainer>
                        <Link to='/shipping-address'>
                            <EditAddres>Back to Address</EditAddres>
                        </Link>

                        <Link to='/place-order'>
                            <PlaceOrder>Place Order</PlaceOrder>
                        </Link>
                    </SmallContainer>
                </Form>

            </Container>
        </div>
    )
}

export default PaymentMethod