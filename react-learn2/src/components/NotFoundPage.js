import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        Page not found
        <a href="/">Server side Linking</a>
        <br/>
        <Link to="/">Client side Linking</Link>
    </div>
)

export default NotFoundPage;