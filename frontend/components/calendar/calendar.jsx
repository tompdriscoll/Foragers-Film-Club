import { Calendar, momentLocalizer } from "react-big-calendar";
import React from 'react'
import moment from "moment";



import styles from '../../../node_modules/@fullcalendar/common/main.css'

const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }

  render(){
    return(
      <div className="calendar-top">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}

export default MyCalendar