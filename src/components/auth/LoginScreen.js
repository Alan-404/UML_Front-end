import React from 'react'
import { useState, useEffect } from 'react'
import {InputGroup, FormControl, Button, Image} from 'react-bootstrap'
import { loginAccountAction } from '../../behaviors/actions/account'
import logo from '../../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAccountReducer = useSelector(state => state.loginAccountReducer)
  const {success, token} = loginAccountReducer

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
    console.log({email, password})
    dispatch(loginAccountAction(email, password))
  }

  useEffect(() => {
    if (success){
      navigate('/dashboard')
    }
  }, [success])

  return (
    <div>
      
      <div className='text-center border d-flex' style={{margin: "auto auto", width: '60vw',height: '50vh',  marginTop: "15vh", borderRadius: '30px', boxShadow: "5px 10px 18px #888888"}}>
        <div className='w3-animate-top' style={{flex: '1', backgroundColor: 'red', borderRadius: '30px 0 0 30px'}}>
          <h2 className='text-light mt-5'>TECHGEAR</h2>
          <Image src={logo} style={{width: '15vw', height: '25vh'}}/>
        </div>
        <div style={{flex: '1'}} className="mt-2 p-3 w3-animate-bottom" >
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
            />
          </InputGroup>

          <Button className='w-100 mt-3' style={{borderRadius: '25px', backgroundColor: 'red', borderColor: 'red'}} onClick={loginAccount} variant="primary">Login Account</Button>{' '}
        </div>
      
      </div>
    </div>
  )
}

export default LoginScreen