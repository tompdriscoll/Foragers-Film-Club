import React from 'react'
import { connect } from 'react-redux'

import Calendar from './calendar'
import {logout} from '../../actions/session_actions'
import receiveAllEvents from '../../actions/event_actions'

const msp = ({ session, entities: { users, events } }) => {
    debugger
    return {
      currentUser: users[session.id],
      events: events

    };
  };

const mdp = dispatch => ({
    
})

export default connect(msp,mdp)(Calendar)