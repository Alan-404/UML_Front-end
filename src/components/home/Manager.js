import React from "react";
import "./Manager.css";
import { Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MySpinner from "../effects/MySpinner";
import {
  getProductsAction,
  getProductByPageAction,
  deleteProductAction,
} from "../../behaviors/actions/product";
import { useSelector } from "react-redux";
import {
  getAllUsersAction,
  changeStatusAction,
} from "../../behaviors/actions/user";

import { useNavigate } from "react-router-dom";
import { apiUrlImg } from "../../common/constants";
function Manager({ types_table }) {
  const pageSize = 5;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    showProducts: [],
    pageNow: 1,
    showClientUser: [],
    showEmployeeUser: [],
  });

  const getProductsReducer = useSelector((state) => state.getProductsReducer);
  const { products } = getProductsReducer;

  const getProductByPageReducer = useSelector(
    (state) => state.getProductByPageReducer
  );
  const { productsPage } = getProductByPageReducer;

  const getAllUsersReducer = useSelector((state) => state.getAllUsersReducer);
  const { users } = getAllUsersReducer;

  const deleteProductReducer = useSelector(
    (state) => state.deleteProductReducer
  );

  const changeStatusReducer = useSelector((state) => state.changeStatusReducer);

  const { success } = changeStatusReducer;

  const deleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };
  const deleteUser = (email) => {
    dispatch(changeStatusAction(email));
  };
  const changeAddEmpPage = () => {
    navigate("/add_emp");
  };

  const goAddProductPage = () => {
    navigate({
      pathname: "/add_product",
    });
  };

  const goEditProductPage = (id) => {
    navigate({
      pathname: "/edit_product",
      search: `?id=${id}`,
    });
  };

  const goProductPage = (id) => {
    navigate({
      pathname: "/product",
      search: `?id=${id}`,
    });
  };
  const goToAddUserPage = () => {
    navigate({
      pathname: "/register",
    });
  };
  const goToEditUserProfilePage = (id) => {
    navigate({
      pathname: "/manager_edit_profile",
      search: `?id=${id}`,
    });
  };
  const goToAddEmployeePage = () => {
    navigate({
      pathname: "/add_emp",
    });
  };
  const changeList = (index) => {
    setList(index);
    info.pageNow = 1;
    dispatch(getProductByPageAction(0, pageSize));
    dispatch(getAllUsersAction(0, pageSize));
  };
  const calculatePage = (allProducts) => {
    var sizeNumProducts = allProducts.length;
    var num = sizeNumProducts / 5;
    num = parseInt(num);

    if (sizeNumProducts % 5 !== 0) {
      num = num + 1;
    }

    var arrNum = [];
    for (var i = 0; i < num; i++) {
      arrNum.push(i + 1);
    }

    return arrNum;
  };

  const changePage = (page, type) => {
    info.pageNow = page;
    page = page - 1;
    if (type === "product") {
      dispatch(getProductByPageAction(page, pageSize));
    }
    if (type === "user") {
      dispatch(getAllUsersAction(page, pageSize));
    }
  };

  const changeNextpage = (arr, type) => {
    //console.log("NEXT: " + info.pageNow)
    //console.log("size page " + calculatePage(products).length)
    if (info.pageNow === calculatePage(arr).length) {
      return;
    }
    var temp = info.pageNow;
    temp = temp + 1;
    info.pageNow = temp;
    if (type === "product") {
      dispatch(getProductByPageAction(info.pageNow - 1, pageSize));
    }
    if (type === "user") {
      dispatch(getAllUsersAction(info.pageNow - 1, pageSize));
    }
  };

  const changePrevPage = (type) => {
    if (info.pageNow === 1) {
      return;
    }
    var temp = info.pageNow;
    temp = temp - 1;
    info.pageNow = temp;
    if (type === "product") {
      dispatch(getProductByPageAction(info.pageNow - 1, pageSize));
    }
    if (type === "user") {
      dispatch(getAllUsersAction(info.pageNow - 1, pageSize));
    }
  };

  useEffect(() => {
    dispatch(getProductsAction(0, 200));
    dispatch(getAllUsersAction(0, 5));
    dispatch(getProductByPageAction(0, pageSize));
  }, [dispatch, success]);
  const checkEmployee = (role) => role === "EMPLOYEE" || role === "MANAGER";
  useEffect(() => {
    if (productsPage) {
      setInfo({
        ...info,
        showProducts: productsPage,
      });
    }
    if (users) {
      setInfo({
        ...info,
        showClientUser: users.filter((obj) => obj.roles.includes("USER")),
        showEmployeeUser: users.filter((obj) => obj.roles.some(checkEmployee)),
      });
    }
  }, [productsPage, users]);

  const [list, setList] = useState(0);
  return (
    <div>
      <div>
        <div className="px-0 bg-light">
          <div className="d-flex">
            <div className="d-flex align-items-center " id="navbar">
              {" "}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-items"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                {" "}
                <span className="fas fa-bars"></span>{" "}
              </button>{" "}
              <a className="text-decoration-none fs14 ps-2" href="#">
                TechGear <span className="fs13 pe-2">.com</span>
              </a>{" "}
            </div>
          </div>
          <div className="d-md-flex">
            <ul id="navbar-items" className="p-0">
              {types_table &&
                types_table.map((type_table, index) => (
                  <li key={index} onClick={() => changeList(index)}>
                    {" "}
                    <span className="fas fa-th-list"></span>{" "}
                    <span className="ps-3 name">{type_table}</span>{" "}
                  </li>
                ))}
            </ul>
            <div id="topnavbar">
              <div className="table-responsive px-2">
                {list === 0 && (
                  <div className="mt-3 productTable">
                    <button
                      type="button"
                      className="btn btn-outline-primary mb-3"
                      onClick={goAddProductPage}
                    >
                      Add Product
                    </button>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            Product<span>ID</span>
                          </th>
                          <th scope="col">Categories</th>
                          <th scope="col">Brand</th>
                          <th scope="col">
                            Name<span className="ps-1"></span>
                          </th>
                          <th scope="col">Price</th>
                          <th className="text-center" scope="col">
                            Warranty
                          </th>
                          <th className="text-center" scope="col">
                            Image
                          </th>
                          <th className="text-center" scope="col">
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {productsPage &&
                          productsPage.map((product) => (
                            <tr
                              key={product.id}
                              style={{ lineHeight: "3.5", cursor: "pointer" }}
                            >
                              <td>
                                <span className="bg-blight">{product.id}</span>
                              </td>
                              <td>
                                <span className="bg-bdark">
                                  {product.productType}
                                </span>
                              </td>
                              <td>
                                <span className="bg-blight">
                                  {product.brand}
                                </span>
                              </td>
                              <td>
                                <span className="bg-bdark">{product.name}</span>
                              </td>
                              <td>
                                <span className="bg-blight">
                                  {product.price}
                                </span>
                              </td>
                              <td className="text-center px-0 bg-bdark">
                                {product.warranty}
                              </td>
                              <td className="text-center">
                                <Image
                                  src={`${apiUrlImg}/${product.imageUrls[0]}`}
                                  width={70}
                                  height={50}
                                  atl=""
                                />
                              </td>
                              <td className="text-center">
                                <div className="buttonAction">
                                  <Button
                                    onClick={() => goProductPage(product.id)}
                                  >
                                    Detail
                                  </Button>
                                  &#160;&#160;
                                  <Button
                                    onClick={() => deleteProduct(product.id)}
                                  >
                                    Switch
                                  </Button>
                                  &#160;&#160;
                                  <Button
                                    onClick={() =>
                                      goEditProductPage(product.id)
                                    }
                                  >
                                    Edit
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="">
                      <nav aria-label="Page navigation example mr-5">
                        <ul className="pagination justify-content-end">
                          {products && info.pageNow === 1 ? (
                            <li
                              onClick={() => changePrevPage("product")}
                              className="page-item disabled"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                          ) : (
                            <li
                              onClick={() => changePrevPage("product")}
                              className="page-item"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                          )}
                          {products && (
                            <div className="d-flex">
                              {calculatePage(products).map((item, index) => {
                                if (info.pageNow === item)
                                  return (
                                    <li
                                      onClick={() =>
                                        changePage(item, "product")
                                      }
                                      key={index}
                                      className="page-item active"
                                    >
                                      <a className="page-link" href="#">
                                        {item}
                                      </a>
                                    </li>
                                  );
                                else
                                  return (
                                    <li
                                      onClick={() =>
                                        changePage(item, "product")
                                      }
                                      key={index}
                                      className="page-item"
                                    >
                                      <a className="page-link" href="#">
                                        {item}
                                      </a>
                                    </li>
                                  );
                              })}
                            </div>
                          )}
                          {products &&
                          info.pageNow === calculatePage(products).length ? (
                            <li
                              onClick={() =>
                                changeNextpage(products, "product")
                              }
                              className="page-item disabled"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          ) : (
                            <li
                              onClick={() =>
                                changeNextpage(products, "product")
                              }
                              className="page-item"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
                {list === 1 && (
                  <div className="mt-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={goToAddUserPage}
                    >
                      Add User
                    </button>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">
                            User<span>ID</span>
                          </th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">
                            Address<span className="ps-1"></span>
                          </th>
                          <th scope="col">Phone</th>
                          <th className="text-center" scope="col">
                            Gender
                          </th>
                          <th className="text-center" scope="col">
                            Avatar
                          </th>
                          <th className="text-center" scope="col">
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users &&
                          users.map((user) => (
                            <tr key={user.id}>
                              <td>
                                <span className="bg-blight">{user.id}</span>
                              </td>
                              <td>
                                <span className="bg-bdark">{user.name}</span>
                              </td>
                              <td>
                                <span className="bg-blight">{user.email}</span>
                              </td>
                              <td>
                                <span className="bg-bdark">{user.address}</span>
                              </td>
                              <td>
                                <span className="bg-blight">{user.phone}</span>
                              </td>
                              <td className="text-center px-0 bg-bdark">
                                {user.gender}
                              </td>
                              <td className="text-center">
                                <Image
                                  src={`${apiUrlImg}/${user.imgUrl}`}
                                  width={70}
                                  height={50}
                                />
                              </td>
                              <td className="text-center">
                                <div className="buttonAction">
                                  <Button
                                    onClick={(e) => deleteUser(user.email)}
                                  >
                                    Delete
                                  </Button>
                                  &#160;&#160;
                                  <Button
                                    onClick={(e) =>
                                      goToEditUserProfilePage(user.id)
                                    }
                                  >
                                    Edit
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                          {users && info.pageNow === 1 ? (
                            <li
                              onClick={() => changePrevPage("user")}
                              className="page-item disabled"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                          ) : (
                            <li
                              onClick={() => changePrevPage("user")}
                              className="page-item"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                          )}
                          {users && (
                            <div className="d-flex">
                              {calculatePage(users).map((item, index) => {
                                if (info.pageNow === item)
                                  return (
                                    <li
                                      onClick={() =>
                                        changePage(item, "user")
                                      }
                                      key={index}
                                      className="page-item active"
                                    >
                                      <a className="page-link" href="#">
                                        {item}
                                      </a>
                                    </li>
                                  );
                                else
                                  return (
                                    <li
                                      onClick={() =>
                                        changePage(item, "user")
                                      }
                                      key={index}
                                      className="page-item"
                                    >
                                      <a className="page-link" href="#">
                                        {item}
                                      </a>
                                    </li>
                                  );
                              })}
                            </div>
                          )}
                          {users &&
                          info.pageNow === calculatePage(users).length ? (
                            <li
                              onClick={() =>
                                changeNextpage(users, "user")
                              }
                              className="page-item disabled"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          ) : (
                            <li
                              onClick={() =>
                                changeNextpage(users, "user")
                              }
                              className="page-item"
                            >
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!(products && users) && <MySpinner />}
    </div>
  );
}

export default Manager;
