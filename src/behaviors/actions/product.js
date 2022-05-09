import {
    REQUEST_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    apiUrl
} from '../../common/constants'

import axios from 'axios'

export const getProductsAction = (page) => async (dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_PRODUCTS
        })

        const {data} = await axios.post(`${apiUrl}/product/viewall`, {page})
        console.log(data)
        if (data.content){
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: data.content
            })
        }
        else{
            dispatch({
                type: GET_PRODUCTS_FAIL,
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_PRODUCTS_FAIL,
        })
    }
}