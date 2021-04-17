import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ href, text }) => {
    return (
        <NavLink
            exact
            className="text-rb-dark-blue text-base hover:border-10 hover:border-blue_dark"
            activeClassName="text-blue_light border border-org_dark"
            to={href}
        >
            {text}
        </NavLink>
    );
};

export default NavItem;
