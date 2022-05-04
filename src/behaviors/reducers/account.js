import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_FAIL,
    LOGIN_ACCOUNT_SUCCESS
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