import {
    REQUEST_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL
} from '../../common/constants'


export const getProductsReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_PRODUCTS:
            return {loadingGetProducts: true}
        case GET_PRODUCTS_SUCCESS:
            return {loadingGetProducts: false, success: true,  products: action.payload}
        case GET_PRODUCTS_FAIL:
            return {loadingGetProducts: false, success: false}
        default:
            return state
    }
}