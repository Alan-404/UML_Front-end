import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_FAIL,
    LOGIN_ACCOUNT_SUCCESS,
    REQUEST_REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REQUEST_GET_USER_TOKEN,
    GET_USER_TOKEN_SUCCESS, 
    GET_USER_TOKEN_FAIL
} from '../../common/constants'

export const loginAccountReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_LOGIN_ACCOUNT:
            return {loadingLoginAccount: true}
        case LOGIN_ACCOUNT_SUCCESS:
            return {loadingLoginAccount:false, success: true, token: action.payload}
        case LOGIN_ACCOUNT_FAIL:
            return {loadingLoginAccount: false, success: false}
        default:
            return state
    }
}

export const registerUserReducer = (state = {}, action) => {
    switch(action.type){
        case REQUEST_REGISTER_USER:
            return {loadingRegisterUser: true}
        case REGISTER_USER_SUCCESS:
            return {loadingRegisterUser: false, success: true}
        case REGISTER_USER_FAIL:
            return {loadingRegisterUser: false, success: false}
        default:
            return state
    }
}

export const getUserTokenReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_USER_TOKEN:
            return {loadingGetUserToken: true}
        case GET_USER_TOKEN_SUCCESS:
            return {loadingGetUserToken: false, success: true, user: action.payload}
        case GET_USER_TOKEN_FAIL:
            return {loadingGetUserToken: false, success: false}
        default:
            return state
    }
}