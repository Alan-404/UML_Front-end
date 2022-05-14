import React from "react";
import "./Manager.css";
function Manager() {
  const type_table = false;
  return (
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
          <div id="navbar2" className="d-flex justify-content-end pe-4">
            {" "}
            <span className="far fa-user-circle "></span>{" "}
          </div>
        </div>
        <div className="d-md-flex">
          <ul id="navbar-items" className="p-0">
            <li>
              {" "}
              <span className="fas fa-th-list"></span>{" "}
              <span className="ps-3 name">Product</span>{" "}
            </li>
            <li>
              {" "}
              <span className="fas fa-chart-line"></span>{" "}
              <span className="ps-3 name">User</span>{" "}
            </li>
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
              {type_table ? (
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
                      <tr style={{ lineHeight: "3.5" }}>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">CPU</span>
                        </td>
                        <td>
                          <span className="bg-blight">Intel</span>
                        </td>
                        <td>
                          <span className="bg-bdark">
                            CPU Intel Core i7-9700K (3.6GHz Turbo Up To 4.9GHz,
                            8 nhân 8 luồng, 16MB Cache, Coffee Lake)
                          </span>
                        </td>
                        <td>
                          <span className="bg-blight">8.000.000</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">3 years</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/product3.webp")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                      <tr style={{ lineHeight: "3.5" }}>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">CPU</span>
                        </td>
                        <td>
                          <span className="bg-blight">Intel</span>
                        </td>
                        <td>
                          <span className="bg-bdark">I7 8700</span>
                        </td>
                        <td>
                          <span className="bg-blight">8.000.000</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">3 years</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/product3.webp")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                      <tr style={{ lineHeight: "3.5" }}>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">CPU</span>
                        </td>
                        <td>
                          <span className="bg-blight">Intel</span>
                        </td>
                        <td>
                          <span className="bg-bdark">I7 8700</span>
                        </td>
                        <td>
                          <span className="bg-blight">8.000.000</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">3 years</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/product3.webp")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
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
                      <tr>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">John</span>
                        </td>
                        <td>
                          <span className="bg-blight">junrante@gmail.com</span>
                        </td>
                        <td>
                          <span className="bg-bdark">
                            Hẻm 96 Quang Trung Phường Tăng Nhơn Phú B, Thành Phố
                            Thủ Đức, TP. Hồ Chí Minh
                          </span>
                        </td>
                        <td>
                          <span className="bg-blight">0799608210</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">Men</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/avt.png")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">John</span>
                        </td>
                        <td>
                          <span className="bg-blight">junrante@gmail.com</span>
                        </td>
                        <td>
                          <span className="bg-bdark">
                            Hẻm 96 Quang Trung Phường Tăng Nhơn Phú B, Thành Phố
                            Thủ Đức, TP. Hồ Chí Minh
                          </span>
                        </td>
                        <td>
                          <span className="bg-blight">0799608210</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">Men</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/avt.png")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="bg-blight">235</span>
                        </td>
                        <td>
                          <span className="bg-bdark">John</span>
                        </td>
                        <td>
                          <span className="bg-blight">junrante@gmail.com</span>
                        </td>
                        <td>
                          <span className="bg-bdark">
                            Hẻm 96 Quang Trung Phường Tăng Nhơn Phú B, Thành Phố
                            Thủ Đức, TP. Hồ Chí Minh
                          </span>
                        </td>
                        <td>
                          <span className="bg-blight">0799608210</span>
                        </td>
                        <td className="text-center px-0 bg-bdark">Men</td>
                        <td className="text-center">
                          <img
                            src={require("../../assets/img/avt.png")}
                            width={70}
                            height={50}
                          ></img>
                        </td>
                        <td className="text-center">
                          <span className="fas fa-ellipsis-h"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
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
  );
}

export default Manager;
