import {
    REQUEST_GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    apiUrl,
    REQUEST_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAIL,
    REQUEST_GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    REQUEST_ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REQUEST_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    REQUEST_SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL
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

export const editProductAction = (brand, description, discount, id, listDataProduct, listImageFile, name, price, productType, quantity, warranty) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_EDIT_PRODUCT
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/product/employee/edit`, {brand, description, discount, id, listDataProduct, listImageFile, name, price, productType, quantity, warranty}, config)

        if (data.id){
            dispatch({
                type: EDIT_PRODUCT_SUCCESS
            })
        }
        else{
            dispatch({
                type: EDIT_PRODUCT_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: EDIT_PRODUCT_FAIL
        })
    }
}

export const getProductByIdAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_PRODUCT_BY_ID
        })

        const {data} = await axios.get(`${apiUrl}/product/get/${id}`)
        console.log(data)
        if (data.id){
            dispatch({
                type: GET_PRODUCT_BY_ID_SUCCESS,
                payload: data
            })
        }
        else{
            dispatch({
                type: GET_PRODUCT_BY_ID_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: GET_PRODUCT_BY_ID_FAIL
        })
    }
}

export const addProductAction = (brand, description, discount, listDataProduct, listImageFile, name, price, productType, quantity, warranty) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_PRODUCT
        })

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/product/manager/add`, {brand, description, discount, listDataProduct, listImageFile, name, price, productType, quantity, warranty}, config)
        if (data.id){
            dispatch({
                type: ADD_PRODUCT_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_PRODUCT_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: ADD_PRODUCT_FAIL
        })
    }
}


export const deleteProductAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_DELETE_PRODUCT
        })
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }

        const {data} = await axios.delete(`${apiUrl}/product/manager/delete/${id}`, config)
        if (data){
            dispatch({
                type: DELETE_PRODUCT_SUCCESS
            })
        }
        else{
            dispatch({
                type: DELETE_PRODUCT_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: DELETE_PRODUCT_FAIL
        })
    }
}


export const searchProductsAction = (name) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_SEARCH_PRODUCT
        })

        const {data} = await axios.post(`${apiUrl}/product/search`, {name})

        if (data.content){
            dispatch({
                type: SEARCH_PRODUCT_SUCCESS,
                products: data.content
            })
        }
        else{
            dispatch({
                type: SEARCH_PRODUCT_FAIL
            })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch({
            type: SEARCH_PRODUCT_FAIL
        })
    }
}