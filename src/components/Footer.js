import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <ul className="socials">
            <li><NavLink to="#">GitHub</NavLink></li>
            <li><NavLink to="#">LinkedIn</NavLink></li>
            <li><NavLink to="#">Twitter</NavLink></li>
            <li><a href="mailto:jshmoe@gmail.com">Email</a></li>
        </ul>
        {/* <p className="copyright">©2018 Josephine Shmoe</p> */}
    </footer>
);

export default Footer;
