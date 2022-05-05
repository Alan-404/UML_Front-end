import React from 'react'
import {Image} from 'react-bootstrap'
import gear from '../../images/gear.png'
const Dashboard = () => {
  return (
    <div>
        <div className='backgroundDashboard'>
            <div className='px-5' style={{paddingTop: '20vh'}}>
                <div className='d-flex'>
                    <Image style={{width: '30vw', height: '40vh'}} src={gear}/>
                    <div>
                        <h1 style={{fontSize: '110px'}} className='text-light'>TECHGEAR</h1>
                        <h2 style={{fontSize: '50px', color: 'gray'}}>Sự Bùng Nổ Công Nghệ</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard