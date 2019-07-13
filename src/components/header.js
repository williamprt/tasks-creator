import React from 'react';
import { Link } from 'react-router-dom';

import './toheader.css';

function Header() {
    return (
        <header id="header-box">
            <Link to="/">
                <span>TaskCreator</span>
            </Link>
            <Link to="/new">
                <button type="checkbox">create new task</button>
            </Link>
        </header>        
    )
}

export default Header;