import * as types from '../actions/actionsTypes';


const products = (state = {}, action) => {

    switch (action.type) {

        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payLoad,
            };

        default:
            return state;
    }
};

export default products;