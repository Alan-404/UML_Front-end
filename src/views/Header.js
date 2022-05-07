import React from 'react'
import gear from '../images/gear.png'
import {Image} from 'react-bootstrap'
const Header = () => {
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
    <a className="navbar-brand" >
      Tech Gear
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto ">
        <a className="nav-link active" aria-current="page">Home</a>
        <a className="nav-link"  >Menu</a>
        <a className="nav-link"  >About</a>
        <a className="nav-link" >Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header