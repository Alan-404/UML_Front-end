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
    editUserReducer
} from './behaviors/reducers/user'
import { 
    getProductsReducer,
    editProductReducer,
    getProductByIdReducer,
    addProductReducer,
    deleteProductReducer,
    searchProductsReducer
} from "./behaviors/reducers/product";

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
    //product
    editProductReducer,
    getProductByIdReducer,
    addProductReducer,
    deleteProductReducer,
    searchProductsReducer
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store