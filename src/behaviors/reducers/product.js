import {
    REQUEST_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    REQUEST_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    REQUEST_GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    REQUEST_GET_PRODUCT_BY_PAGE,
    GET_PRODUCT_BY_PAGE_SUCCESS,
    GET_PRODUCT_BY_PAGE_FAIL,
    REQUEST_ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REQUEST_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    REQUEST_SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL
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

export const editProductReducer = (state = {}, action) => {
    switch(action.type){
        case REQUEST_EDIT_PRODUCT:
            return {loadingEditProduct: true}
        case EDIT_PRODUCT_SUCCESS:
            return {loadingEditProduct: false, success: true}
        case EDIT_PRODUCT_FAIL:
            return {loadingEditProduct: false, success: false}
        default:
            return state
    }
}

export const getProductByIdReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_PRODUCT_BY_ID:
            return {loadingGetProductById: true}
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {loadingGetProductById: false, success: true, product: action.payload}
        case GET_PRODUCT_BY_ID_FAIL:
            return {loadingGetProductById: false, success: false}
        default:
            return state
    }
}

export const getProductByPageReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_PRODUCT_BY_PAGE:
            return {loadingGetProductByPage: true}
        case GET_PRODUCT_BY_PAGE_SUCCESS:
            return {loadingGetProductByPage: false, success: true, productsPage: action.payload}
        case GET_PRODUCT_BY_PAGE_FAIL:
            return {loadingGetProductByPage: false, success: false}
        default:
            return state
    }
}

export const addProductReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_PRODUCT:
            return {loadingAddProduct: true}
        case ADD_PRODUCT_SUCCESS:
            return {loadingAddProduct: false, success: true}
        case ADD_PRODUCT_FAIL:
            return {loadingAddProduct: false, success: false}
        default:
            return state
    }
}

export const deleteProductReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_DELETE_PRODUCT:
            return {loadingDeleteProduct: true}
        case DELETE_PRODUCT_SUCCESS:
            return {loadingDeleteProduct: false, success: true}
        case DELETE_PRODUCT_FAIL:
            return {loadingDeleteProduct: false, success: false}
        default:
            return state
    }
}

export const searchProductsReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_SEARCH_PRODUCT:
            return {loadingSearchProduct: true}
        case SEARCH_PRODUCT_SUCCESS:
            return {loadingSearchProduct: false, success: true, products: action.payload}
        case SEARCH_PRODUCT_FAIL:
            return {loadingSearchProduct: false, success: false}
        default:
            return state
    }
}

