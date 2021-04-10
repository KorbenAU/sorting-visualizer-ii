import React, { useState } from 'react';
import Bar from './Bar';

const SortingPlayer = () => {
  const [numbers, setNumbers] = useState([13, 45, 23, 67, 12, 55, 100, 10]);

  return (
    <div className="flex flex-row h-full w-full items-end justify-center">
      {numbers.map((number) => (
        <Bar value={number} comparing />
      ))}
    </div>
  );
};

export default SortingPlayer;
