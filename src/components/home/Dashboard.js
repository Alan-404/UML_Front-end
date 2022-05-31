import React from "react";
import styled from "styled-components";
import "./Dashboard.css";
import ProductBox from "./ProductBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../behaviors/actions/product";
import { useSelector } from "react-redux";
import { bootstrapMode1 } from "../../common/constants";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();

  const getProductsReducer = useSelector((state) => state.getProductsReducer);
  const { products } = getProductsReducer;



  useEffect(() => {
    dispatch(getProductsAction(0));
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="banner">
          <div className="content">
            <h1 className="mb-5">
              Shop Confidently with <br />
              30-Day Hassle-Free Returns.
            </h1>
            <Link to="/menu">
              SHOPPING NOW <i className="bi bi-arrow-right"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <button className="btn btn-dark">OUR CATEGORIES</button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <span className="text text-center">
            Finding Best Products Now
            <br />
            in Your Fingertips
          </span>
        </div>
        <div className="row mt-2 g-4">
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-1">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>CPUs / Processors </span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie1.png")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>Graphisc Cards</span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie2.png")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>Hard Drive / SSDs</span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie3.png")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>MotherBoards</span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie4.jpg")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2tr5">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>Monitor </span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie8.jpg")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>Power Supplies</span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie5.jpg")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>Memory </span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie7.jpg")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="cardCategories-link">
              <div className="cardCategories p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename">
                    <span>PC Case </span>
                  </div>
                  <div>
                    <img
                      src={require("../../assets/img/categorie6.jpg")}
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h1 className="text-center">
          How to get <span className="highlight">product</span>
        </h1>
        <div className="row mt-5">
          <div className="col-lg-4 mt-2">
            <div className="stepBox">
              <h1>1</h1>
              <p>select product</p>
            </div>
          </div>

          <div className="col-lg-4 mt-2">
            <div className="stepBox">
              <h1>2</h1>
              <p>fill in the details</p>
            </div>
          </div>

          <div className="col-lg-4 mt-2">
            <div className="stepBox">
              <h1>3</h1>
              <p>your order delivered in day</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-5 mb-5">
        <h1>
          Trending <span className="highlight"> product</span>
        </h1>
        <div className="row">
          {products &&
            products
              .slice(0, 4)
              .map((product, index) => (
                <ProductBox key={product.id} product={product} bootstrapMode={bootstrapMode1}/>
              ))}
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1>
          New <span className="highlight"> product</span>
        </h1>
        <div className="row">
          {products &&
            products
              .slice(0, 4)
              .map((product, index) => (
                <ProductBox key={product.id} product={product} bootstrapMode={bootstrapMode1} />
              ))}
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1>
          Most sale <span className="highlight"> product</span>
        </h1>
        <div className="row">
          {products &&
            products
              .slice(0, 4)
              .map((product, index) => (
                <ProductBox key={product.id} product={product} bootstrapMode={bootstrapMode1}/>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
