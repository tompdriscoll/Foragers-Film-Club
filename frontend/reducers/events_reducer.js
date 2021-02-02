import { RECEIVE_EVENT} from '../actions/event_actions';
import { RECEIVE_ALL_EVENTS} from '../actions/event_actions';


const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return Object.assign({}, state, { [action.event.id]: action.event });
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, state, { [action.events]: action.events });
    default:
      return state;
  }
};

export default eventsReducer;
