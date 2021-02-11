import React from 'react';
import { withRouter } from 'react-router'

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      event_type: '',
      hostId: props.user.id,
      time: '',
      start: '',
      end: '',
      allDay: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleAllDay = this.toggleAllDay.bind(this)
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  convertStrToDatetime(e){
    let dateTime = e.target.value.split(':')

    
    
    
  }

  endTimeConversion(e){
 
    debugger
    let dateArr = e.target.value.split('-')
    
    dateArr[1] = dateArr[1] - 1
    let eventDate = new Date(dateArr[0], dateArr[1], dateArr[2])
    return this.setState({ ['end']:  eventDate});
    

  }

  toggleAllDay() {

    this.state.allDay === 'true' ? this.setState({['allDay']: 'false'}) : this.setState({['allDay']: 'true'})
    console.log(this.state.allDay)
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
            <input type="text" id='event-name-field' className="event-form-element" value={this.state.first_name} placeholder='Title' onChange={this.update('title')} />     
            <input type="text" id='event-type-field' className="event-form-element" value={this.state.last_name} placeholder='Type' onChange={this.update('event_type')} />
            <input type="datetime-local" id='event-time-field' className="event-form-element"  onChange={e => this.convertStrToDatetime(e)}/>
            End Time<input type="time" onChange={(e) => this.endTimeConversion(e)}></input>
            All Day?<input type="checkbox" onChange={ () => this.toggleAllDay()}></input>
            <button type='submit'>Submit</button>
        </form>
    )
  }

}

export default withRouter(EventForm);