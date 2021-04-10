import React from 'react';
import Button from '../Button';

const ControllerBar = ({ onReset }) => {
  return (
    <div className='flex flex-row mt-5'>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
};

export default ControllerBar;
