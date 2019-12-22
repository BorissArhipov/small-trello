import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <Link className="link" to='/'>
            <div className="header">
                <h2>Home</h2>
            </div>
        </Link>
    );
}

export default Header;