import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <div className="navParent">
            <Link to="/">Dashboard</Link>
            <Link to="/create/">Create</Link>
            <Link to="/edit/">Edit</Link>
            <Link to="/help/">Help</Link>
        </div>
        <br/>
        <div className="navParent">
            <NavLink to="/" activeClassName = "isActive" exact>Dashboard</NavLink>
            <NavLink to="/create/" activeClassName = "isActive">Create</NavLink>
            <NavLink to="/edit/" activeClassName = "isActive">Edit</NavLink>
            <NavLink to="/help/" activeClassName = "isActive">Help</NavLink>
        </div>
    </div>
);

export default Header;
