import React from "react";
import "./Dashboard.css";
import { apiUrlImg } from "../../common/constants";
import { useNavigate } from "react-router-dom";
function ProductBox({ product , bootstrapMode }) {
  
  const navigate = useNavigate()
  const goToProductPage = (id) => {
    navigate({
      pathname: '/product',
      search: `?id=${id}`
    })
  }

  return (
    <div style={{cursor: 'pointer'}} onClick={() => goToProductPage(product.id)} className={bootstrapMode}>
      <div className="productBox">
        <div className="card">
          <div className="imgBox">
            <img src={`${apiUrlImg}/${product.imageUrls[0]}`} alt="" className="..." />
          </div>

          <div className="contentBox">
            <h3>{product.name}</h3>
            <h2 className="price">{product.price.toLocaleString()} VND</h2>
            <a className="buy">
              More Detail &nbsp;<i className="bi bi-bag"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
