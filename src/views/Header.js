import React from 'react'
import gear from '../images/gear.png'
import {Image} from 'react-bootstrap'
const Header = () => {
  return (
    <div className='myHeader'>
        <div className='d-flex'>
            <Image style={{height: '50px', width: '70px'}} src={gear}/>
            &#160;&#160;
            <h2 className='text-light mt-2'>TECHGEAR</h2>
        </div>
    </div>
  )
}

export default Header