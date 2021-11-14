import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <h1>Sarkar Food Delivery</h1>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <Link to="/users">Manage All Orders</Link>
                {/* <Link to="/users/add">Add User</Link> */}

                {/* <NavLink to="/inventory">Manage Inventory</NavLink> */}
                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;