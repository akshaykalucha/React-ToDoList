import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}


//headerstyle
const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

//link style
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


export default Header;