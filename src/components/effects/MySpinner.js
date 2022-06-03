import React from 'react'
import { Spinner } from 'react-bootstrap'
import './spinner.css'
const MySpinner = () => {
  return (
    <div className='dark-overlay'>
        <Spinner className='mySpinner' animation="grow" variant="danger" />
    </div>
  )
}

export default MySpinner