import React, { useState, useEffect } from "react";
import { InputGroup, Button, FormControl, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { addEmployeeAction } from "../../behaviors/actions/user";
import { apiUrlImg } from "../../common/constants";
import { checkEmail, checkPhone } from "../../common/libs";
import MySpinner from "../effects/MySpinner";
const AddEmployee = () => {
  const dispatch = useDispatch();
  const addEmployeeReducer = useSelector((state) => state.addEmployeeReducer);
  const { success, error, loadingAddEmployee } = addEmployeeReducer;

  const [info, setInfo] = useState({
    submit: false
  })
  

  const [inputEmployee, setEmployeee] = useState({
    email: "",
    address: "",
    gender: "",
    password: "",
    phone: "",
    name: "",
  });
  const { email, address, gender, password, phone, name } = inputEmployee;
  const getInfo = (event) => {
    setEmployeee({
      ...inputEmployee,
      [event.target.name]: event.target.value,
    });
  };
  const getInfoOption = (event) => {
    setEmployeee({
      ...inputEmployee,
      gender: event.target.value,
    });
  };
  const addEmployee = () => {
    if (name === "" || email === "" || address === "" || gender === "" || password ==="" || phone===""){
      swal({
        title: "System Error",
        text: "Vui lòng nhập đầy đủ thông tin.",
        icon:'error',
        dangerMode: true
      })
      return
    }
    if (!checkEmail(email) || !checkPhone(phone)){
      return;
    }
    setInfo({
      ...info,
      submit: true
    })
    dispatch(addEmployeeAction(name,email, address,gender,password,phone));
  };

  useEffect(() => {
    if (success){
      swal({
        title: "Notification",
        text: "Thêm nhân viên thành công.",
        icon:'success'
      })
    }
    else if (success === false && info.submit){
      setInfo({
        ...info,
        submit: false
      })
      swal({
        title: "System Error",
        text: error,
        icon:'error',
        dangerMode: true
      })
    }
  }, [success])

  return (
    <div className="container p-2">
      <h1>Add New Employee</h1>
      <div className="d-flex mt-5d">
        <div>
          <Image
            style={{ width: "10rem", height: "10rem" }}
            src={`${apiUrlImg}/image/user/default/man.png`}
          />
        </div>
        &#160;&#160;&#160;&#160;
        <div style={{ width: "50%" }}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" >
              Name{" "}
            </InputGroup.Text>
            <FormControl name="name" onChange={getInfo} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" >
              Phone{" "}
            </InputGroup.Text>
            <FormControl name="phone" onChange={getInfo} />
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="input-group">
              <span className="input-group-text">Address</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="address"
                onChange={getInfo}
              ></textarea>
            </div>
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="input-group">
              <span className="input-group-text">Gender</span>
              <select
                name="gender"
                id="gender"
                className="form-control"
                onChange={getInfoOption}
              >
                <option>...</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="ORDER">Else...</option>
              </select>
            </div>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" >
              Email{" "}
            </InputGroup.Text>
            <FormControl name="email" type="text" onChange={getInfo} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password </InputGroup.Text>
            <FormControl name="password" type="password" onChange={getInfo} />
          </InputGroup>
          <Button onClick={addEmployee}>Add</Button>
        </div>
      </div>
      {loadingAddEmployee && <MySpinner />}
    </div>
  );
};

export default AddEmployee;
