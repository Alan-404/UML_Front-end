import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderAction } from '../../behaviors/actions/order'
import { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'
import { deleteOrderAction } from '../../behaviors/actions/order'
import { useNavigate } from 'react-router-dom'
import MySpinner from '../effects/MySpinner'

const ManagerOrder = () => {
  const dispatch = useDispatch()
  const getAllOrderReducer = useSelector(state => state.getAllOrderReducer)
  const {orders, loadingGetAllOrder} = getAllOrderReducer

  const deleteOrderReducer = useSelector(state => state.deleteOrderReducer)
  const {success, loadingDeleteOrder} = deleteOrderReducer


  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllOrderAction(0))
  }, [])

  const calculateSumPrice = (arrCart) => {
    var sum = 0
    for (var i = 0; i<arrCart.length; i++){
    sum += arrCart[i].product.price*arrCart[i].numberOfProduct
    }
    return sum
}

useEffect(() => {
  if (success){
    window.location.reload()
  }
}, [success])

const deleteOrder = (id) => {
  dispatch(deleteOrderAction(id))
}

const showOrderPage = (id) => {
  navigate({
    pathname: '/show_order',
    search: `?id=${id}`
  })
}

  return (
    <div className='p-3'>
      <h1>List Orders</h1>
      <hr />
        {orders && orders.map(item => (
          <div className='bg-light p-3 mb-3'>
            <div className='d-flex justify-content-between'>
              <h3 style={{cursor: 'pointer'}} onClick={() => showOrderPage(item.id)}>ID of Order: <span className='text-primary'>{item.id}</span> - <span className='text-success'>{item.orderState}</span></h3>
              <i onClick={() => deleteOrder(item.id)} style={{fontSize: '30px', cursor: 'pointer'}} className="fa fa-trash text-danger" aria-hidden="true"></i>
            </div>
            <hr />
            <h5>Receiver: <span>{item.user.name}</span></h5>
            <h5>Products: </h5>
            {item.embeddedProducts.map((emProduct, index) => (
              <div className='mb-2 d-flex'>
                <Image src={`${apiUrlImg}/${emProduct.product.imageUrls[0]}`} style={{height: '100px', width: '100px'}}/>
                &#160;&#160;&#160;&#160;
                <div>
                  <p>{emProduct.product.name}</p>
                  <p className='text-info'>{emProduct.numberOfProduct} x {emProduct.product.price.toLocaleString()} VND</p>
                </div>
              </div>
            ))}
            <hr />
            <h4>Sum of Price: <span className='text-danger'>{calculateSumPrice(item.embeddedProducts).toLocaleString()} VND</span></h4>
          </div>
        ))}
        {loadingGetAllOrder && (<MySpinner />)}
        {loadingDeleteOrder && <MySpinner />}
    </div>
  )
}

export default ManagerOrder