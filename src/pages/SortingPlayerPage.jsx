import React, { useEffect, useState } from 'react';
import ControllerBar from '../components/SortingPlayer/ControllerBar';
import SortingPlayer from '../components/SortingPlayer/SortingPlayer';
import bubbleSort from '../SortingFunctions/BubbleSort';
import mergeSort from '../SortingFunctions/MergeSort';
import { connect } from 'react-redux';
import * as SortingActions from '../store/actions/SortingArray';

const BAR_NUMBER = 50;
const INTERVAL_TIME = 50;

const SortingPlayerPage = ({
  animationSteps,
  playingIndex,
  resetSortingItems,
  generateAnimation,
  nextStep,
  resetItemsState,
}) => {
  const [intervalID, setIntervalID] = useState(null);

  function* iterateAnimation() {
    let index;
    for (index = playingIndex + 1; index < animationSteps.length; index++) {
      yield animationSteps[index];
    }
  }

  const play = () => {
    const it = iterateAnimation();
    const playHandler = () => {
      const nextAnimationStep = it.next();
      if (nextAnimationStep.done) {
        console.log('===============[animation is done!]=================');
        clearInterval(intervalID);
        resetItemsState();
        generateAnimation(mergeSort);
      } else {
        nextStep();
      }
    };

    const intervalID = setInterval(playHandler, INTERVAL_TIME);
    setIntervalID(intervalID);
  };

  const stopHandler = () => {
    clearInterval(intervalID);
  };

  useEffect(() => {
    resetSortingItems();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SortingPlayer />
      <hr />
      <ControllerBar
        onReset={() => {
          clearInterval(intervalID);
          resetSortingItems();
        }}
        onPlay={play}
        onStop={stopHandler}
        onAnimationGen={() => generateAnimation(mergeSort)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playingIndex: state.Sorting.playingIndex,
    animationSteps: state.Sorting.animationSteps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetSortingItems: () =>
      dispatch(SortingActions.resetSortingItems(BAR_NUMBER)),
    generateAnimation: (sortingFunc) =>
      dispatch(SortingActions.generateAnimation(sortingFunc)),
    switchItems: (indices) => dispatch(SortingActions.switchItems(indices)),
    compareItems: (indices) => dispatch(SortingActions.compareItems(indices)),
    nextStep: () => dispatch(SortingActions.nextStep()),
    resetItemsState: () => dispatch(SortingActions.resetItemsState()),
    start: () => dispatch(SortingActions.startPlay()),
    pause: () => dispatch(SortingActions.pausePlay()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingPlayerPage);
