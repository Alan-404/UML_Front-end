import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux"

import {loginAccountReducer} from './behaviors/reducers/user'

const reducers = combineReducers({
    loginAccountReducer
})

const middleware = [thunk]

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store