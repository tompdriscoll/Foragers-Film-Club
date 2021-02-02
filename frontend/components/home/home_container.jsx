import React from 'react'
import { connect } from 'react-redux'

import Home from './home'
import {logout} from '../../actions/session_actions'
import {newEvent} from '../../actions/event_actions'
const msp = ({ session, entities: { users, events } }) => {
  
    return {
      currentUser: users[session.id]

    };
  };

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    processForm: () => dispatch(newEvent())
})

export default connect(msp,mdp)(Home)