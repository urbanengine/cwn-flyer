require('styles/TimeSlot.css');

import React from 'react';
import EventList from 'components/EventList.js'
import TimeSlotBracket from 'components/TimeSlotBracket.js'

class EventListComponent extends React.Component {
  render() {
    const events = this.props.events;
    const time = this.props.time;
    return (
        <div className="time-slot">
            <TimeSlotBracket time={time} />
            <EventList events={events} />
        </div>
    );
  }
}

export default EventListComponent;