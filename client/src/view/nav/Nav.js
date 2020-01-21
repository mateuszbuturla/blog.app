import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <p className="nav__header">Blog.app</p>
            <ul className="nav__list">
                <li><Link className="nav__link" to="/">Home</Link></li>
                <li><Link className="nav__link" to="/addpost">Add Post</Link></li>
                <li><Link className="nav__link" to="/posts">Posts</Link></li>
                <li><Link className="nav__link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
