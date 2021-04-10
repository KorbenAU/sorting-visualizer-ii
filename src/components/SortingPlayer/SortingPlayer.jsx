import React, { useEffect } from 'react';
import Bar from './Bar';

const SortingPlayer = ({ numbers }) => {
  return (
    <div className='flex flex-row h-4/6 w-10/12 items-end justify-center'>
      {numbers.map((number, index) => {
        return <Bar key={index} number={number} comparing />;
      })}
    </div>
  );
};

export default SortingPlayer;
