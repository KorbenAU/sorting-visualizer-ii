import React, { useEffect, useState } from 'react';
import ControllerBar from '../components/SortingPlayer/ControllerBar';
import SortingPlayer from '../components/SortingPlayer/SortingPlayer';

const SortingPlayerPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [actions, setActions] = useState([]);

  const generateArray = () => {
    const numList = new Array(40).fill(0).map((_) => {
      return {
        value: Math.floor(Math.random() * 130) + 1,
        comparing: false,
        switching: false,
      };
    });
    setNumbers(numList);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const resetHandler = () => {
    console.log('reset');
    generateArray();
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <SortingPlayer numbers={numbers} />
      <hr />
      <ControllerBar onReset={resetHandler} />
    </div>
  );
};

export default SortingPlayerPage;
