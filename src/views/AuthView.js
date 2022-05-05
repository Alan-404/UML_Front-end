import React from 'react'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
const AuthView = ({authRoute}) => {
  let body = (
    <div>
      {authRoute === 'login' && <LoginScreen />}
      {authRoute === 'register' && <RegisterScreen />}
    </div>
  )
  return (
    <div>
      {body}
    </div>
  )
}

export default AuthView