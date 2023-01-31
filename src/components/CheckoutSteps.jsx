import styled from "styled-components";

const Row = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    @media(min-width: 1450px) {
        padding-inline: 10rem;
    }

    div {
        width: 100%;
        margin-top: 1rem;
        padding: 0.5rem 0.5rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #d7d7d7;
    }

    div span {
        display: flex;
        align-items: center;
    }

    div span.badge {
        width: 1.3rem;
        height: 1.3rem;
        margin: 0px;
        margin-right: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #000;
        color: #fff;
    }

    div span.not-checked {
        display: none;
    }

    div span.checked {
        display: none;
        margin-left: 0.5rem;
        font-weight: 700;
    }

    div.active {
        border-bottom: 2px solid #000;
        border-right: 5px solid #fff;

        span.checked {
            display: block;
        }
    }

    @media(max-width: 450px) {
        font-size: 13px;
    }
`




const CheckoutSteps = (props) => {
    return (
        <Row>
            <div className={props.step1 ? 'active' : ''}>
                <span>
                    <span className="badge">1</span>
                    Sign In
                    <span className={props.step2 ? "checked" : 'not-checked'}>
                        &#10003;
                    </span>
                </span>
            </div>
            <div className={props.step2 ? 'active' : ''}>
                <span>
                    <span className="badge">2</span>
                    Shipping Address
                    <span className={props.step3 ? "checked" : 'not-checked'}>
                        &#10003;
                    </span>
                </span>
            </div>
            <div className={props.step3 ? 'active' : ''}>
                <span>
                    <span className="badge">3</span>
                    Payment Method
                    <span className={props.step4 ? "checked" : 'not-checked'}>
                        &#10003;
                    </span>
                </span>
            </div>
            <div className={props.step4 ? 'active' : ''}>
                <span>
                    <span className="badge">4</span>
                    Place Order
                    <span className={props.step5 ? "checked" : 'not-checked'}>
                        &#10003;
                    </span>
                </span>
            </div>
        </Row>
    )
}

export default CheckoutSteps