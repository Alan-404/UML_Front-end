import React, { useState } from "react";
import { InputGroup, Button, FormControl, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const addEmployeeReducer = useSelector((state) => state.AddEmployee);
//   const { success } = addEmployeeReducer;

//   const [inputEmployee, setEmployeee] = useState({
//     email: "",
//     address: "",
//     gender: "",
//     password: "",
//     phone: "",
//     name: "",
//   });
//   const { email, address, gender, password, phone, name } = inputEmployee;
//   const getInfo = (event) => {
//     setEmployeee({
//       ...inputEmployee,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const getInfoOption = (event) => {
//     setEmployeee({
//       ...inputEmployee,
//       gender: event.target.value,
//     });
//   };
//   const addEmployee= () => {
//     dispatch(addUserAction(name, email, address, phone, gender, password))
// }

  return (
    <div className="container p-2">
      <h1>Add New Employee</h1>
      <div className="d-flex mt-5d">
        <div>
          <Image
            style={{ width: "10rem", height: "10rem" }}
            src={"http://localhost:3456/image/user/default/man.png"}
          />
          <Form.Group controlId="formFile" className="mb-3 mt-3">
            <Form.Control type="file" accept="*.jpg*.png" />
          </Form.Group>
        </div>
        &#160;&#160;&#160;&#160;
        <div style={{ width: "50%" }}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name </InputGroup.Text>
            <FormControl name="name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Phone </InputGroup.Text>
            <FormControl name="phone" />
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="input-group">
              <span className="input-group-text">Address</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="description"
              ></textarea>
            </div>
          </InputGroup>
          <InputGroup className="mb-3">
            <div className="input-group">
              <span className="input-group-text">Gender</span>
              <select name="gender" id="gender" className="form-control">
                <option>...</option>
                <option value="MALE">Man</option>
                <option value="FEMALE">Woman</option>
                <option value="ORDER">Else...</option>
              </select>
            </div>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password </InputGroup.Text>
            <FormControl name="password" type="password" />
          </InputGroup>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
