require('styles/TimeSlotBracket.css');

import React from 'react';
import Moment from 'react-moment';

class EventListComponent extends React.Component {
  render() {
    const time = this.props.time;
    return (
        <div className="time-slot-bracket">
            <div className="time-slot-title">
                <Moment format="h:mm">{this.props.time}</Moment>
            </div>
        </div>
    );
  }
}

export default EventListComponent;