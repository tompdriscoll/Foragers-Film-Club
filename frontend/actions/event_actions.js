import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentEvent = event => {
  return ({
  type: RECEIVE_CURRENT_EVENT,
  event})
};


// export const requestUpdateUser = user => dispatch => (
//     APIUtil.editUser(user).then(user => {
        
//         dispatch(receiveCurrentUser(user))
//     })
// )