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
    REQUEST_GET_PRODUCT_BY_PAGE,
    GET_PRODUCT_BY_PAGE_SUCCESS,
    GET_PRODUCT_BY_PAGE_FAIL,
    REQUEST_ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REQUEST_DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    REQUEST_SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL,
    
} from '../../common/constants'

import axios from 'axios'

export const getProductsAction = (page, size) => async (dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_PRODUCTS
        })

        const {data} = await axios.post(`${apiUrl}/product/viewall?column=id&page=${page}&size=${size}&sort=ASC`)
        console.log(data.content)
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

export const editProductAction = (brand, description, discount, id, listDataProduct, listImageFile, name, price, productType, quantity, warranty, originalPrice) => async(dispatch) => {
    console.log({brand, description, discount, id, listDataProduct, listImageFile, name, price, productType, quantity, warranty, originalPrice})
    try{
        dispatch({
            type: REQUEST_EDIT_PRODUCT
        })

        const config = {
            headers: {
                "Content-Type":"multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('uml')}`
            }
        }
        var request
        if (listImageFile.length === 0){
            request = await axios.post(`${apiUrl}/product/employee/edit`, {brand, description, discount, id, "listDataProduct[]": listDataProduct, name, price, productType, quantity, warranty, originalPrice}, config)
        }
        else{
            request = await axios.post(`${apiUrl}/product/employee/edit`, {brand, description, discount, id, "listDataProduct[]": listDataProduct, "listImageFile[]": listImageFile, name, price, productType, quantity, warranty, originalPrice}, config)
        }

        const {data} = request

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
        //console.log(error.message)
        dispatch({
            type: EDIT_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductByIdAction = (id) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_PRODUCT_BY_ID
        })

        const {data} = await axios.get(`${apiUrl}/product/get/${id}`)
        
        console.log("get product:",data)
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

export const getProductByPageAction = (page, size) => async(dispatch) => {
    // console.log(page)
    try{
        dispatch({
            type: REQUEST_GET_PRODUCT_BY_PAGE
        })

        const {data} = await axios.post(`${apiUrl}/product/viewall?column=id&page=${page}&size=${size}&sort=ASC`)
        console.log(data)
        if (data.content){
            dispatch({
                type: GET_PRODUCT_BY_PAGE_SUCCESS,
                payload: data.content
            })
        }
        else{
            dispatch({
                type: GET_PRODUCT_BY_PAGE_FAIL
            })
        }
    }
    catch(error){
        dispatch({
            type: GET_PRODUCT_BY_PAGE_FAIL
        })
    }
}


export const addProductAction = (brand, description, discount, listDataProduct, listImageFile, name, price, productType, quantity, warranty, originalPrice) => async(dispatch) => {
    console.log({brand, description, discount, listDataProduct, listImageFile, name, price, productType, quantity, warranty, originalPrice})
    try{
        dispatch({
            type: REQUEST_ADD_PRODUCT
        })

        const config = {
            headers: {
                "Content-Type":"multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem('uml')}`,
            }
        }
        
        
        const {data} = await axios.post(`${apiUrl}/product/manager/add`, {brand, description, discount,"listImageFile[]":listImageFile, "listDataProduct[]": listDataProduct, name, price, productType, quantity, warranty, originalPrice}, config)
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
        console.log(error)
        dispatch({
            type: ADD_PRODUCT_FAIL,
            payload: error.response.data.message
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

        const {data} = await axios.get(`${apiUrl}/product/manager/changeState/${id}`, config)
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


export const searchProductsAction = (name, page) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_SEARCH_PRODUCT
        })


        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {data} = await axios.post(`${apiUrl}/product/search`, {name, page}, config)
        if (data.content){
            dispatch({
                type: SEARCH_PRODUCT_SUCCESS,
                payload: data.content
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

export const changeEditSuccessAction = () => (dispatch) => {
    dispatch({
        type: EDIT_PRODUCT_FAIL
    })
}