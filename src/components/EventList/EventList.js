require('normalize.css/normalize.css');
require('styles/EventList.css');

import React from 'react';
import EventItem from 'components/EventItem/EventItem.js'

class EventListComponent extends React.Component {
  render() {
    const events = this.props.events;
    const listItems = events.map((event, index) =>
    <EventItem key={index} event={event}/>
  );

    return (
        <ul>
            {listItems}
        </ul>
    );
  }
}

export default EventListComponent;