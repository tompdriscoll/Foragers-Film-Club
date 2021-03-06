import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors: errorsReducer
});

export default rootReducer;
