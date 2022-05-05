import {
    apiUrl,
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_FAIL,
    LOGIN_ACCOUNT_SUCCESS
} from '../../common/constants'

import axios from 'axios'


export const loginAccountAction = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_LOGIN_ACCOUNT
        })
        const {data} = await axios.post(`${apiUrl}/authenticate`, {email, password})
        console.log(data)
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

