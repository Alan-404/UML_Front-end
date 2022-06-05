import React from 'react'
import { useState, useEffect } from 'react'
import {InputGroup, FormControl, Button, Image} from 'react-bootstrap'
import { loginAccountAction } from '../../behaviors/actions/user'
import logo from '../../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MySpinner from '../effects/MySpinner'
import { checkEmail } from '../../common/libs'
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login'

const LoginScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAccountReducer = useSelector(state => state.loginAccountReducer)
  const {success, loadingLoginAccount, error} = loginAccountReducer

  

  const [account, setAccount] = useState({
    email: '',
    password: ''
  })

  const {email, password} = account



  const getInfoAccount = (event) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value
    })
  }

  const loginAccount = () => {
    if (!checkEmail(email)){
      return
    }
    dispatch(loginAccountAction(email, password))
  }

  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      loginAccount()
    }
  }

  useEffect(() => {
    if (success){
      navigate('/dashboard')
    }
    else if (success === false){
      swal({
        title: "Error System",
        text: "Tài Khoản hoặc Mật Khẩu sai, vui lòng thử lại!",
        icon: 'error',
        dangerMode: true
      })
    }
  }, [success,navigate])

  const getResponseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div>
      
      <div className='text-center border d-flex' style={{margin: "auto auto", width: '60vw',height: '50vh',  marginTop: "15vh", borderRadius: '30px', boxShadow: "5px 10px 18px #888888"}}>
        <div className='w3-animate-top' style={{flex: '1', backgroundColor: 'red', borderRadius: '30px 0 0 30px'}}>
          <h2 className='text-light mt-5'>TECHGEAR</h2>
          <Image src={logo} style={{width: '15vw', height: '25vh'}}/>
        </div>
        <div style={{flex: '1'}} className="mt-1 p-3 w3-animate-bottom" >
          <i className="fa fa-user border p-4 mb-3" style={{fontSize: '70px' ,borderRadius: '50%'}} aria-hidden="true"></i>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="fa fa-envelope text-danger" aria-hidden="true"></i></InputGroup.Text>
            <FormControl
              name = "email"
              value = {email}
              type='email'
              placeholder="Enter your email"
              onChange={getInfoAccount}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i className="fa fa-key text-warning" aria-hidden="true"></i></InputGroup.Text>
            <FormControl
              name = "password"
              value = {password}
              type='password'
              placeholder="Enter your password"
              onChange={getInfoAccount}
              onKeyDown={handleEnter}
            />
          </InputGroup>
          <div className='d-flex'>
            <p style={{fontSize: '5px !important'}}>Bạn không có tài khoản? </p>
            &#160;
            <Link style={{fontSize: '5px !important'}} to='/register'>Đăng ký</Link>
          </div>
          
          <Button className='w-100 mt-1 text-light mb-4' style={{borderRadius: '25px', backgroundColor: 'red', borderColor: 'red'}} onClick={loginAccount} variant="primary">Login Account</Button>{' '}
          <GoogleLogin
            clientId="510817171393-46042nleupp0fqlop2dv99v6qdnmhukg.apps.googleusercontent.com"
            buttonText='Login with Google'
            cookiePolicy={"single_host_origin"}
            onSuccess={getResponseGoogle}
            onFailure={getResponseGoogle}
             />
        </div>
      </div>
      {loadingLoginAccount && (<MySpinner />)}
    </div>
  )
}

export default LoginScreen