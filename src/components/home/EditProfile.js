import React from 'react'
import {Image, Button, Form} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenAction } from '../../behaviors/actions/user'
import { useEffect, useState } from 'react'
import { editUserAction } from '../../behaviors/actions/user'

const EditProfile = () => {
  const dispatch = useDispatch()
  const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
  const {user} = getUserTokenReducer

  const [inputUser, setUser] = useState({
    email: '',
    address: '',
    gender: '',
    password: '',
    phone: '',
    name: '',
    fileImage: ''
  })

  const [info, setInfo] = useState({
    imgShow: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/User-info.svg/768px-User-info.svg.png',
  })


  const getInfoOption = (event) => {
    setUser({
        ...inputUser,
        gender: event.target.value
    })
}

  const getImage = (event) => {
    setUser({
      ...info,
      fileImage: event.target.files[0]
    })
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			setInfo({
        ...info,
        imgShow: reader.result
      })
		}
  }

  const getInforUser = (event) => {
    var name = event.target.name
    var value = event.target.value
    if (name === "name"){
      setUser({
        ...inputUser,
        name: value
      })
    }
    else if (name === "phone"){
      setUser({
        ...inputUser,
        phone: value
      })
    }
    else if (name === "address"){
      setInfo({
        ...inputUser,
        address: value
      })
    }
    else if (name === "password"){
      setUser({
        ...inputUser,
        password: value
      })
    }
  }

  const submitEditUser = () => {
    const name = inputUser.name
    const phone = inputUser.phone
    const address = user.address
    const password = inputUser.password
    const gender = inputUser.gender

    console.log({id: user.id, name, phone, address, gender, password, imageFile: inputUser.fileImage})

    dispatch(editUserAction(user.id,name, address, phone, gender, inputUser.fileImage, password))
  }

  useEffect(() => {
    dispatch(getUserTokenAction())
  }, [dispatch])

  return (
    <div className='container p-2'>
      {user && (
        <div className='d-flex'>
          <div>
            <Image style={{width: '10rem', height: '10rem'}} src={info.imgShow}/>
            <Form.Group controlId="formFile" className="mb-3 mt-3" >
              <Form.Control onChange={(e) => getImage(e)} type="file" accept='*.jpg.png' />
            </Form.Group>
          </div>
          &#160;&#160;&#160;&#160;
          <div style={{width: '50%'}}>
            <h3><span className='text-secondary'>Email Người Dùng:</span> {user.email} </h3>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Tên</span>
              <input onChange={getInforUser} name="name" type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Số Điện Thoại</span>
              <input onChange={getInforUser} name="phone" type="text" className="form-control" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Địa Chỉ</span>
              <input onChange={getInforUser} name="address" type="text" className="form-control" />
            </div>
            <Form.Select onChange={getInfoOption} className='mb-3 w3-animate-right' aria-label="Default select example">
              <option>Giới Tính</option>
              <option value="MALE">Nam</option>
              <option value="FEMALE">Nữ</option>
              <option value="ORDER">Khác...</option>
            </Form.Select>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Password</span>
              <input onChange={getInforUser} name="password" type="password" className="form-control" />
            </div>
            <Button onClick={submitEditUser}>Sửa Thông Tin</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditProfile