import {
    REQUEST_ADD_ORDER,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL,
    REQUEST_DELETE_ORDER,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    REQUEST_EDIT_ORDER,
    EDIT_ORDER_SUCCESS,
    EDIT_ORDER_FAIL,
    REQUEST_GET_ALL_ORDER,
    GET_ALL_ORDER_SUCCES,
    GET_ALL_ORDER_FAIL,
    REQUEST_ADD_ORDER_USER,
    ADD_ORDER_USER_SUCCESS,
    ADD_ORDER_USER_FAIL,
    REQUEST_GET_ORDER_INFO,
    GET_ORDER_INFO_SUCCESS,
    GET_ORDER_INFO_FAIL,
    REQUEST_GET_ALL_ORDER_USER,
    GET_ALL_ORDER_USER_SUCCESS,
    GET_ALL_ORDER_USER_FAIL
} from '../../common/constants'



export const addOrderReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_ORDER:
            return {loadingAddOrder: true}
        case ADD_ORDER_SUCCESS:
            return {loadingAddOrder:false, success: true}
        case ADD_ORDER_FAIL:
            return {loadingAddOrder: false, success: false}
        default:
            return state
    }
}

export const deleteOrderReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_DELETE_ORDER:
            return {loadingDeleteOrder: true}
        case DELETE_ORDER_SUCCESS:
            return {loadingDeleteOrder: false, success: true}
        case DELETE_ORDER_FAIL:
            return {loadingDeleteOrder: false, success: false}
        default:
            return state
    }
}

export const editOrderReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_EDIT_ORDER:
            return {loadingEditOrder: true}
        case EDIT_ORDER_SUCCESS:
            return {loadingEditOrder: false, success: true}
        case EDIT_ORDER_FAIL:
            return {loadingEditOrder: false, success: false}
        default:
            return state
    }
}

export const getAllOrderReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_ORDER:
            return {loadingGetAllOrder: true}
        case GET_ALL_ORDER_SUCCES:
            return {loadingGetAllOrder: false, success: true, orders: action.payload}
        case GET_ALL_ORDER_FAIL:
            return {loadingGetAllOrder: false, success: false}
        default:
            return state
    }
}

export const addOrderUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_ORDER_USER:
            return {loadingAddOrderUser: true}
        case ADD_ORDER_USER_SUCCESS:
            return {loadingAddOrderUser: false, success: true}
        case ADD_ORDER_USER_FAIL:
            return {loadingAddOrderUser: false, success: false}
        default:
            return state
    }
}

export const getOrderInfo = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ORDER_INFO:
            return {loadingGetOrderInfo: true}
        case GET_ORDER_INFO_SUCCESS:
            return {loadingGetOrderInfo: false, success: true, order: action.payload}
        case GET_ORDER_INFO_FAIL:
            return {loadingGetOrderInfo: false, success: false}
        default:
            return state
    }
}


export const getAllOrderUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_ORDER_USER:
            return {loadingGetAllOrderUser: true}
        case GET_ALL_ORDER_USER_SUCCESS:
            return {loadingGetAllOrderUser: false, success: true, oroder: action.payload}
        case GET_ALL_ORDER_USER_FAIL:
            return {loadingGetAllOrderUser: false, success: false}
        default:
            return state
    }
}


