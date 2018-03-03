import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <ul className="social-icons">
            <li><NavLink to="#"></NavLink></li>
            <li><NavLink to="#"></NavLink></li>
            <li><NavLink to="#"></NavLink></li>
        </ul>
        <p>Copyright 2018 Josephine Shmoe</p>
    </footer>
);

export default Footer;
