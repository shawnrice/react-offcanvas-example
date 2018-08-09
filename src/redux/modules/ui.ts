import { AnyAction } from 'redux';
import { lockScroll, unlockScroll } from 'src/utils/domSideEffects';

const initialState = {
  offCanvas: false,
};

const OPEN_OFF_CANVAS = '@UI/OFF_CANVAS/OPEN';
const CLOSE_OFF_CANVAS = '@UI/OFF_CANVAS/CLOSE';

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case OPEN_OFF_CANVAS:
      lockScroll(); // side-effect
      return {
        ...state,
        offCanvas: true,
      };
    case CLOSE_OFF_CANVAS:
      unlockScroll(); // side-effect
      return {
        ...state,
        offCanvas: false,
      };
    default:
      return state;
  }
}

const open = () => ({
  type: OPEN_OFF_CANVAS,
});

const close = () => ({
  type: CLOSE_OFF_CANVAS,
});

export { reducer as default, open, close };
