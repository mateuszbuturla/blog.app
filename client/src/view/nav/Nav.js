import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

import navOpen from './navOpen.svg';
import navClose from './navClose.svg';

class Nav extends React.Component {

    state = {
        mobileNavShow: false,
    }

    switchNav() {
        const { mobileNavShow } = this.state;
        this.setState({ mobileNavShow: !mobileNavShow });
    }

    turnOffNav() {
        this.setState({ mobileNavShow: false });
    }

    render() {
        const { mobileNavShow } = this.state;
        return (
            <React.Fragment>
                <nav className="nav">
                    <p className="nav__header">Blog.app</p>
                    <ul className={`nav__list${mobileNavShow === true ? ' nav__list--active' : ''}`}>
                        <li><Link onClick={this.turnOffNav.bind(this)} key='home' className="nav__link" to="/">Home</Link></li>
                        <li><Link onClick={this.turnOffNav.bind(this)} key='addpost' className="nav__link" to="/addpost">Add Post</Link></li>
                        <li><Link onClick={this.turnOffNav.bind(this)} key='posts' className="nav__link" to="/posts">Posts</Link></li>
                        <li><Link onClick={this.turnOffNav.bind(this)} key='contact' className="nav__link" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <button className="burger-menu-button" onClick={this.switchNav.bind(this)}>
                    <div>
                        <img className={`burger-menu-button__icon${mobileNavShow === false ? ' burger-menu-button__icon--active' : ''}`} src={navOpen} alt="open menu icon" />
                        <img className={`burger-menu-button__icon${mobileNavShow === true ? ' burger-menu-button__icon--active' : ''}`} src={navClose} alt="close menu icon" />
                    </div>
                </button>
            </React.Fragment >
        );
    }
}

export default Nav;
