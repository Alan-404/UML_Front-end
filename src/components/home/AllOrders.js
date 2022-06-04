import React from 'react'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderUserAction } from '../../behaviors/actions/order'
import { Image } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'
import { useNavigate } from 'react-router-dom'
const AllOrders = () => {
    const navigate = useNavigate()

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

    const goDetailOrderPage = (id) => {
        navigate({
            pathname: '/detail_order',
            search:`?id=${id}`
        })
    }

    const showProduct = (id) => {
        navigate({
            pathname: "/product",
            search: `?id=${id}`
        })
    } 

    return (
        <div className='p-3 mx-5'>
            {order && order.map((item, index) => (
                <div className='bg-light p-3 mb-4'>
                    <div style={{cursor: "pointer"}} onClick={() => goDetailOrderPage(item.id)}>
                        Mã Đơn Hàng: <span className='text-danger'>{item.id}</span> <span className='text-primary'>({item.orderState})</span>
                    </div>
                    <hr />
                    {item.embeddedProducts.map((emProduct, productIndex) => (
                        <div onClick={() => showProduct(emProduct.product.id)} className='mb-2'>
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