require('normalize.css/normalize.css');
require('styles/EventItem.css');

import React from 'react';

class EventItemComponent extends React.Component {
  render() {
    const event = this.props.event;
    return (
        <li>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
        </li>
    );
  }
}

export default EventItemComponent;