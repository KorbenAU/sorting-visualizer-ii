import React, { useEffect, useState } from 'react';
import ControllerBar from '../components/SortingPlayer/ControllerBar';
import SortingPlayer from '../components/SortingPlayer/SortingPlayer';
import bubbleSort from '../SortingFunctions/BubbleSort';

const BAR_NUMBER = 60;
const INTERVAL_TIME = 10;

const SortingPlayerPage = () => {
    const [numbers, setNumbers] = useState([]);
    const [steps, setSteps] = useState([]);
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

        interval = setInterval(playHandler, INTERVAL_TIME);
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
        console.log('generate array numbers');
        const numList = new Array(BAR_NUMBER).fill(0).map((_) => {
            return {
                value: Math.floor(Math.random() * 130) + 1,
                comparing: false,
                switching: false,
            };
        });
        setNumbers(numList);
        generateSteps(numList);
    };

    const stopHandler = () => {
        clearInterval(repeatTask);
        setRepeatTask(null);
    };

    const generateSteps = (numList) => {
        const animation = bubbleSort(numList.map((item) => item.value));
        console.log(animation);
        setSteps(animation);
    };

    useEffect(() => {
        generateArray();
    }, []);

    const resetHandler = () => {
        generateArray();
        setPlayingIndex(-1);
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
