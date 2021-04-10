import React from 'react';

const Bar = ({ number }) => {
  const { value, comparing, switching } = number;

  let barClasses = ['border', 'mx-0.5', 'rounded-t-md'];

  if (comparing) {
    barClasses = barClasses.concat(['bg-blue_dark border-blue_dark']);
  } else if (switching) {
    barClasses = barClasses.concat(['bg-org_light border-org_dark']);
  } else {
    barClasses = barClasses.concat(['bg-blue_light border-blue_dark']);
  }

  return (
    <div
      className={barClasses.join(' ')}
      style={{ height: `${value * 5}px`, width: '2%' }}
    ></div>
  );
};

export default Bar;
