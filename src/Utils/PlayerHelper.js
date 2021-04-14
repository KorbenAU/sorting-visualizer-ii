let updateNumbers = [...numbers];
let interval = null;

function* iterateAnimation(animation) {
    let index;
    for (index = playingIndex + 1; index < animation.length; index++) {
        setPlayingIndex(index);
        yield animation[index];
    }
}

const play = (animation) => {
    const it = iterateAnimation(animation);

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
