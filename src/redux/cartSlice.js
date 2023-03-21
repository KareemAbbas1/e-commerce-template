import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {

            const newProduct = action.payload;
            let productExist = false;
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === newProduct._id) {
                    productExist = true;
                    break;
                }
            }

            // add new product or if product exists, increase quantity
            if (productExist) {
                state.products.map(p => p._id === newProduct._id && (p.quantity += 1))
            } else {
                state.quantity += 1; /* cart quantity */
                state.products.push(newProduct);
            }

            productExist 
                ? state.total += action.payload.price /* Product quantity coming from ui */
                : state.total += action.payload.price * action.payload.quantity; /* Product quantity coming from ui */
        },


        removeProduct: (state, action) => {

            const currentProduct = action.payload;
            let productExist = false;
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i]._id === currentProduct._id) {
                    productExist = true;
                    break;
                }
            }

            // remove product if it exists
            if (state.products.length > 0 && productExist) {
                state.products.map(p => {
                    if (p._id === currentProduct._id && p.quantity > 1) {
                        p.quantity -= 1
                    } else if (p._id === currentProduct._id && p.quantity === 1) {
                        console.log(state.products.indexOf(currentProduct))
                        state.products.splice(state.products.indexOf(p), 1);
                        state.quantity -= 1;
                    } else {
                        null
                    }
                })
            } else {
                state.quantity > 0 && (state.quantity -= 1); /* cart quantity */
            }

            action.payload.quantity > 0 && (state.total -= action.payload.price); /* Product quantity coming from ui */
        },

        clearProduct: (state, action) => {
            state.products.splice(state.products.indexOf(action.payload), 1);
            state.total -= action.payload.price * action.payload.quantity;
            state.quantity -= 1;
        }
    },
});


export const { addProduct, removeProduct, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;



        // const productExist = state.products.includes(p => p._id === newProduct._id);
        // state.products.includes(action.payload) !== true ? state.quantity += 1 : product.quantity +=1;
        // state.products.length > 0
        //     ? state.products.map(product => {
        //         action.payload._id === product._id
        //             ? (product.quantity += 1)
        //             : state.quantity += 1;
        //     })
        //     : state.quantity +=1;
        // state.quantity += 1; /* Cart quantity number */

        // if (productExist) {
        //     state.products.map(p => p._id === productExist._id ? newProduct : p)
        // } else {
        //     state.products.push(newProduct)
        // }
        // state.products.includes(action.payload) !== true
        // ? state.products[action.payload].quantity +=1
        // && state.products.push(action.payload);

        // state.products.length > 0
        //     ? state.products.map(product => {
        //         action.payload._id === product._id
        //             ? state.products
        //             : state.products.push(action.payload)
        //     })
        //     : state.products.push(action.payload);
        // state.products.push(action.payload);

        // console.log(state.products.includes(action.payload));