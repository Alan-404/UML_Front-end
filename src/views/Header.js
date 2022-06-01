import React from "react";
import gear from "../images/gear.png";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { getUserTokenAction } from "../behaviors/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";
import { checkTokenAction } from "../behaviors/actions/user";

const Header = () => {
  const [info, setInfo] = useState({
    showOptionForm: false,
  });

  const checkTokenReducer = useSelector((state) => state.checkTokenReducer);
  const { result } = checkTokenReducer;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserTokenReducer = useSelector((state) => state.getUserTokenReducer);
  const { user } = getUserTokenReducer;

  useEffect(() => {
    dispatch(getUserTokenAction());
    dispatch(checkTokenAction());
  }, []);

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const goToProfilePage = () => {
    setInfo({
      ...info,
      showOptionForm: !info.showOptionForm,
    });
  };

  const logoutAccount = () => {
    localStorage.removeItem("uml");
    navigate("/login");
  };

  let dropDownOption = (
    <div className="headerOption" style={{ zIndex: 10 }}>
      <ListGroup>
        <ListGroup.Item className="text-danger" action href="/profile">
          Profile
        </ListGroup.Item>
        <ListGroup.Item className="text-danger" action href="/manager_user">
          Cart List
        </ListGroup.Item>
        <ListGroup.Item className="text-danger" action onClick={logoutAccount}>
          Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );

  return (
    <nav className="navbar mb-5 navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a
          style={{ cursor: "pointer" }}
          className="navbar-brand d-flex"
          onClick={goToDashboard}
        >
          <Image style={{ height: "50px", width: "70px" }} src={gear} />
          &#160;
          <h2>Tech Gear</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            {user ? (
              <div
                onClick={goToProfilePage}
                className="d-flex pt-2 px-3 authOption"
              >
                <Image
                  style={{ width: "30px", height: "30px" }}
                  src={`http://localhost:3456/${user.imgUrl}`}
                />
                &#160;&#160;
                <p className="mt-1">{user.name}</p>
                <div>{info.showOptionForm && dropDownOption}</div>
              </div>
            ) : (
              <div className="mt-2">
                <Button>
                  <Link
                    to="/login"
                    className="text-danger text-decoration-none"
                  >
                    Đăng nhập
                  </Link>
                </Button>
              </div>
            )}
            &#160;&#160;&#160;&#160;&#160;
            <Link
              to="/dashboard"
              className="nav-link active mt-1"
              aria-current="page"
            >
              Home
            </Link>
            <Link to="/menu" className="nav-link mt-1">
              Menu
            </Link>
            {result && (
              <Link to="/manager" className="nav-link mt-1">
                Manager
              </Link>
            )}
            <Link to="/add_emp" className="nav-link mt-1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
