import React from "react";
import "./Manager.css";
import { Button, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../behaviors/actions/product";
import { useSelector } from "react-redux";
import { deleteProductReducer } from "../../behaviors/reducers/product";
import { deleteProductAction } from "../../behaviors/actions/product";
import { getAllUsersAction } from "../../behaviors/actions/user";
import { getProductsReducer } from "../../behaviors/reducers/user";
import { useNavigate } from "react-router-dom";

function Manager({ types_table }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getProductsReducer = useSelector((state) => state.getProductsReducer);
  const { products } = getProductsReducer;

  const getAllUsersReducer = useSelector((state) => state.getAllUsersReducer);
  const { users } = getAllUsersReducer;

  const deleteProductReducer = useSelector(
    (state) => state.deleteProductReducer
  );
  const { success } = deleteProductReducer;

  const deleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };


  const goEditProductPage = (id) => {
    navigate({
      pathname: '/edit_product',
      search: `?id=${id}`
    })
  }

  useEffect(() => {
    dispatch(getProductsAction(0));
    dispatch(getAllUsersAction(0));
  }, [dispatch, success]);

  const [list, setList] = useState(0);
  console.log(list);
  const type_table = false;
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
                TechGear<span className="fs13 pe-2">.com</span>
              </a>{" "}
            </div>
          </div>
          <div className="d-md-flex">
            <ul id="navbar-items" className="p-0">
              {types_table &&
                types_table.map((type_table, index) => (
                  <li key={index} onClick={() => setList(index)}>
                    {" "}
                    <span className="fas fa-th-list"></span>{" "}
                    <span className="ps-3 name">{type_table}</span>{" "}
                  </li>
                ))}
            </ul>
            <div id="topnavbar">
              <div className="d-flex align-items-center mb-3 px-md-3 px-2">
                {" "}
                <span className="text-uppercase fs13 fw-bolder pe-3">
                  search<span className="ps-1"></span>
                </span>
                <form className="example d-flex align-items-center">
                  {" "}
                  <input type="text" placeholder="...." name="search" />{" "}
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>{" "}
                </form>
              </div>
              <div className="table-responsive px-2">
                {list == 0 ? (
                  <div>
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
                        {products &&
                          products.map((product, index) => (
                            <tr key={product.id} style={{ lineHeight: "3.5" }}>
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
                                  src={`http://localhost:3456/${product.imageUrls}`}
                                  width={70}
                                  height={50}
                                  atl=""
                                />
                              </td>
                              <td className="text-center">
                                <div className="buttonAction">
                                  <Button
                                    onClick={() => deleteProduct(product.id)}
                                  >
                                    Delete
                                  </Button>
                                  &#160;&#160;
                                  <Button onClick={() => goEditProductPage(product.id)}>Edit</Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                ) : (
                  <div>
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
                          users.map((user, index) => (
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
                                  src={`http://localhost:3456/${user.imgUrl}`}
                                  width={70}
                                  height={50}
                                />
                              </td>
                              <td className="text-center">
                                <div className="buttonAction">
                                  <Button>Delete</Button>
                                  &#160;&#160;
                                  <Button>Edit</Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
