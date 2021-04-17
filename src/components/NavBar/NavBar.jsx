import React from 'react';
import NavItem from './NavItem';

const NavBar = ({ navConfig }) => {
    return (
        <nav className="bg-white shadow">
            <div className="2xl:max-w-7xl md:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* <div className="flex-shrink-0">
                            <img
                                className="h-auto w-32"
                                src="images/rb-logo.svg"
                                alt="Resume bot logo"
                            ></img>
                        </div> */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-baseline space-x-6">
                                {navConfig.map((item, index) => (
                                    <NavItem
                                        key={index}
                                        href={item.href}
                                        text={item.text}
                                        component={item.component}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
