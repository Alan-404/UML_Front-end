import {
    apiUrl,
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

import axios from 'axios'


export const loginAccountAction = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_LOGIN_ACCOUNT
        })
        const {data} = await axios.post(`${apiUrl}/authenticate`, {email, password})
        if (data.token){
            localStorage.setItem('uml', data.token)
            dispatch({
                type: LOGIN_ACCOUNT_SUCCESS,
                payload: data.token
            })
        }
        else{
            dispatch({
                type: LOGIN_ACCOUNT_FAIL
            })
        }


    }
    catch(error){
        console.log(error)
        dispatch({
            type: LOGIN_ACCOUNT_FAIL,
            payload: error.response.data.message
        })
    }
} 

export const getUserTokenAction = () => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_USER_TOKEN
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }
        const {data} = await axios.get(`${apiUrl}/account/user/get`, config)
        if (data.id){
            dispatch({
                type: GET_USER_TOKEN_SUCCESS,
                payload: data
            })
        }
        else{
            dispatch({
                type: GET_USER_TOKEN_FAIL,
            })
        }
        
    }
    catch(error){
        console.log(error)
        dispatch({
            type: GET_USER_TOKEN_FAIL
        })
    }
}


export const addEmployeeAction = (name, email, address, gender, password, phone) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_EMPLOYEE
        })

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('uml')}`
                
            }
        }
        const {data} = await axios.post(`${apiUrl}/account/manager/add/employee`, {name, email, address, gender, password, phone}, config)
        if (data.id){
            dispatch({
                type: ADD_EMPLOYEE_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_EMPLOYEE_FAIL
            })
        }
    }   
    catch(error){
        dispatch({
            type: ADD_EMPLOYEE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const changeStatusAction = (email) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_CHANGE_STATUS
        })
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
                
            }
        }

        const {data} = await axios.get(`${apiUrl}/account/manager/changeStatus/${email}`,config)
        console.log(data)
        if (data){
            dispatch({
                type: CHANGE_STATUS_SUCCESS
            })
        }
        else{
            dispatch({
                type: CHANGE_STATUS_FAIL
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: CHANGE_STATUS_FAIL
        })
    }
}

export const editEmployeeAction = (id, name,email, address, phone, gender, imageFile, password) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_EDIT_EMPLOYEE
        })
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }
        const {data} = await axios.post(`${apiUrl}/account/manager/edit/employee`, {id, name, email, address, phone, gender, imageFile, password}, config)
        console.log(data)
        if (data.id){
            dispatch({
                type: EDIT_EMPLOYEE_SUCCESS
            })
            
        }
        else{
            dispatch({
                type: EDIT_EMPLOYEE_FAIL
            })
        }

    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: EDIT_EMPLOYEE_FAIL
        })
    }
}

export const getUserByIdAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_USER_BY_ID
        })
        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }
        const {data} = await axios.get(`${apiUrl}/account/manager/get/${id}`, config)
        if (data.id){
            dispatch({
                type: GET_USER_BY_ID_SUCCESS,
                payload: data
            })
        }
        else{
            dispatch({
                type: GET_USER_BY_ID_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_USER_BY_ID_FAIL
        })
    }
}

export const getAllUsersAction = (page,size) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_ALL_USERS
        })

        const config = {
            headers: {
                'content-type':"multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/account/manager/viewAll`, {page,size}, config)
        console.log(data)
        if (data.content){
            dispatch({
                type: GET_ALL_USERS_SUCCESS,
                payload: data.content
            })
        }
        else{
            dispatch({
                type: GET_ALL_USERS_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_ALL_USERS_FAIL
        })
    }
}

export const addUserAction = (name, email, address, phone, gender, password) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_USER
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/account/add`, {name, email, address, phone, gender, password})
        // console.log(data)
        if (data.id){
            dispatch({
                type: ADD_USER_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_USER_FAIL
            })
        }
    }
    catch(error){
        dispatch({
            type: ADD_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const editUserAction = (id, name, address, phone, gender, imageFile, password) => async(dispatch) => {
    console.log(imageFile)
    try{
        dispatch({
            type: REQUEST_EDIT_USER
        })
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }
        var request
        if (imageFile.name!== 'File'){
            request = await axios.post(`${apiUrl}/account/user/edit`, {id, name, address, phone, gender, imageFile, password}, config)
        }
        else{
            console.log("OK")
            request = await axios.post(`${apiUrl}/account/user/edit`, {id, name, address, phone, gender, password}, config)
        }
        const {data} = request
        if (data.id){
            dispatch({
                type: EDIT_USER_SUCCESS
            })
            
        }
        else{
            dispatch({
                type: EDIT_USER_FAIL
            })
        }
        
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: EDIT_USER_FAIL
        })
    }
}

export const checkTokenAction = () => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_CHECK_TOKEN
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.get(`${apiUrl}/account/checkToken`, config)
        localStorage.setItem('auth', data)

        dispatch({
            type: RESULT_CHECK_TOKEN,
            payload: data
        })
    }
    catch(error){
        console.log(error.message)
    }
}