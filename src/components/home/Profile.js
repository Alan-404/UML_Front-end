import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenAction } from '../../behaviors/actions/user'
import { useEffect } from 'react'

const Profile = () => {
    const dispatch = useDispatch()
    const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
    const {user} = getUserTokenReducer

    useEffect(() => {
        dispatch(getUserTokenAction())
    }, [dispatch])

    return (
        <div className='container p-5 border bg-light'>
            {user && (
                <div className='d-flex'>
                    <img style={{width: '10rem', height: '10rem', borderRadius: '50%'}} src={user.imgUrl} class="img-thumbnail"></img>
                    &#160;&#160;&#160;&#160;
                    <div>
                        <h1>{user.name}</h1>
                        <p style={{fontSize: '20px'}} className="text-secondary"><i className="fa fa-map-marker text-danger" aria-hidden="true"></i> {user.address}</p>
                        <p style={{fontSize: '20px'}}><i className="fa fa-mobile text-info" aria-hidden="true"></i> {user.phone}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile