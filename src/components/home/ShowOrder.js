import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoOrderManagerAction } from '../../behaviors/actions/order'
import { Image, Form, Button } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'
import swal from 'sweetalert';
import { editOrderAction } from '../../behaviors/actions/order'
import MySpinner from '../effects/MySpinner'
import { useNavigate } from 'react-router-dom'
const ShowOrder = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        orderState: '',
        submit: false
    })

    const dispatch = useDispatch()
    
    const getInfoOrderManagerReducer = useSelector(state => state.getInfoOrderManagerReducer)
    const {order, loadingGet} = getInfoOrderManagerReducer

    const editOrderReducer = useSelector(state => state.editOrderReducer)
    const {success, loadingEditOrder} = editOrderReducer

    useEffect(() => {
        if (localStorage.getItem('auth') === "false"){
            navigate('/forbidden')
          }
        dispatch(getInfoOrderManagerAction(searchParams.get('id')))
    }, [dispatch])

    useEffect(() => {
        if (success && info.submit){
            swal({
                title: "Notification",
                text: "Chỉnh Sửa Đơn Hàng Thành Công",
                icon:"success"
              })
        }
    }, [success])

    


    const submitChangeOrder = () => {
        if(info.orderState === ""){
            swal({
                title: "Error System",
                icon:'error',
                text: "Not Any Thing Has Changed",
                dangerMode: true
            })
            return
        }

        setInfo({
            ...info,
            submit: true
        })

        dispatch(editOrderAction(searchParams.get('id'), info.orderState))
    }
    

    const getOrderState = (event) => {
        setInfo({
            ...info,
            orderState: event.target.value
        })
    }   

    return (
        <div className='p-5 bg-light mx-2'>
            <h2 className='text-center'>Detail Order Informations</h2>
            <hr />
            {order && (
                <div>
                    <div className='d-flex'>
                        <h4>Order ID: <span>{order.id}</span></h4>
                        &#160;&#160;&#160;&#160;&#160;
                        <Form.Select onChange={getOrderState} className='mb-3 w3-animate-right w-25' aria-label="Default select example">
                            <option>{order.orderState}</option>
                            <option value="READY">READY</option>
                            <option value="SHIP">SHIP</option>
                            <option value="CANCEL">CANCEL</option>
                            <option value="DONE">DONE</option>
                        </Form.Select>
                    </div>
                    <h4>Receiver: <span>{order.user.name}</span></h4>
                    <h4>Address: <span>{order.user.address}</span></h4>
                    <h4>Products: </h4>
                    <hr />
                    {order.embeddedProducts.map(emProduct => (
                        <div className='mb-3 d-flex'>
                            <Image style={{width: '150px', height: '150px'}} src={`${apiUrlImg}/${emProduct.product.imageUrls[0]}`}/>
                            &#160;&#160;&#160;&#160;
                            <div>
                                <p style={{fontSize: '25px'}}>{emProduct.product.name}</p>
                                <p>{emProduct.numberOfProduct} x <span className='text-success'>{emProduct.product.price.toLocaleString()}</span></p>
                                <hr />
                                <p className='text-danger'>{(emProduct.numberOfProduct*emProduct.product.price).toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                    
                    <Button onClick={submitChangeOrder}>Save</Button>
                </div>
                
            )}
            {loadingGet && <MySpinner />}
            {loadingEditOrder && <MySpinner />}
        </div>
    )
}

export default ShowOrder