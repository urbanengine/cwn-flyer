require('styles/EventList.css');

import React from 'react';
import EventItem from 'components/EventItem.js'

class EventListComponent extends React.Component {
  render() {
    const events = this.props.events;
    const listItems = events.map((event, index) =>
    <EventItem key={index} event={event}/>
  );

    return (
      <div className="card-deck">
        {listItems}
      </div>
    );
  }
}

export default EventListComponent;