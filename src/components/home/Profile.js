import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenAction } from '../../behaviors/actions/user'
import { useEffect } from 'react'
import {Button, Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const dispatch = useDispatch()
    const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
    const {user} = getUserTokenReducer

    const navigate = useNavigate()


    const convertGender = (gender) =>{
        if (gender === "MALE"){
            return "Nam"
        }
        return 'Nữ'
    }


    const goEditProfilePage = () => {
        navigate('/edit_profile')
    }

    useEffect(() => {
        dispatch(getUserTokenAction())
    }, [dispatch])

    return (
        <div className='container p-5 border bg-light'>
            {user && console.log(user)}
            {user && (
                <div className='d-flex'>
                    <Image style={{width: '10rem', height: '10rem', borderRadius: '50%'}} src={`http://localhost:3456/${user.imgUrl}`} className="img-thumbnail"/>
                    &#160;&#160;&#160;&#160;
                    <div>
                        <h1>{user.name}</h1>
                        <hr />
                        <p style={{fontSize: '20px'}} className="text-secondary"><i className="fa fa-map-marker text-danger" aria-hidden="true"></i> {user.address}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-mobile text-info" aria-hidden="true"></i> {user.phone}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-envelope text-danger" aria-hidden="true"></i> {user.email}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-intersex text-info" aria-hidden="true"></i><span className='text-secondary'>Gender:</span> {convertGender(user.gender)}</p>
                        <div className='d-flex'>
                            <Button onClick={goEditProfilePage}>Edit</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile