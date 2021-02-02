import * as APIUtil from '../util/session_api_util';

export const RECEIVE_EVENT = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ALL_EVENTS

export const receiveEvent = event => {
  return ({
  type: RECEIVE_EVENT,
  event})
};

export const receiveAllEvents = () => {
    return ({
        type: RECEIVE_ALL_EVENTS,
        events
    })
}

export const newEvent = event => dispatch => (
    APIUtil.newEvent(event).then(event => (
      dispatch(receiveEvent(event))
    ))
  );


// export const requestUpdateUser = user => dispatch => (
//     APIUtil.editUser(user).then(user => {
        
//         dispatch(receiveCurrentUser(user))
//     })
// )