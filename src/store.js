import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux"

import {loginAccountReducer} from './behaviors/reducers/user'
import { getProductsReducer } from "./behaviors/reducers/product";

const reducers = combineReducers({
    loginAccountReducer,
    getProductsReducer
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store