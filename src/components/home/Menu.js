import React from "react";
import "./Menu.css";
import { useEffect, useState } from "react";
import { getProductsAction } from "../../behaviors/actions/product";
import { useDispatch, useSelector } from "react-redux";
import ProductBox from "./ProductBox";
import {bootstrapMode2} from "../../common/constants";
import { useNavigate } from "react-router-dom";
function Menu() {

  const [info, setInfo] = useState({
    search: false,
    inputSearch: ''
  })


  const [infoProduct, setInfoProduct] = useState({
    products: []
  })

  const getInforSearch = (event) => {
    setInfo({
      ...info,
      inputSearch: event.target.value
    })
  }

  const navigate = useNavigate()
  
  const submitSearchProduct = () => {
    navigate({
      pathname: '/search_product',
      search: `?search=${info.inputSearch}`
    })
  }


  const dispatch = useDispatch();
  const getProductsReducer = useSelector((state) => state.getProductsReducer);
  const { products } = getProductsReducer;

  useEffect(() => {
    dispatch(getProductsAction(0));
  }, [dispatch]);


  useEffect(() => {
    setInfoProduct({
      ...infoProduct,
      products: products
    })
  }, [products])


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
                <button onClick={submitSearchProduct} className="btn btn-danger">
                  Search
                </button>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="fa fa-user-o"></span>
                <span className="text">Login</span>
              </a>{" "}
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
      <div className="filter">
        {" "}
        <button
          className="btn btn-default"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-filter"
          aria-expanded="true"
          aria-controls="mobile-filter"
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>

      <section id="sidebar">
        <p>
          {" "}
          Home | <b>All Products</b>
        </p>
        <div className="border-bottom pb-2 ml-2">
          <h4 id="burgundy">Filters</h4>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Categories</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="CPU/Processors" />{" "}
              <label htmlFor="CPU/Processors">CPU/Processors</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="GraphiscCards" />{" "}
              <label htmlFor="GraphiscCards">Graphisc Cards</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="HardDrive/SSds" />{" "}
              <label htmlFor="HardDrive/SSds">Hard Drive /SSds </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="MotherBoards" />{" "}
              <label htmlFor="MotherBoards">MotherBoards </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Monitor" />{" "}
              <label htmlFor="Monitor">Monitor</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="PowerSupplies" />{" "}
              <label htmlFor="PowerSupplies">PowerSupplies</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 border-bottom ml-3">
          <h6 className="font-weight-bold">Brand</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Asus" />{" "}
              <label htmlFor="Asus">Asus </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Dell" /> <label htmlFor="Dell">Dell</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="LG" /> <label htmlFor="LG">LG</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Arsock" />{" "}
              <label htmlFor="Arsock">Asrock</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Gigabyte" />{" "}
              <label htmlFor="Gigabyte">Gigabyte</label>{" "}
            </div>
          </form>
        </div>
        <div className="py-2 ml-3">
          <h6 className="font-weight-bold">Top Offers</h6>
          <div id="orange">
            <span className="fa fa-minus"></span>
          </div>
          <form>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="25off" />{" "}
              <label htmlFor="25">25% off</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="5off" />{" "}
              <label htmlFor="5off" id="off">
                5% off
              </label>{" "}
            </div>
          </form>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="text-muted m-2" id="res">
              Showing 44 results
            </div>
            <div className="ml-auto mr-lg-4 ">
              <div id="sorting" className="border rounded p-1 m-1">
                {" "}
                <span className="text-muted">Sort by</span>{" "}
                <select name="sort" id="sort">
                  <option value="popularity">
                    Popularity
                  </option>
                  <option value="prcie">
                    Price
                  </option>
                  <option value="rating">
                    Rating
                  </option>
                </select>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            {(products, infoProduct.products) &&
              infoProduct.products
                .map((product, index) => (
                  <ProductBox
                      key={product.id}
                      product={product}
                      bootstrapMode={bootstrapMode2}
                    />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
