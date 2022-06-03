import React from "react";
import "./Manager.css";
import { Button, Image } from "react-bootstrap";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCartAction } from "../../behaviors/actions/cart";
import {apiUrlImg, apiUrl} from '../../common/constants'

function ManagerUser({ types_table }) {
  const dispatch = useDispatch();


  const getCartReducer = useSelector(state => state.getCartReducer)
  const {cart} = getCartReducer


  const deleteProductReducer = useSelector(
    (state) => state.deleteProductReducer
  );
  const { success } = deleteProductReducer;


  useEffect(() => {
    dispatch(getCartAction())
  }, [dispatch, success]);

  const increaseNumOfProducts = (id) => {
    
  }

  return (
    <div className="p-3">
      <h2>Cart</h2>
      <hr />
      {cart && (
        cart.map((item, index) => (
          <div key={index} className="p-3 bg-light w-75 mb-4" style={{borderRadius: '25px'}}>
            <h4>{item.product.brand}</h4>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="d-flex w-50">
                <Image style={{width: '100px', height: '100px', borderRadius: '10px'}} src={`${apiUrlImg}/${item.product.imageUrls[0]}`}/>
                &#160;&#160;&#160;&#160;&#160;
                <div>
                  <h3>{item.product.name}</h3>
                  <p className="text-info" style={{fontSize: '17px'}}>{item.product.price.toLocaleString()} VND</p>
                </div>
              </div>
              <div>
                <button className="p-1 px-2 bg-light">+</button>
                <input className="px-2" style={{width: '40px', height: '35px'}} value={item.numberOfProduct}/>
                <button className="p-1 px-2 bg-light">-</button>
              </div>
              <div>
                <i style={{fontSize: '25px', cursor: 'pointer'}} className="fa fa-trash text-danger" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ManagerUser;
