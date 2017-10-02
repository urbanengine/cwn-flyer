require('normalize.css/normalize.css');
require('styles/EventItem.css');

import React from 'react';
import Moment from 'react-moment';

class EventItemComponent extends React.Component {
  render() {
    const event = this.props.event;
    return (
        <div className="card workshop">
          <div className="card-block">
            <div className="workshop-icon">
              <i className={`fa fa-${event.icon} fa-4x`}></i>
            </div>
            <h3 className="card-title workshop-title">
              <span className="underline">{event.title}</span>
            </h3>
            <span className="group-title">
              <a href="#">
                {event.group}
              </a>
            </span>
            <span className="workshop-category">{event.category}</span>
            <br />
            <span className="workshop-time"><Moment format="h:mm">{event.start_time}</Moment> - <Moment format="h:mm">{event.end_time}</Moment></span>
            <span className="workshop-location">{event.room_req} </span>
            <p className="card-text workshop-description">{event.description}</p>
          </div>
        </div>
    );
  }
}

export default EventItemComponent;