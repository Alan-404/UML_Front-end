import axios from 'axios'
import {
    REQUEST_ADD_CART,
    ADD_CART_SUCCESS,
    ADD_CART_FAIL,
    REQUEST_CHANGE_NUMBER_PRODUCT,
    CHANGE_NUMBER_PRODUCT_SUCCESS,
    CHANGE_NUMBER_PRODUCT_FAIL,
    REQUEST_DELETE_CART,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAIL,
    REQUEST_GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAIL,
    REQUEST_GET_CART_FOR_ORDER,
    GET_CART_FOR_USER_ORDER_SUCCESS,
    GET_CART_FOR_USER_ORDER_FAIL,
    apiUrl
} from '../../common/constants'


export const addCartAction = (numberOfProduct, productID) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_CART
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/cart/user/add`, {numberOfProduct, productID}, config)

        if (data.id){
            dispatch({
                type: ADD_CART_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_CART_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: ADD_CART_FAIL
        })
    }
}


export const changeNumberProductAction = (cartID, numberOfProduct) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_CHANGE_NUMBER_PRODUCT
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/cart/user/changeNumberOfProduct`, {cartID, numberOfProduct}, config)

        if (data.id){
            dispatch({
                type: CHANGE_NUMBER_PRODUCT_SUCCESS
            })
        }
        else{
            dispatch({
                type: CHANGE_NUMBER_PRODUCT_FAIL
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: CHANGE_NUMBER_PRODUCT_FAIL
        })
    }
}