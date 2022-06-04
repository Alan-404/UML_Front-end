import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderUserAction } from '../../behaviors/actions/order'
import { Image } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'

const AllOrders = () => {

    const dispatch = useDispatch()
    const getAllOrderUserReducer = useSelector(state => state.getAllOrderUserReducer)
    const {order} = getAllOrderUserReducer

    const [info, setInfo] = useState({
        orders: []
    })

    useEffect(() => {
        dispatch(getAllOrderUserAction(0))
    }, [dispatch])

    useEffect(() => {
        setInfo({
            ...info,
            order: order
        })
    }, [order])

    const calculateSumPrice = (arrCart) => {
        var sum = 0
        for (var i = 0; i<arrCart.length; i++){
        sum += arrCart[i].product.price*arrCart[i].numberOfProduct
        }
        return sum
    }

    return (
        <div className='p-3 mx-5'>
            {order && order.map((item, index) => (
                <div className='bg-light p-3 mb-4'>
                    Mã Đơn Hàng: <span className='text-danger'>{item.id}</span>
                    <hr />
                    {item.embeddedProducts.map((emProduct, productIndex) => (
                        <div className='mb-2'>
                            <div className='d-flex'>
                                <Image src={`${apiUrlImg}/${emProduct.product.imageUrls}`} style={{width: '100px', height: '100px'}}/>
                                &#160;&#160;&#160;&#160;&#160;
                                <div>
                                    <p>{emProduct.product.name}</p>
                                    <p><span className='text-info'>{emProduct.product.price.toLocaleString()}</span> x {emProduct.numberOfProduct}</p>
                                </div>
                            </div>
                            <hr />
                            
                        </div>
                    ))}
                    <h5>Sumary Price: <span className='text-danger'>{calculateSumPrice(item.embeddedProducts).toLocaleString()} VND</span></h5>
                </div>
            ))}
        </div>
    )
}

export default AllOrders