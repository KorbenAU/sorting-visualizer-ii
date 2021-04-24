import React from 'react';
import NavItem from './NavItem';

const NavBar = ({ navConfig }) => {
    return (
        <nav className="bg-white shadow">
            <div className="2xl:max-w-7xl md:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0 flex-row items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                />
                            </svg>
                            <span className="px-2 text-2xl font-extrabold">
                                Sorting Visualizer
                            </span>
                            {/* <img
                                className="h-auto w-32"
                                src="images/rb-logo.svg"
                                alt="Resume bot logo"
                            ></img> */}
                        </div>
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
