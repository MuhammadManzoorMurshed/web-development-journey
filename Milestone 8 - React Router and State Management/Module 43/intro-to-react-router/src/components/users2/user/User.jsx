import React, { Suspense, useState } from 'react';
import Users from '../../users/Users';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetailsCopy from '../../user-details-copy/UserDetailsCopy';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState();
    const [visitHome, setVisitHome] = useState();
    const location = useLocation();

    console.log("Loc:", location);

    console.log("User:", user);
    const {id, name, email, phone} = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }

    if(visitHome) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>

            <Link to={`/user/${id}`}>Show Details</Link>

            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>

            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetailsCopy userPromise={userPromise}></UserDetailsCopy>
                </Suspense>
            }

            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;