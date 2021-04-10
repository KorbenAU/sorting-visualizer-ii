import React, { useEffect, useState } from 'react';
import ControllerBar from '../components/SortingPlayer/ControllerBar';
import SortingPlayer from '../components/SortingPlayer/SortingPlayer';

const SortingPlayerPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [steps, setSteps] = useState([
    {
      id: 0,
      type: 'comparing',
      targets: [0, 5],
    },
    {
      id: 1,
      type: 'switching',
      targets: [0, 5],
    },
    {
      id: 2,
      type: 'comparing',
      targets: [2, 4],
    },
    {
      id: 3,
      type: 'switching',
      targets: [2, 4],
    },
    {
      id: 4,
      type: 'comparing',
      targets: [6, 8],
    },
    {
      id: 5,
      type: 'switching',
      targets: [6, 8],
    },
  ]);
  const [playingIndex, setPlayingIndex] = useState(-1);
  const [repeatTask, setRepeatTask] = useState(null);

  function* iterateAnimation(animation) {
    let index;
    for (index = playingIndex + 1; index < animation.length; index++) {
      setPlayingIndex(index);
      yield animation[index];
    }
  }

  let updateNumbers = [...numbers];
  let interval = null;

  const play = () => {
    const it = iterateAnimation(steps);

    const playHandler = () => {
      const nextItem = it.next();
      if (nextItem.done) {
        clearInterval(interval);
        setPlayingIndex(-1);
        setNumbers(
          updateNumbers.map((item) => {
            return { ...item, comparing: false, switching: false };
          })
        );
        setRepeatTask(null);
      } else {
        dealWithStep(nextItem.value);
      }
    };

    interval = setInterval(playHandler, 1000);
    setRepeatTask(interval);
  };

  const dealWithStep = (step) => {
    updateNumbers = updateNumbers.map((item) => {
      return { ...item, comparing: false, switching: false };
    });

    switch (step.type) {
      case 'comparing':
        step.targets.forEach((index) => {
          updateNumbers[index].comparing = true;
        });
        break;
      case 'switching':
        step.targets.forEach((index) => {
          updateNumbers[index].switching = true;
        });
        const temp = updateNumbers[step.targets[0]].value;
        updateNumbers[step.targets[0]].value =
          updateNumbers[step.targets[1]].value;
        updateNumbers[step.targets[1]].value = temp;
        break;
      default:
        console.log('wrong action type');
    }

    setNumbers(updateNumbers);
  };

  const generateArray = () => {
    const numList = new Array(10).fill(0).map((_) => {
      return {
        value: Math.floor(Math.random() * 130) + 1,
        comparing: false,
        switching: false,
      };
    });
    setNumbers(numList);
  };

  const stopHandler = () => {
    console.log('stop');
    clearInterval(repeatTask);
    setRepeatTask(null);
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
      <ControllerBar
        onReset={resetHandler}
        onPlay={play}
        onStop={stopHandler}
      />
    </div>
  );
};

export default SortingPlayerPage;
