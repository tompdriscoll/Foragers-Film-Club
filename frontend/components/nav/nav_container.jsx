import React from 'react'
import { connect } from 'react-redux'

import Nav from './nav'
import {logout} from '../../actions/session_actions'

const msp = ({ session, entities: { users, uploads } }) => {
  
    return {
      currentUser: users[session.id]
    };
  };

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Nav)