import React, { use } from 'react';
import User from './user/User';

const Users2 = ({ userPromise }) => {
    const users = use(userPromise);
    console.log("User2: ", users);

    return (
        <div>
            <h2>This is user 2</h2>

            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users2;