// import { useEffect, useState } from "react";
import styled from 'styled-components';
import { CaretUp } from 'react-bootstrap-icons';


const SideBar = styled.div`
  width: 20vw;
  height: 100%;
  z-index: 10;
  @media(max-width: 990px) {
    width: 100%;
    padding: 1rem;
    overflow-y: scroll;
  }
`
const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(207, 207, 207);
  padding: 0.5rem 0;
`
const AccordionPanel = styled.div`
  display: block;
  overflow: hidden;
`
const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 1rem 0;
`
const Color = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const ColorInner = styled.div`
    width: 85%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => `${props.bg}`};
`
const SizeContainer = styled.div`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(207, 207, 207);
`

const FiltersBar = () => {

    // Handle toggle filter
    const toggleFilter = (panelID, arrowID) => {
        const accordion = document.getElementById(panelID);
        const arrow = document.getElementById(arrowID);
        if (accordion.style.display === "block") {
            arrow.style.transform = "rotate(-0.5turn)";
            accordion.style.display = "none";
        } else {
            arrow.style.transform = "rotate(0)";
            accordion.style.display = "block";
        };
    };


    // Handle color filter
    const colors = ["black", "white", "blue", "red", "yellow", "green", "brown", "aqua"];

    // Handle size filter
    const sizes = ["XS", "S", "M", "L", "XL"];


    return (
        <SideBar>
            <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid rgb(207, 207, 207)', paddingBottom: '0.5rem' }}>Filters</h3>

            <Button onClick={() => toggleFilter("product-type-filter", "product-type-arrow")}>
                <h5>Product Type</h5>
                <div id='product-type-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='product-type-filter'>
                <input style={{ cursor: 'pointer' }} type='checkbox' id='jacket' name='jacket' value='jacket' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='jacket'><h6>Jacket</h6></label><br />

                <input style={{ cursor: 'pointer' }} type='checkbox' id='shoes' name='shoes' value='shoes' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='shoes'><h6>Shoes</h6></label><br />

                <input style={{ cursor: 'pointer' }} type='checkbox' id='jeans' name='jeans' value='jeans' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='jeans'><h6>Jeans</h6></label>
            </AccordionPanel>

            <Button onClick={() => toggleFilter("color-filter", "color-arrow")}>
                <h5>Color</h5>
                <div id='color-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='color-filter'>
                <ColorsContainer>
                    {
                        colors.map(color => (
                            <article>
                                <input type='checkbox' id={color} name={color} value={color} />
                                <Color >
                                    <ColorInner bg={color} />
                                </Color>
                            </article>
                        ))
                    }
                </ColorsContainer>
            </AccordionPanel>

            <Button onClick={() => toggleFilter("size-filter", "size-arrow")}>
                <h5>Size</h5>
                <div id='size-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='size-filter'>
                <ColorsContainer>
                    {
                        sizes.map(size => (
                            <article>
                                <input type='checkbox' id={size} name={size} value={size} />
                                <SizeContainer>{size}</SizeContainer>
                            </article>
                        ))
                    }
                </ColorsContainer>
            </AccordionPanel>

            <Button onClick={() => toggleFilter("price-filter", "price-arrow")}>
                <h5>Price</h5>
                <div id='price-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='price-filter'>
                <form>
                    <input style={{ cursor: 'pointer' }} type='radio' id='on-sale' name='price-filter' value='on-sale' />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='on-sale'><h6>On Sale</h6></label><br />

                    <input style={{ cursor: 'pointer' }} type='radio' id='low-to-high' name='price-filter' value='low-to-high' />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='low-to-high'><h6>Low to High</h6></label><br />

                    <input style={{ cursor: 'pointer' }} type='radio' id='high-to-low' name='price-filter' value='high-to-low' />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='high-to-low'><h6>High to Low</h6></label><br />
                </form>
            </AccordionPanel>

            <Button onClick={() => toggleFilter("brand-filter", "brand-arrow")}>
                <h5>Brand</h5>
                <div id='brand-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='brand-filter'>
                <input style={{ cursor: 'pointer' }} type='checkbox' id='zara' name='zara' value='zara' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='zara'><h6>Zara</h6></label><br />

                <input style={{ cursor: 'pointer' }} type='checkbox' id='h&m' name='h&m' value='h&m' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='h&m'><h6>H&M</h6></label><br />

                <input style={{ cursor: 'pointer' }} type='checkbox' id='american-eagle' name='american-eagle' value='american-eagle' />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} for='american-eagle'><h6>American Eagle</h6></label>
            </AccordionPanel>
        </SideBar>
    )
}

export default FiltersBar