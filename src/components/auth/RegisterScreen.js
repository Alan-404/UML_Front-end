import React from 'react'
import gear from '../../images/gear.png'
import { Image, FloatingLabel, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {addUserAction} from '../../behaviors/actions/user'
import { useNavigate } from 'react-router-dom'
import { checkEmail, checkPhone } from '../../common/libs'
import swal from 'sweetalert';
import MySpinner from '../effects/MySpinner'
const RegisterScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addUserReducer = useSelector(state => state.addUserReducer)
    const {success, error, loadingAddUser} = addUserReducer

    const [inputUser, setUser] = useState({
        email: '',
        address: '',
        gender: '',
        password: '',
        phone: '',
        name: ''
    })

    const [info, setInfo] = useState({
        submit: false
    })

    const {email, address, gender, password, phone, name} = inputUser

    const getInfo = (event) => {
        setUser({
            ...inputUser,
            [event.target.name]: event.target.value
        })
    }

    const getInfoOption = (event) => {
        setUser({
            ...inputUser,
            gender: event.target.value
        })
    }

    const addUser = () => {
        if (!name || !email || !address || !phone || !gender || !password){
            swal({
                title: "Error System",
                text: "Không được để trống.",
                icon: "error",
                dangerMode: true
            })
            return
        }
        if (!checkEmail(email)){
            return;
        }
        if (!checkPhone(phone)){
            return;
        }

        setInfo({
            ...info,
            submit: true
        })
        
        dispatch(addUserAction(name, email, address, phone, gender, password))
    }

    useEffect(() => {
        if (success){
            navigate('/login')
        }
        else if (success === false && info.submit){
            setInfo({
                ...info,
                submit: false
            })
            swal({
                title: "Error System",
                text: error,
                icon: "error",
                dangerMode: true
            })
        }
    }, [success, navigate])



    return (
        <div className='regBG'>
            <div className='border p-3 registerForm' >
                <div className='w3-animate-top'>
                    <div className='d-flex'>
                        <Image style={{width: '60px', height: '45px'}} src={gear}/>
                        &#160;
                        <h1>TECH<span className='text-danger'>GEAR</span></h1>
                    </div>
                    
                    <h1 className='mb-3 w3-animate-top'>Đăng Ký Người Dùng</h1>
                </div>
                <div>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Fullname"
                        className="mb-3 w3-animate-left"
                    >
                        <Form.Control value={name} name="name" onChange={getInfo} type="text"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingAddress"
                        label="Address"
                        className="mb-3 w3-animate-right"
                    >
                        <Form.Control value={address} name="address" onChange={getInfo} type="text" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone Number"
                        className="mb-3 w3-animate-left"
                    >
                        <Form.Control value={phone} name="phone" onChange={getInfo} type="text" />
                    </FloatingLabel>
                    <Form.Select onChange={getInfoOption} className='mb-3 w3-animate-right' aria-label="Default select example">
                        <option>Giới Tính</option>
                        <option value="MALE">Nam</option>
                        <option value="FEMALE">Nữ</option>
                        <option value="ORDER">Khác...</option>
                    </Form.Select>
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Email"
                        className="mb-3 w3-animate-left"
                    >
                        <Form.Control value={email} name="email" onChange={getInfo} type="email" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3 w3-animate-right"
                    >
                        <Form.Control value={password} name="password" onChange={getInfo} type="password" />
                    </FloatingLabel>



                    <div className='w3-animate-bottom'>
                        <div className='d-flex'>
                            <p>Bạn đã có tài khoản? </p>
                            &#160;
                            <Link to='/login'>Đăng nhập</Link>
                        </div>
                        <Button onClick={addUser} variant="success">Đăng Ký</Button>{' '}
                    </div>
                    
                </div>
            </div>
            {loadingAddUser && <MySpinner />}
        </div>
    )
}

export default RegisterScreen