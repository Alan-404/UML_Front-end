import React from "react";
import "./Dashboard.css";
function Trending({ productDetail }) {
  console.log(productDetail.productImg);
  return (
      <div className="col-lg-3 mt-3">
        <div className="productBox">
          <div className="card">
            <div className="imgBox">
              <img
                src={require("../../assets/img/product4.png")}
                alt="asd"
                className="mouse"
              />
            </div>

            <div className="contentBox">
              <h3>{productDetail.productName}</h3>
              <h2 className="price">{productDetail.productPrice}</h2>
              <a className="buy">
                Buy Now &nbsp;<i className="bi bi-bag"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Trending;
