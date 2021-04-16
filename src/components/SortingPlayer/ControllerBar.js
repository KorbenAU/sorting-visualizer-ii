import React from 'react';
import Button from '../Button';

const ControllerBar = ({ onReset, onPlay, onStop, onAnimationGen }) => {
  return (
    <div className="flex flex-row mt-5 border px-6 py-3 rounded-md">
      <Button onClick={onPlay}>Start</Button>
      <Button onClick={onStop}>Stop</Button>
      <Button onClick={onReset}>Reset</Button>
      <Button onClick={onAnimationGen}>Generate Animation</Button>
    </div>
  );
};

export default ControllerBar;
