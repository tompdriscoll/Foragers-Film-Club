import { RECEIVE_EVENT} from '../actions/session_actions';
import { RECEIVE_ALL_EVENT} from '../actions/session_actions';


const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event });
    case RECEIVE_ALL_EVENT:
      return Object.assign({}, state, { [action.events]: action.events });
    default:
      return state;
  }
};

export default eventsReducer;
