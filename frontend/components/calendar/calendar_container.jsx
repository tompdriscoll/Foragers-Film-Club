import React from 'react'
import { connect } from 'react-redux'

import Calendar from './calendar'
import {logout} from '../../actions/session_actions'

const msp = ({ session, entities: { users, uploads } }) => {
  
    return {
      currentUser: users[session.id]

    };
  };

const mdp = dispatch => ({

})

export default connect(msp,mdp)(Calendar)