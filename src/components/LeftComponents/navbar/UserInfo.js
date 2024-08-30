import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/reducers/userReducer';

/**
 * Component to display user information.
 */
export default function UserInfo() {
    // Accessing user data from the Redux store
    const user = useSelector(userSelector);

    return (
        <>
            {/* Container for user information */}
            <div className='user-info'>
                {/* Displaying user profile picture */}
                <img
                    alt='UserPic'
                    src={user.picture}
                />
                {/* Displaying user name */}
                <b>{user.name}</b>
            </div>
        </>
    );
}
