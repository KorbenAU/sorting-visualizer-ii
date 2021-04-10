import React from 'react';

const Button = ({ onClick, children }) => {
  const btnClasses = [
    'bg-blue_light',
    'hover:bg-blue_dark',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-purple-600',
    'focus:ring-opacity-50',
    'border',
    'px-2',
    'py-1.5',
    'm-1',
    'rounded-md',
    'border-black',
    'shadow-lg',
  ];

  return (
    <button className={btnClasses.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
