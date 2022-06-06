import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrderAction } from '../../behaviors/actions/order'
import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { apiUrlImg } from '../../common/constants'
import { deleteOrderAction } from '../../behaviors/actions/order'
import { useNavigate } from 'react-router-dom'
import MySpinner from '../effects/MySpinner'
import swal from 'sweetalert'

const ManagerOrder = () => {
  const [info, setInfo] = useState({
    pageNow: 0
  })
  const dispatch = useDispatch()
  const getAllOrderReducer = useSelector(state => state.getAllOrderReducer)
  const {orders, loadingGetAllOrder} = getAllOrderReducer

  const deleteOrderReducer = useSelector(state => state.deleteOrderReducer)
  const {success, loadingDeleteOrder} = deleteOrderReducer

  const sizePage = 3


  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllOrderAction(0, sizePage))
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

  useEffect(() => {
    if (localStorage.getItem('auth') === "false"){
      navigate('/forbidden')
    }
  }, [])

  const showOrderPage = (id) => {
    navigate({
      pathname: '/show_order',
      search: `?id=${id}`
    })
  }

  const nextPage = () => {

    var temp = info.pageNow + 1
    info.pageNow = temp
    dispatch(getAllOrderAction(info.pageNow, sizePage))
  }

  const prevPage = () => {
    if (info.pageNow === 0){
      swal({
        title: "Notification",
        text: "Đây là trang đầu tiên",
        icon: 'warning'
      })
      return;
    }
    var temp = info.pageNow - 1
    info.pageNow = temp
    dispatch(getAllOrderAction(info.pageNow, sizePage))
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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li style={{cursor: 'pointer'}} onClick={prevPage} className="page-item">
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">Previous Page</span>
              </a>
            </li>
            <li style={{cursor: 'pointer'}} onClick={nextPage} className="page-item">
              <a className="page-link"  aria-label="Next">
                <span aria-hidden="true">Next Page</span>
              </a>
            </li>
          </ul>
        </nav>
        {loadingGetAllOrder && (<MySpinner />)}
        {loadingDeleteOrder && <MySpinner />}
    </div>
  )
}

export default ManagerOrder