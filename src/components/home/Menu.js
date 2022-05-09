import React from "react";
import "./Menu.css";
import MenuBox from "./MenuBox";
import img1 from '../../assets/img/product1.png'
function Menu() {
  const productDetails = [
    {
      id: 1,
      productName: "MSI Bravo 15",
      productDetails: "lorem1",
      productPrice: 2000,
      productImg: img1,
    },
    {
      id: 2,
      productName: "MSI Bravo 15",
      productDetails: "lorem2",
      productPrice: 2000,
      productImg: img1,
    },
    {
      id: 3,
      productName: "MSI Bravo 15",
      productDetails: "lorem3",
      productPrice: 2000,
      productImg: img1,
    },
    {
      id: 4,
      productName: "MSI Bravo 15",
      productDetails: "lorem3",
      productPrice: 2000,
      productImg: img1,
    },
  ];
  const productList = productDetails.map((productDetail) => (
    <MenuBox key={productDetail.id} productDetail={productDetail} />
  ));
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <div className="collapse navbar-collapse" id="navbarColor">
          <ul className="navbar-nav">
            <li className="nav-item rounded bg-light search-nav-item">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
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
              <label for="CPU/Processors">CPU/Processors</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="GraphiscCards" />{" "}
              <label for="GraphiscCards">Graphisc Cards</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="HardDrive/SSds" />{" "}
              <label for="HardDrive/SSds">Hard Drive /SSds </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="MotherBoards" />{" "}
              <label for="MotherBoards">MotherBoards </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Monitor" />{" "}
              <label for="Monitor">Monitor</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="PowerSupplies" />{" "}
              <label for="PowerSupplies">PowerSupplies</label>{" "}
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
              <label for="Asus">Asus </label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Dell" /> <label for="Dell">Dell</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="LG" /> <label for="LG">LG</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Arsock" />{" "}
              <label for="Arsock">Asrock</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="Gigabyte" />{" "}
              <label for="Gigabyte">Gigabyte</label>{" "}
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
              <label for="25">25% off</label>{" "}
            </div>
            <div className="form-group">
              {" "}
              <input type="checkbox" id="5off" />{" "}
              <label for="5off" id="off">
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
                    <b>Popularity</b>
                  </option>
                  <option value="prcie">
                    <b>Price</b>
                  </option>
                  <option value="rating">
                    <b>Rating</b>
                  </option>
                </select>{" "}
              </div>
            </div>
          </div>
          <div className="row">{productList}</div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
