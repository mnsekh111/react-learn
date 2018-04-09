import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Header = () => (
    <div>
        Expensify App
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
        <br/>
        <NavLink to="/" activeClassName = "isActive" >Dashboard</NavLink>
        <NavLink to="/create" activeClassName = "isActive">Create</NavLink>
        <NavLink to="/edit" activeClassName = "isActive">Edit</NavLink>
        <NavLink to="/help" activeClassName = "isActive">Help</NavLink>
    </div>
);

export default Header;
