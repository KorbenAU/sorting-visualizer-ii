export const Types = {
  RESET_SORTING_ITEMS: 'items/reset_items',
  GENERATE_ANIMATION: 'items/generate_animation',
  COMPARE_ITEMS: 'items/compare_items',
  SWITCH_ITEMS: 'items/switch_items',
  NEXT_STEP: 'items/next_step',
  RESET_ITEMS_STATE: 'items/reset_items_state',
  START_PLAY: 'items/start_play',
  PAUSE_PLAY: 'items/pause_play',
};

export const resetSortingItems = (length) => {
  return {
    type: Types.RESET_SORTING_ITEMS,
    payload: { length },
  };
};

export const compareItems = (indices) => {
  return {
    type: Types.COMPARE_ITEMS,
    payload: { indices },
  };
};

export const switchItems = (indices) => {
  return {
    type: Types.SWITCH_ITEMS,
    payload: { indices },
  };
};

export const generateAnimation = (sortingFunc) => {
  return {
    type: Types.GENERATE_ANIMATION,
    payload: { sortingFunc },
  };
};

export const nextStep = () => {
  return {
    type: Types.NEXT_STEP,
  };
};

export const resetItemsState = () => {
  return {
    type: Types.RESET_ITEMS_STATE,
  };
};

export const startPlay = () => {
  return {
    type: Types.START_PLAY,
  };
};

export const pausePlay = () => {
  return {
    type: Types.PAUSE_PLAY,
  };
};
