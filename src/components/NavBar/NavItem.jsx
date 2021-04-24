import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ href, text }) => {
    return (
        <NavLink
            exact
            className="text-blue_dark text-xl hover:border-10 hover:border-blue_dark "
            activeClassName="font-bold"
            to={href}
        >
            {text}
        </NavLink>
    );
};

export default NavItem;
