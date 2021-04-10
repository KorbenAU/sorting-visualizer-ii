import React from 'react';

const Bar = ({ value, comparing, switching }) => {
  let barClasses = ['border', 'mx-0.5', 'rounded-t-md'];

  if (comparing) {
    barClasses = barClasses.concat(['bg-blue_dark border-blue_dark']);
  }

  return (
    <div
      className={barClasses.join(' ')}
      style={{ height: `${value * 5}px`, width: '2%' }}
    ></div>
  );
};

export default Bar;
