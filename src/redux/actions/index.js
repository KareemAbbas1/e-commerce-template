import { getProducts } from "./productsActions";


export const handleInitialData = (products) => {
    
    return async dispatch => {
        dispatch(getProducts(products))
    }
};