import * as types from "./actionsTypes";
import Axios from "axios";


export const getProducts = products => dispatch => {

    Axios
        .get('/api/products')
        .then(res =>
            dispatch({
                type: types.GET_PRODUCTS,
                payLoad: res.data   
            })
        )
};