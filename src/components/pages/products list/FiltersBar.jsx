// import { useEffect, useState } from "react";
import styled from 'styled-components';
import { CaretUp } from 'react-bootstrap-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SideBar = styled.div`
  width: 20vw;
  height: 100%;
  position: sticky;
  top: 5rem;
  background-color: #fff;
  /* left: 3.5rem; */
  margin-top: -3rem;
  transform: scale(0.92);
  transition: all 0.5s ease;
  visibility: visible;
  /* padding-bottom: 10rem; */
  
  @media(max-width: 992px) {
      width: 80vw;
      min-height: 115vh;
      padding-top: 1rem;
      padding-bottom: 5rem;
      padding-inline: 1.8rem 1rem;
      overflow-y: scroll;
      left: -1.8rem;
      top: 0;
      margin-top: -2.45rem;
      position: fixed;
      /* display: none; */
      transform: translateX(-130%);
      z-index: 1100;
      /* transform: ${({ openFiltersBar }) => !openFiltersBar ? "translateX(-130%)" : "translateX(0%) scale(0.92)"}; */

      h3 {
        border: none;
      }
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

const ResetFiltersButton = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding-block: 10px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all 300ms ease;

    &:hover {
        background: #000;
        color: #fff;
    }
`

const FiltersBar = ({ setSort, setFilters, filters, width, closeFiltersBar }) => {

    const [openFiltersBar, setOpenFiltersBar] = useState(false);
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
    const colors = ["Black", "White", "Blue", "Red", "Yellow", "Green", "Brown", "Aqua"];

    // Handle size filter
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];


    // filteration
    const [brandsArray, setBrandsArray] = useState([]);
    const [colorsArray, setColorsArray] = useState([]);
    const [typesArray, setTypesArray] = useState([]);
    const [sizesArray, setSizesArray] = useState([]);

    const object = {};

    const handleCheckBox = (e, value, name, array, setArrayFunc) => {
        let newArr, elIndex;

        object[name] = array;

        if (e.target.checked === true) {
            newArr = [...array, value];
            setArrayFunc(newArr)
            object[name] = [...object[name], value];
        } else {
            elIndex = array.indexOf(value)

            if (elIndex > -1) {
                array.splice(elIndex, 1);
                newArr = [...array];
                setArrayFunc(newArr);
            }
        }
        setFilters(filters => {
            return { ...filters, [Object.keys(object)]: Object.values(object).join() }
        });
        width <= 992 && closeFiltersBar();
        document.getElementById("banner").scrollIntoView();
    };



    // reset filters
    const handleResetFilters = () => {
        setFilters({});
        setSort({});
        Array.from(document.getElementsByClassName("filter")).map(el => {
            if (el.checked === true) {
                el.checked = false
            }
        });
        width <= 992 && closeFiltersBar();
        document.getElementById("banner").scrollIntoView();
    };


    return (
        <SideBar width={width} openFiltersBar={openFiltersBar} id="filters-bar">
            <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid rgb(207, 207, 207)', paddingBottom: '0.5rem' }}>Filters</h3>

            <Button onClick={() => toggleFilter("product-type-filter", "product-type-arrow")}>
                <h5>Product Type</h5>
                <div id='product-type-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='product-type-filter'>
                <input
                    className='filter'
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='jacket'
                    name='jacket'
                    value='Coat'
                    onChange={(e) => handleCheckBox(e, e.target.value, "types", typesArray, setTypesArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='jacket'><h6>Jacket</h6></label><br />

                <input
                    className='filter'
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='shoes'
                    name='shoes'
                    value='Shoes'
                    onChange={(e) => handleCheckBox(e, e.target.value, "types", typesArray, setTypesArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='shoes'><h6>Shoes</h6></label><br />

                <input
                    className='filter' 
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='jeans'
                    name='jeans'
                    value='Jeans'
                    onChange={(e) => handleCheckBox(e, e.target.value, "types", typesArray, setTypesArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='jeans'><h6>Jeans</h6></label>
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
                            <article key={uuidv4()}>
                                <input
                                    className='filter'  type='checkbox' id={color} name={color} value={color} onChange={(e) => handleCheckBox(e, e.target.value, "colors", colorsArray, setColorsArray)} />
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
                            <article key={uuidv4()}>
                                <input
                                    className='filter'  type='checkbox' id={size} name={size} value={size} onChange={(e) => handleCheckBox(e, e.target.value, "sizes", sizesArray, setSizesArray)} />
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
                    <input
                        className='filter' 
                        style={{ cursor: 'pointer' }}
                        type='radio'
                        id='on-sale'
                        name='price-filter'
                        value='on-sale'
                        onChange={(e) => {
                            e.target.checked && setSort(e.target.value);
                            width <= 992 && closeFiltersBar();
                            document.getElementById("banner").scrollIntoView();
                        }}
                    />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='on-sale'><h6>On Sale</h6></label><br />

                    <input
                        className='filter' 
                        style={{ cursor: 'pointer' }}
                        type='radio'
                        id='low-to-high'
                        name='price-filter'
                        value='low-to-high'
                        onChange={(e) => {
                            e.target.checked && setSort(e.target.value);
                            width <= 992 && closeFiltersBar();
                            document.getElementById("banner").scrollIntoView();
                        }}
                    />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='low-to-high'><h6>Low to High</h6></label><br />

                    <input
                        className='filter' 
                        style={{ cursor: 'pointer' }}
                        type='radio'
                        id='high-to-low'
                        name='price-filter'
                        value='high-to-low'
                        onChange={(e) => {
                            e.target.checked && setSort(e.target.value);
                            width <= 992 && closeFiltersBar();
                            document.getElementById("banner").scrollIntoView();
                        }}
                    />
                    <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='high-to-low'><h6>High to Low</h6></label><br />
                </form>
            </AccordionPanel>

            <Button onClick={() => toggleFilter("brand-filter", "brand-arrow")}>
                <h5>Brand</h5>
                <div id='brand-arrow' className='arrow'>
                    <CaretUp />
                </div>
            </Button>
            <AccordionPanel id='brand-filter'>
                <input
                    className='filter' 
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='zara'
                    name='zara'
                    value='Zara'
                    onChange={(e) => handleCheckBox(e, e.target.value, "brands", brandsArray, setBrandsArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='zara'><h6>Zara</h6></label><br />

                <input
                    className='filter' 
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='h&m'
                    name='h&m'
                    value='H-M'
                    onChange={(e) => handleCheckBox(e, e.target.value, "brands", brandsArray, setBrandsArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='h&m'><h6>H&M</h6></label><br />

                <input
                    className='filter' 
                    style={{ cursor: 'pointer' }}
                    type='checkbox'
                    id='american-eagle'
                    name='american-eagle'
                    value='American-Eagle'
                    onChange={(e) => handleCheckBox(e, e.target.value, "brands", brandsArray, setBrandsArray)}
                />
                <label style={{ margin: '0.5rem 1rem', cursor: 'pointer' }} htmlFor='american-eagle'><h6>American Eagle</h6></label>
            </AccordionPanel>
            <ResetFiltersButton onClick={handleResetFilters}
            >
                Reset Filters
            </ResetFiltersButton>
        </SideBar>
    )
}

export default FiltersBar