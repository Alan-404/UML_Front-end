import React from "react";
import "./Dashboard.css";
function ProductBox({ product , bootstrapMode }) {
  console.log(bootstrapMode)
  return (
    <div className={bootstrapMode}>
      <div className="productBox">
        <div className="card">
          <div className="imgBox">
            <img src={`http://localhost:3456/${product.imageUrls}`} alt="asd" className="mouse" />
          </div>

          <div className="contentBox">
            <h3>{product.name}</h3>
            <h2 className="price">{product.price.toLocaleString()} VND</h2>
            <a className="buy">
              Buy Now &nbsp;<i className="bi bi-bag"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
