import {
    REQUEST_ADD_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    REQUEST_CHANGE_NUMBER_PRODUCT,
    CHANGE_NUMBER_PRODUCT_SUCCESS,
    CHANGE_NUMBER_PRODUCT_FAIL,
    REQUEST_DELETE_CART,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    REQUEST_GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    REQUEST_GET_CART_FOR_ORDER,
    GET_CART_FOR_USER_ORDER_SUCCESS,
    GET_CART_FOR_USER_ORDER_FAIL
} from '../../common/constants'


export const addCartReducer  = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_CART:
            return {loadingAddCart: true}
        case ADD_CART_SUCCESS:
            return {loadingAddCart: false, success: true}
        case ADD_CART_FAIL:
            return {loadingAddCart: false, success: false}
        default:
            return state
    }
}

export const changeNumberProductReducer = (state = {}, action) => {
    switch(action.type){
        case REQUEST_CHANGE_NUMBER_PRODUCT:
            return {loadingChangeNumberProduct: true}
        case CHANGE_NUMBER_PRODUCT_SUCCESS:
            return {loadingChangeNumberProduct: false, success: true}
        case CHANGE_NUMBER_PRODUCT_FAIL:
            return {loadingChangeNumberProduct: false, success: false}
        default:
            return state
    }
}

export const delelteCartReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_DELETE_CART:
            return {loadingDeleteCart: true}
        case DELETE_CART_SUCCESS:
            return {loadingDeleteCart: false, success: true}
        case DELETE_CART_FAIL:
            return {loadingDeleteCart: false, success: false}
        default:
            return state
    }
}



export const getCartReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_CART:
            return {loadingGetCart: true}
        case GET_CART_SUCCESS:
            return {loadingGetCart: false, success: true, cart: action.payload}
        case GET_CART_FAIL:
            return {loadingGetCart: false, success: true}
        default:
            return state
    }
}


export const getCartForUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_CART_FOR_ORDER:
            return {loadingGetCart: true}
        case GET_CART_FOR_USER_ORDER_SUCCESS:
            return {loadingGetCart: false, success: true, cart: action.payload}
        case GET_CART_FOR_USER_ORDER_FAIL:
            return {loadingGetCart: false, success: false}
        default:
            return state
    }
}
