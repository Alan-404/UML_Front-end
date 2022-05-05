import React from 'react'
import gear from '../../images/gear.png'
import { Image, FloatingLabel, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import accountLogo from '../../images/account.png'
const RegisterScreen = () => {
    const [imageShow, setImage] = useState(accountLogo)
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
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingAddress"
                        label="Address"
                        className="mb-3 w3-animate-right"
                    >
                        <Form.Control type="text" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone Number"
                        className="mb-3 w3-animate-left"
                    >
                        <Form.Control type="text" />
                    </FloatingLabel>
                    <Form.Select className='mb-3 w3-animate-right' aria-label="Default select example">
                        <option>Giới Tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="order">Khác...</option>
                    </Form.Select>
                    <FloatingLabel
                        controlId="floatingEmail"
                        label="Email"
                        className="mb-3 w3-animate-left"
                    >
                        <Form.Control type="email" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3 w3-animate-right"
                    >
                        <Form.Control type="password" />
                    </FloatingLabel>



                    <div className='w3-animate-bottom'>
                        <div className='d-flex'>
                            <p>Bạn đã có tài khoản? </p>
                            &#160;
                            <Link to='/login'>Đăng nhập</Link>
                        </div>
                        <Button variant="success">Đăng Ký</Button>{' '}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen