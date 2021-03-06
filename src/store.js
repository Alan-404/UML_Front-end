import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux"

import {
    loginAccountReducer, 
    getUserTokenReducer, 
    addEmployeeReducer, 
    changeStatusReducer, 
    editEmployeeReducer,
    getUserByIdReducer,
    getAllUsersReducer,
    addUserReducer,
    editUserReducer,
    checkTokenReducer
} from './behaviors/reducers/user'
import { 
    getProductsReducer,
    editProductReducer,
    getProductByIdReducer,
    getProductByPageReducer,
    addProductReducer,
    deleteProductReducer,
    searchProductsReducer
} from "./behaviors/reducers/product";


import {
    addOrderReducer,
    deleteOrderReducer,
    editOrderReducer,
    getAllOrderReducer,
    addOrderUserReducer,
    getOrderInfoReducer,
    getAllOrderUserReducer,
    getInfoOrderManagerReducer
} from "./behaviors/reducers/order"

import {
    addCartReducer,
    changeNumberProductReducer,
    delelteCartReducer,
    getCartReducer,
    getCartForOrderReducer
} from "./behaviors/reducers/cart"

import {
    storeDetailReducer,
    storeBrandReducer
} from './behaviors/reducers/constant'

const reducers = combineReducers({
    //user
    loginAccountReducer,
    getProductsReducer,
    getUserTokenReducer,
    addEmployeeReducer,
    changeStatusReducer,
    editEmployeeReducer,
    getUserByIdReducer,
    getAllUsersReducer,
    addUserReducer,
    editUserReducer,
    checkTokenReducer,
    //product
    editProductReducer,
    getProductByIdReducer,
    getProductByPageReducer,
    addProductReducer,
    deleteProductReducer,
    searchProductsReducer,
    // order
    addOrderReducer,
    deleteOrderReducer,
    editOrderReducer,
    getAllOrderReducer,
    addOrderUserReducer,
    getOrderInfoReducer,
    getAllOrderUserReducer,
    getInfoOrderManagerReducer,
    // cart
    addCartReducer,
    changeNumberProductReducer,
    delelteCartReducer,
    getCartReducer,
    getCartForOrderReducer,
    // another
    storeDetailReducer,
    storeBrandReducer
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store