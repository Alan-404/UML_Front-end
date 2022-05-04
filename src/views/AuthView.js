import React from 'react'
import LoginScreen from '../components/auth/LoginScreen'
const AuthView = ({authRoute}) => {
  let body = (
    <div>
      {authRoute === 'login' && <LoginScreen />}
    </div>
  )
  return (
    <div>
      {body}
    </div>
  )
}

export default AuthView