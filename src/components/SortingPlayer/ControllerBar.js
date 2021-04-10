import React from 'react';
import Button from '../Button';

const ControllerBar = ({ onReset, onPlay, onStop }) => {
  return (
    <div className='flex flex-row mt-5'>
      <Button onClick={onPlay}>Start</Button>
      <Button onClick={onStop}>Stop</Button>
      <Button onClick={onReset}>Reset</Button>
    </div>
  );
};

export default ControllerBar;
