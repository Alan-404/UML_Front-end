import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_FAIL,
    LOGIN_ACCOUNT_SUCCESS,
    REQUEST_GET_USER_TOKEN,
    GET_USER_TOKEN_SUCCESS, 
    GET_USER_TOKEN_FAIL,
    REQUEST_ADD_EMPLOYEE,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAIL,
    REQUEST_CHANGE_STATUS,
    CHANGE_STATUS_SUCCESS,
    CHANGE_STATUS_FAIL,
    REQUEST_EDIT_EMPLOYEE,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_FAIL,
    REQUEST_GET_USER_BY_ID,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAIL,
    REQUEST_GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    REQUEST_ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    REQUEST_EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL,
    REQUEST_CHECK_TOKEN,
    RESULT_CHECK_TOKEN
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


export const addEmployeeReducer = (state = {}, action) => {
    switch(action.type){
        case REQUEST_ADD_EMPLOYEE:
            return {loadingAddEmployee: true}
        case ADD_EMPLOYEE_SUCCESS:
            return {loadingAddEmployee: false, success: true}
        case ADD_EMPLOYEE_FAIL:
            return {loadingAddEmployee: false, success: false}
        default:
            return state
    }
}

export const changeStatusReducer = (state = {}, action) => {
    switch(action.type){
        case REQUEST_CHANGE_STATUS:
            return {loadingChangeStatus: true}
        case CHANGE_STATUS_SUCCESS:
            return {loadingChangeStatus: false, success: true}
        case CHANGE_STATUS_FAIL:
            return {loadingChangeStatus: false, success: false}
        default:
            return state
    }
}

export const editEmployeeReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_EDIT_EMPLOYEE:
            return {loadingEditEmployee: true}
        case EDIT_EMPLOYEE_SUCCESS:
            return {loadingEditEmployee: false, successEdit: true}
        case EDIT_EMPLOYEE_FAIL:
            return {loadingEditEmployee: false, successEdit: false}
        default:
            return state
    }
}

export const getUserByIdReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_USER_BY_ID:
            return {loadingGetUserById: true}
        case GET_USER_BY_ID_SUCCESS:
            return {loadingGetUserById: false, success: true,  user: action.payload}
        case GET_USER_BY_ID_FAIL:
            return {loadingGetUserById: false ,success: false}
        default:
            return state
    }
}

export const getAllUsersReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_USERS:
            return {loadingGetAllUsers: true}
        case GET_ALL_USERS_SUCCESS:
            return {loadingGetAllUsers: false, success: true, users: action.payload}
        case GET_ALL_USERS_FAIL:
            return {loadingGetAllUsers: false, success: false}
        default:
            return state
    }
}

export const addUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_USER:
            return {loadingAddUser: true}
        case ADD_USER_SUCCESS:
            return {loadingAddUser: false, success: true}
        case ADD_USER_FAIL:
            return {loadingAddUser: false, success: false, error: action.payload}
        default:
            return state
    }
}

export const editUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_EDIT_USER:
            return {loadingEditUser: true}
        case EDIT_USER_SUCCESS:
            return {loadingEditUser: false, success: true}
        case EDIT_USER_FAIL:
            return {loadingEditUser: false, success: false}
        default:
            return state
    }
}

export const checkTokenReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_CHECK_TOKEN:
            return {loadingCheckToken: true}
        case RESULT_CHECK_TOKEN:
            return {loadingCheckToken: false, result: action.payload}
        default:
            return state
    }
}


