import React from 'react'
import gear from '../images/gear.png'
import {Image} from 'react-bootstrap'
import { getUserTokenAction } from '../behaviors/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
  const {user} = getUserTokenReducer

  useEffect(() => {
    dispatch(getUserTokenAction())
  }, [])

  const goToDashboard = () => {
    navigate('/dashboard')
  }

  const goToProfilePage = () => {
    navigate('/profile')
  }

  return (
    // <div classNameName='myHeader'>
    //     <div classNameName='d-flex'>
    //         <Image style={{height: '50px', width: '70px'}} src={gear}/>
    //         &#160;&#160;
    //         <h2 classNameName='text-light mt-2'>TECHGEAR</h2>
    //     </div>
    // </div>
    <nav className="navbar mb-5 navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a style={{cursor: 'pointer'}} className="navbar-brand d-flex" onClick={goToDashboard}>
      <Image style={{height: '50px', width: '70px'}} src={gear}/>
      &#160;
      <h2>Tech Gear</h2>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        {user && (
            <div onClick={goToProfilePage} className='d-flex pt-2 px-3 authOption'>
              <Image style={{width: '30px', height: '30px'}} src={`http://localhost:3456/${user.imgUrl}`}/>
              &#160;&#160;
              <p className='mt-1'>{user.name}</p>
            </div>
        )}
        &#160;&#160;&#160;&#160;&#160;
        <a className="nav-link active mt-1" aria-current="page">Home</a>
        <a className="nav-link mt-1"  >Menu</a>
        <a className="nav-link mt-1"  >About</a>
        <a className="nav-link mt-1" >Contact</a>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header