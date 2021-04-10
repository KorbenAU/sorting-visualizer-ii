import React from 'react';
import SortingPlayer from './components/SortingPlayer/SortingPlayer';
import Button from './components/Button';

function App() {
  return (
    <>
      <div className='h-screen w-screen'>
        <SortingPlayer />
      </div>
      <Button>Test Test</Button>
    </>
  );
}

export default App;
