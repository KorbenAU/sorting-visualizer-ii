import { resetItemsState, Types } from '../actions/SortingArray';

const INITIAL_STATE = {
  sortingItems: [],
  animationSteps: [],
  playingIndex: [],
  playing: false,
};

const getResetState = (sortingItems) => {
  return sortingItems.map((item) => {
    return {
      ...item,
      switching: false,
      comparing: false,
    };
  });
};

const compareItems = (indices, state) => {
  const updateItems = getResetState(state.sortingItems).map((item, index) => {
    if (indices.includes(index)) {
      item.comparing = true;
    }
    return item;
  });
  return {
    ...state,
    sortingItems: updateItems,
    playingIndex: state.playingIndex + 1,
  };
};

const switchItems = (indices, state) => {
  const updateItems = getResetState(state.sortingItems);
  indices.forEach((index) => {
    updateItems[index].switching = true;
  });
  const temp = updateItems[indices[0]].value;
  updateItems[indices[0]].value = updateItems[indices[1]].value;
  updateItems[indices[1]].value = temp;
  return {
    ...state,
    sortingItems: updateItems,
    playingIndex: state.playingIndex + 1,
  };
};

const SortingArrayReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case Types.NEXT_STEP:
      const nextIndex = state.playingIndex + 1;
      const animation = state.animationSteps[nextIndex];
      switch (animation.type) {
        case 'comparing':
          return compareItems(animation.targets, state);
        case 'switching':
          return switchItems(animation.targets, state);
        default:
          console.log('wrong action type');
      }
    case Types.RESET_SORTING_ITEMS:
      const { length } = action.payload;
      const items = new Array(length).fill(0).map((_) => {
        return {
          value: Math.floor(Math.random() * 130) + 1,
          comparing: false,
          switching: false,
        };
      });
      return {
        ...state,
        sortingItems: items,
        playingIndex: -1,
      };
    case Types.COMPARE_ITEMS:
      return compareItems(action.payload.indices);
    case Types.SWITCH_ITEMS:
      return switchItems(action.payload.indices);
    case Types.GENERATE_ANIMATION:
      const { sortingFunc } = action.payload;
      return {
        ...state,
        animationSteps: sortingFunc(
          state.sortingItems.map((item) => item.value)
        ),
        playingIndex: -1,
      };
    case Types.RESET_ITEMS_STATE:
      return {
        ...state,
        sortingItems: getResetState(state.sortingItems),
        playingIndex: -1,
      };
    case Types.START_PLAY:
      return {
        ...state,
        playing: true,
      };
    case Types.PAUSE_PLAY:
      return {
        ...state,
        playing: false,
      };
    default:
      return state;
  }
};

export default SortingArrayReducer;
