import React from 'react';
import { withRouter } from 'react-router'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      hostId: '',
      time: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  render() {

    return (
        <form action="" id="event-form">
            <input type="text" id='event-name-field' className="event-form-element"/>
            <input type="text" id='event-type-field' className="event-form-element"/>
            {/* <input type="text" id='event-time-field' className="event-form-element"/> */}

        </form>
    )
  }

}

export default withRouter(EventForm);