require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios'

import EventList from 'components/EventList/EventList.js'

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('/events')
    .then(response => {
      const events = response.data;
      this.setState({ events });
   });
  }

  render() {
    return (
      <EventList events={this.state.events} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
