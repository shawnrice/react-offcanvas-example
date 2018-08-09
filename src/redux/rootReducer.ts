import { combineReducers } from 'redux';

import ui from './modules/ui';

const rootReducer = combineReducers({
  ui,
});

export default rootReducer;
