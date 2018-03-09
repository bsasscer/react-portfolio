import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <ul className="social-icons">
            <li><NavLink to="#">Github</NavLink></li>
            <li><NavLink to="#">LinkedIn</NavLink></li>
            <li><NavLink to="#">Twitter</NavLink></li>
        </ul>
        <p className="email" ><a href="mailto:jshmoe@gmail.com">Email Josephine</a></p>
        <p className="copyright">©2018 Josephine Shmoe</p>
    </footer>
);

export default Footer;
