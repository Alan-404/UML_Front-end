import React from "react";
import "./Menu.css";
import { useEffect, useState } from "react";
import { getProductsAction } from "../../behaviors/actions/product";
import { useDispatch, useSelector } from "react-redux";
import ProductBox from "./ProductBox";
import { bootstrapMode2 } from "../../common/constants";
import { useNavigate } from "react-router-dom";
import MySpinner from "../effects/MySpinner";
function Menu() {
  const [info, setInfo] = useState({
    search: false,
    inputSearch: "",
  });

  const [infoProduct, setInfoProduct] = useState({
    products: [],
  });

  const getInforSearch = (event) => {
    setInfo({
      ...info,
      inputSearch: event.target.value,
    });
  };

  const navigate = useNavigate();

  const submitSearchProduct = () => {
    navigate({
      pathname: "/search_product",
      search: `?search=${info.inputSearch}`,
    });
  };

  const dispatch = useDispatch();
  const getProductsReducer = useSelector((state) => state.getProductsReducer);
  const { products, loadingGetProducts } = getProductsReducer;

  useEffect(() => {
    dispatch(getProductsAction(0,300));
  }, [dispatch]);

  useEffect(() => {
    setInfoProduct({
      ...infoProduct,
      products: products,
    });
  }, [products]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <div className="collapse navbar-collapse" id="navbarColor">
          <ul className="navbar-nav">
            <li className="nav-item rounded bg-light search-nav-item">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={getInforSearch}
                />
                <button
                  onClick={submitSearchProduct}
                  className="btn btn-danger"
                >
                  Search
                </button>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                <span className="fa fa-shopping-cart"></span>
                <span className="text">Cart</span>
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <section id="products container">
        <div className="container">
          <div className="row">
            {(products, infoProduct.products) &&
              infoProduct.products.map((product, index) => (
                <ProductBox
                  key={product.id}
                  product={product}
                  bootstrapMode={bootstrapMode2}
                />
              ))}
          </div>
        </div>
      </section>
      {loadingGetProducts && (<MySpinner />)}
    </div>
  );
}

export default Menu;
