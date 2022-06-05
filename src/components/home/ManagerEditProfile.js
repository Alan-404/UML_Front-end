import React from "react";
import { Image, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByIdAction } from "../../behaviors/actions/user";
import { useEffect, useState } from "react";
import { editEmployeeAction } from "../../behaviors/actions/user";
import { checkPhone } from "../../common/libs";
import { apiUrlImg } from "../../common/constants";
const ManagerEditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUserByIdAction(searchParams.get("id")));
  }, [dispatch]);

  const getUserByIdReducer = useSelector((state) => state.getUserByIdReducer);

  const { user } = getUserByIdReducer;

  const editEmployeeReducer = useSelector((state) => state.editEmployeeReducer);
  const { successEdit } = editEmployeeReducer;

  useEffect(() => {
    if (successEdit) {
      window.location.reload()
    }
  }, [successEdit]);

  const [searchParams] = useSearchParams();

  const [infoUser, setInfo] = useState({
    name: "",
    address: "",
    gender: "",
    id: "",
    password: "",
    phone: "",
    imgUrl: "",
    imageFile: File,
  });

  const [infor, setState] = useState({
    click: false,
  });
  const getInfor = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "name") {
      setInfo({
        ...infoUser,
        name: value,
      });
    } else if (name === "address") {
      setInfo({
        ...infoUser,
        address: value,
      });
    } else if (name === "phone") {
      setInfo({
        ...infoUser,
        phone: value,
      });
    } else if (name === "password") {
      setInfo({
        ...infoUser,
        password: value,
      });
    }
  };

  const getImage = (event) => {

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      setInfo({
        ...infoUser,
        imgUrl: reader.result,
        imageFile: event.target.files[0],
      });
    };
  };

  const editUser = () => {
    if (!checkPhone(infoUser.phone)){
      return
    }
    setState({
      ...infor,
      click: true,
    });
    dispatch(
      editEmployeeAction(
        infoUser.id,
        infoUser.name,
        infoUser.email,
        infoUser.address,
        infoUser.phone,
        infoUser.gender,
        infoUser.imageFile,
        infoUser.password
      )
    );
  };
  useEffect(() => {
    if (localStorage.getItem('auth') === "false"){
      navigate('/forbidden')
    }
  }, [])

  const getInfoOption = (event) => {
    setInfo({
      ...infoUser,
      gender: event.target.value,
    });
  };

  const convertGender = (gender) => {
    if (gender === "MALE") {
      return "Male";
    }
    return "Female";
  };

  useEffect(() => {
    if (user) {
      setInfo({
        ...infoUser,
        name: user.name,
        address: user.address,
        gender: user.gender,
        id: user.id,
        imgUrl: `${apiUrlImg}/${user.imgUrl}`,
        password: user.password,
        phone: user.phone,
        email: user.email,
      });
    }
  }, [user]);

  return (
    <div className="container p-2">
      <h1>Edit User Informations</h1>
      {successEdit === false && infor.click === true && (
        <span className="text-danger" style={{ fontSize: "25px" }}>
          Fail to edit
        </span>
      )}
      {user && infoUser && (
        <div className="d-flex mt-5">
          <div>
            <Image
              style={{ width: "10rem", height: "10rem" }}
              src={infoUser.imgUrl}
            />
            <Form.Group controlId="formFile" className="mb-3 mt-3">
              <Form.Control
                onChange={(e) => getImage(e)}
                type="file"
                accept="*.jpg*.png"
              />
            </Form.Group>
          </div>
          &#160;&#160;&#160;&#160;
          <div style={{ width: "50%" }}>
            <h3>
              <span className="text-secondary">Email: </span>
              {infoUser.email}
            </h3>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <FormControl
                placeholder="Enter your name here..."
                value={infoUser.name}
                onChange={getInfor}
                name="name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Phone </InputGroup.Text>
              <FormControl
                placeholder="Enter your name here..."
                value={infoUser.phone}
                onChange={getInfor}
                name="phone"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Address </InputGroup.Text>
              <FormControl
                placeholder="Enter your name here..."
                value={infoUser.address}
                onChange={getInfor}
                name="address"
              />
            </InputGroup>
            <Form.Select
              onChange={getInfoOption}
              className="mb-3 w3-animate-right"
            >
              <option value={infoUser.gender}>
                {convertGender(infoUser.gender)}
              </option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="ORDER">Else...</option>
            </Form.Select>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Password </InputGroup.Text>
              <FormControl
                onChange={getInfor}
                name="password"
                type="password"
              />
            </InputGroup>
            <Button onClick={editUser}>Save changes</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerEditProfile;
