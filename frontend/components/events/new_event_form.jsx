import React from 'react';
import { withRouter } from 'react-router'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      hostId: props.user.id,
      time: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }


  handleSubmit(e) { 
    e.preventDefault();
    let form = this
    const event = Object.assign({}, this.state);  
    this.props.processForm(this.state)  
    .then(response => {  
      form.props.history.push('/h')    
    });
  }

  render() {

    return (
        <form action="" id="event-form" onSubmit={e => this.handleSubmit(e)}>
            <input type="text" id='event-name-field' className="event-form-element"/>
            <input type="text" id='event-type-field' className="event-form-element"/>
            <input type="date" id='event-time-field' className="event-form-element"/>
            <button type='submit'>Submit</button>
        </form>
    )
  }

}

export default withRouter(EventForm);