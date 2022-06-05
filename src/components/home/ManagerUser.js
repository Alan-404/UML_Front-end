import React from "react";
import "./Manager.css";
import { Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCartAction } from "../../behaviors/actions/cart";
import { apiUrlImg, apiUrl } from "../../common/constants";
import { changeNumberProductAction } from "../../behaviors/actions/cart";
import { deleteCartAction } from "../../behaviors/actions/cart";
import MySpinner from "../effects/MySpinner";
import { addOrderUserAction } from "../../behaviors/actions/order";
import swal from "sweetalert";
function ManagerUser({ types_table }) {
  const [info, setInfo] = useState({
    arrNum: [],
    reload: false,
    cartShow: [],
    showConfirm: false
  })
  const dispatch = useDispatch();

  const getCartReducer = useSelector((state) => state.getCartReducer);
  const { cart, loadingGetCart } = getCartReducer;

  const changeNumberOfProductReducer = useSelector(state => state.changeNumberProductReducer)
  const {loadingChangeNumberProduct} = changeNumberOfProductReducer

  const deleteCartReducer = useSelector(state=>state.delelteCartReducer)
  const {loadingDeleteCart} = deleteCartReducer

  const deleteProductReducer = useSelector(
    (state) => state.deleteProductReducer
  );


  const addOrderUserReducer = useSelector(state => state.addOrderUserReducer)
  const {successAddOrderUser, error, loadingAddOrderUser} = addOrderUserReducer
  const { success } = deleteProductReducer;


  const calculateSumPrice = (arrCart) => {
    var sum = 0
    for (var i = 0; i<arrCart.length; i++){
      sum += arrCart[i].product.price*arrCart[i].numberOfProduct
    }
    return sum
  }

  useEffect(() => {
    dispatch(getCartAction());
    if (info.reload){
      setInfo({
        ...info,
        reload: false
      })
    }
  }, [dispatch, success, info.reload]);

  useEffect(() =>  {
    if (cart){
      var temp = []
      for (var i =0; i<cart.length; i++){
        temp.push(cart[i].numberOfProduct)
      }
      
      setInfo({
        ...info,
        arrNum: temp
      })
      //info.arrNum = temp
    }
  }, [cart])

  useEffect(() => {
    if (successAddOrderUser){
      swal({
        text: 'Thêm Đơn Hàng Thành Công'
      })
    }
    else if (successAddOrderUser === false){
      swal({
        text: error,
        title: "Error System",
        icon:"error",
        dangerMode: true
      })
    }
  }, [successAddOrderUser])


  const makeOrder = () => {
    var listProducts = []
    var listCart = []
    for (var i = 0; i<cart.length; i++){
      var obj = {}
      obj.productID = cart[i].product.id
      obj.numberOfProduct = cart[i].numberOfProduct
      listProducts.push(obj)

      listCart.push(cart[i].id)
    }
    dispatch(addOrderUserAction(listCart,listProducts))
  }

  const increaseNumOfProducts = (id, index) => {
    var temp = info.arrNum
    temp[index] = temp[index] + 1
    dispatch(changeNumberProductAction(id, temp[index]))
    setInfo({
      ...info,
      reload: true
    })
  };

  const decreseNumOfProduct = (id, index) => {
    var temp = info.arrNum
    temp[index] = temp[index] - 1
    dispatch(changeNumberProductAction(id, temp[index]))
    setInfo({
      ...info,
      reload: true
    })
  }


  const deleteCart = (id) => {
    dispatch(deleteCartAction(id))
    setInfo({
      ...info,
      reload: true
    })
  }



  return (
    <div className="p-3">
      <h2>Cart</h2>
      <hr />
      {(cart && info.arrNum) &&
        cart.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-light w-75 mb-4"
            style={{ borderRadius: "25px" }}
          >
            <h4>{item.product.brand}</h4>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="d-flex w-50">
                <Image
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                  src={`${apiUrlImg}/${item.product.imageUrls[0]}`}
                />
                &#160;&#160;&#160;&#160;&#160;
                <div>
                  <h3>{item.product.name}</h3>
                  <p className="text-info" style={{ fontSize: "17px" }}>
                    {item.product.price.toLocaleString()} VND
                  </p>
                </div>
              </div>
              <div>
                <button
                onClick={() => {increaseNumOfProducts(item.id, index)}}
                  className="p-1 px-2 bg-light"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </button>
                <input
                  className="px-2"
                  style={{ width: "40px", height: "35px" }}
                  value={info.arrNum[index]}
                />
                <button
                  className="p-1 px-2 bg-light"
                  onClick={() => {decreseNumOfProduct(item.id, index)}}
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <i
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  className="fa fa-trash text-danger"
                  aria-hidden="true"
                  onClick={() => deleteCart(item.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
        {loadingChangeNumberProduct && (<MySpinner />)}
        {cart && (
          <div className="bg-light p-3 w-25" style={{borderRadius: '20px'}}>
            <h1>Sum Of Price in Cart</h1>
            <hr />
            <h4>{calculateSumPrice(cart).toLocaleString()} VND</h4>
          </div>)}
      {cart && <Button onClick={makeOrder} className="mt-5">Make Order</Button>}
      {loadingGetCart && (<MySpinner />)}
    </div>
  );
}

export default ManagerUser;
