import {
    apiUrl,
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_FAIL,
    LOGIN_ACCOUNT_SUCCESS,
    REQUEST_GET_USER_TOKEN,
    GET_USER_TOKEN_SUCCESS, 
    GET_USER_TOKEN_FAIL
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
        console.log(error.message)
        dispatch({
            type: LOGIN_ACCOUNT_FAIL
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
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('uml')}`
            }
        }
        console.log(config)
        const {data} = await axios.get(`${apiUrl}/account/user/get`, config)
        console.log(data)
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
        console.log(error.message)
        dispatch({
            type: GET_USER_TOKEN_FAIL
        })
    }
}

