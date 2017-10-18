require('normalize.css/normalize.css');
require('styles/EventItem.css');

import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class EventItemComponent extends React.Component {
  constructor(props) {
    super(props);

    const event = this.props.event;
    var millisecondsToEventEnd = new Date(event.end_time).getTime() - new Date().getTime();
    var totalMillisecondsInEvent = new Date(event.end_time).getTime() - new Date(event.start_time).getTime();
    var progress = Math.min(1, Math.max(0, 1 - (millisecondsToEventEnd / totalMillisecondsInEvent)));

    //TODO: props for canceled and updated
    this.state = {
      ended: false,
      progress: progress //precent complete
    }
  }

  tick() {
    const event = this.props.event;
    var millisecondsToEventEnd = new Date(event.end_time).getTime() - new Date().getTime();
    var totalMillisecondsInEvent = new Date(event.end_time).getTime() - new Date(event.start_time).getTime();
    var progress = Math.min(1, Math.max(0, 1 - (millisecondsToEventEnd / totalMillisecondsInEvent)));
    this.setState({progress: progress});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    const event = this.props.event;

    //handle update for progress bar
    this.interval = setInterval(this.tick.bind(this), 60000);

    //handle update for event ending
    var millisecondsToEventEnd = new Date(event.end_time).getTime() - new Date().getTime();
    if (millisecondsToEventEnd > 0) {
      setTimeout(function () {
        this.setState({ended: true});
      }.bind(this), millisecondsToEventEnd);
    }
    else {
      this.setState({ended: true});
    }
  }

  render() {
    const event = this.props.event;
    var cardWorkshopCss = 'card workshop';
    if (this.state.ended) {
      cardWorkshopCss += ' workshop-ended';
    }

    var progressBarStyle = {
      width: `${Math.ceil(this.state.progress * 100)}%`
    };

    return (
        <div className={cardWorkshopCss}>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={progressBarStyle} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <div className="card-block">
            <div className="workshop-icon">
              <i className={`fa fa-${event.icon} fa-4x`}></i>
            </div>
            <h3 className="card-title workshop-title">
              <span>{event.title}</span>
            </h3>
            <span className="group-title">
              <a href="#">
                {event.group}
              </a>
            </span>
            <span className="workshop-category">{event.category}</span>
            <br />
            <span className="workshop-time"><Moment format="h:mm" tz="America/Chicago">{event.start_time}</Moment> - <Moment format="h:mm" tz="America/Chicago">{event.end_time}</Moment></span>
            <span className="workshop-location">{event.room_req} </span>
            <p className="card-text workshop-description">{event.description}</p>
          </div>
        </div>
    );
  }
}

export default EventItemComponent;
