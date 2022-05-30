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
    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAIL,
    REQUEST_ADD_ORDER_USER,
    ADD_ORDER_USER_SUCCESS,
    ADD_ORDER_USER_FAIL,
    REQUEST_GET_ORDER_INFO,
    GET_ORDER_INFO_SUCCESS,
    GET_ORDER_INFO_FAIL,
    REQUEST_GET_ALL_ORDER_USER,
    GET_ALL_ORDER_USER_SUCCESS,
    GET_ALL_ORDER_USER_FAIL,
    apiUrl
} from '../../common/constants'

import axios from 'axios'

export const addOrderAction = (listProduct, userId) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_ORDER
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/employee/add`, {listProduct, userId}, config)

        if (data.id){
            dispatch({
                type: ADD_ORDER_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_ORDER_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: ADD_ORDER_FAIL
        })
    }
}


export const deleteOrderAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_DELETE_ORDER
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/employee/delete`, {id}, config)

        if (data === 'READY'){
            dispatch({
                type: DELETE_ORDER_SUCCESS
            })
        }
        else{
            dispatch({
                type: DELETE_ORDER_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: DELETE_ORDER_FAIL
        })
    }
}


export const editOrderAction = (id, orderState) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_EDIT_ORDER
        })
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/employee/edit`, {id, orderState}, config)

        if (data.id){
            dispatch({
                type: EDIT_ORDER_SUCCESS
            })
        }
        else{
            dispatch({
                type: EDIT_ORDER_FAIL
            })
        }
        
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: EDIT_ORDER_FAIL
        })
    }
}


export const getAllOrderAction = (page) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_ALL_ORDER
        })
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/employee/viewAll`, {page}, config)

        if (data.content){
            dispatch({
                type: GET_ALL_ORDER_SUCCESS,
                payload: data.content
            })
        }
        else{
            dispatch({
                type: GET_ALL_ORDER_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_ALL_ORDER_FAIL
        })
    }
} 


export const addOrderUserAction = (listProduct) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_ORDER_USER
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/user/add`, {listProduct}, config)

        if (data.id){
            dispatch({
                type: ADD_ORDER_USER_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_ORDER_USER_FAIL
            })
        }
    }
    catch(error){   
        console.log(error.message)
        dispatch({
            type: ADD_ORDER_USER_FAIL
        })
    }
}

export const getOrderInfo = (orderID) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_ORDER_INFO
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/user/getOrderInfo`, {orderID}, config)

        if (data.embeddedProducts){
            dispatch({
                type: GET_ORDER_INFO_SUCCESS,
                order: data.embeddedProducts
            })
        }
        else{
            dispatch({
                type: GET_ORDER_INFO_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_ORDER_INFO_FAIL
        })
    }
}

export const getAllOrderUser = (page) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_ALL_ORDER_USER
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/order/user/viewAll`, {page}, config)

        if (data.content){
            dispatch({
                type:GET_ALL_ORDER_USER_SUCCESS,
                payload: data.content
            })
        }
        else{
            dispatch({
                type: GET_ALL_ORDER_USER_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_ALL_ORDER_USER_FAIL
        })

    }
}