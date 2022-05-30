import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenAction } from '../../behaviors/actions/user'
import { useEffect } from 'react'
import {Button, Image} from 'react-bootstrap'

const Profile = () => {
    const dispatch = useDispatch()
    const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
    const {user} = getUserTokenReducer


    const convertGender = (gender) =>{
        if (gender === "MALE"){
            return "Nam"
        }
        return 'Nữ'
    }

    useEffect(() => {
        dispatch(getUserTokenAction())
    }, [dispatch])

    return (
        <div className='container p-5 border bg-light'>
            {user && (
                <div className='d-flex'>
                    <Image style={{width: '10rem', height: '10rem', borderRadius: '50%'}} src={user.imgUrl} class="img-thumbnail"/>
                    &#160;&#160;&#160;&#160;
                    <div>
                        <h1>{user.name}</h1>
                        <hr />
                        <p style={{fontSize: '20px'}} className="text-secondary"><i className="fa fa-map-marker text-danger" aria-hidden="true"></i> {user.address}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-mobile text-info" aria-hidden="true"></i> {user.phone}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-envelope text-danger" aria-hidden="true"></i> {user.email}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-intersex text-info" aria-hidden="true"></i><span className='text-secondary'>Giới tính:</span> {convertGender(user.gender)}</p>
                        <div className='d-flex'>
                            <Button>Sửa Thông Tin</Button>
                            &#160;&#160;&#160;
                            <Button>Đổi Password</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile