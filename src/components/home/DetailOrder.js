import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderInfoAction } from '../../behaviors/actions/order'
import { Table, Image } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'

const DetailOrder = () => {
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const getOrderInfoReducer = useSelector(state => state.getOrderInfoReducer)
    const {order} = getOrderInfoReducer

    
    useEffect(() => {
        dispatch(getOrderInfoAction(searchParams.get('id')))

    }, [dispatch])

    const calculateSumPrice = (arrCart) => {
        var sum = 0
        for (var i = 0; i<arrCart.length; i++){
        sum += arrCart[i].product.price*arrCart[i].numberOfProduct
        }
        return sum
    }




    
    return (
        <div className='p-4'>
            {order && (
                <div>
                    <h4 className='mb-4'>Detail of Order: <span className='text-success'>{order.id}</span> - <span className='text-info'>{order.orderState}</span></h4>
                    <div style={{borderRadius: '10px'}} className='bg-light p-2 w-25'>
                        <h3 className='text-center'>User</h3>
                        <hr />
                        <h4>{order.user.name}</h4>
                        <p>{order.user.address}</p>
                        <p>{order.user.phone}</p>
                    </div>
                    <div className='bg-light p-4 mt-4' style={{width: 'auto'}}>
                        <Table striped bordered hover className='w-100 mb-3'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Number</th>
                                    <th>Sum Of Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.embeddedProducts.map((item) => (
                                    <tr>
                                        <td>
                                            <Image src={`${apiUrlImg}/${item.product.imageUrls[0]}`} style={{width: "50px", height: '50px'}}/>
                                            &#160;&#160;&#160;&#160;
                                            {item.product.name}
                                        </td>
                                        <td>{item.product.price.toLocaleString()}</td>
                                        <td>{item.numberOfProduct}</td>
                                        <td>{(item.product.price * item.numberOfProduct).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <hr />
                        <h4>Sum Of Price: <span>{calculateSumPrice(order.embeddedProducts).toLocaleString()} VND</span></h4>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailOrder