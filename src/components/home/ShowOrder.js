import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoOrderManagerAction } from '../../behaviors/actions/order'

const ShowOrder = () => {
    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()
    
    const getOrderReducer = useSelector(state => state.getInfoOrderManagerReducer)
    const {order} = getOrderReducer

    useEffect(() => {
        dispatch(getInfoOrderManagerAction(searchParams.get('id')))
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default ShowOrder