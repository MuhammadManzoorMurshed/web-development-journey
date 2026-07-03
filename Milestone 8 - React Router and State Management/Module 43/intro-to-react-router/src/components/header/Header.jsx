import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This is a header</h3>

            <nav style={{
                listStyle: 'none',
                display: 'flex',
                gap: '15px'
            }}>
                {/* <li><a href="/">Home</a></li>
                <li><a href="/mobiles">Mobiles</a></li>
                <li><a href="/laptops">Laptops</a></li>
                <li><a href="/login">Login</a></li> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to={'/laptops'}>Laptops</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/user2'}>Users2</NavLink>

                <NavLink to={'/posts'}>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;