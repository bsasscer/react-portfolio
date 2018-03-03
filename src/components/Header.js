import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => (
    <header className="main-header">
        <NavLink exact to="/" activeStyle={{ background: 'tomato' }} className="site-logo">
            <img src={logo} alt="placeholder logo" />
        </NavLink>
        <ul className="main-nav">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </header>
);

export default Header;
