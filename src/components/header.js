import React from 'react';
import { Link } from 'react-router-dom';

import './toheader.css';

function Header() {
    return (
        <header id="header-box">
            <Link to="/">
                <button>TaskCreator</button>
            </Link>
            <Link to="/new">
                <button>create new task</button>
            </Link>
        </header>        
    )
}

export default Header;