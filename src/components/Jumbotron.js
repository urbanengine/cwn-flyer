require('styles/Jumbotron.css');

import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class JumbotronComponent extends React.Component {
  render() {
    const cwnDate = this.props.cwnDate;
    const cwnNumber = this.props.cwnNumber;

    return (
        <div className="jumbotron">
          <div className="">
            <h1 className="cwn-logo">
              <a href="https://coworkingnight.org">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/69546/cwn-logo-light-fullnowatermark.svg" alt="CoWorking Night - Learn. Connect. Collaborate." />
              </a>
            </h1>
            <p className="cwn-intro">
              CoWorking Night is a free weekly conference where professionals come to learn, connect, and collaborate.
              <br />
              Anyone of any age or background is welcome to attend. No RSVP is required; just show up!
            </p>
            <p className="cwn-sponsors">
              <strong>Sponsored by Huntsville West and Hackster.io.<br /> Presented by Urban Engine.</strong>
            </p>
            <h2 className="cwn-info">
              <span className="cwn-edition">
                CoWorking Night #<span className="cwn-edition-number">{cwnNumber}</span>
              </span>
              <span className="cwn-date-time">
                <span className="cwn-date"><Moment format="LL" tz="America/Chicago">{cwnDate}</Moment></span>
                <span className="cwn-time">6‑10pm</span>
              </span>
              <span className="cwn-location">Huntsville West</span>
            </h2>
          </div>
        </div>
    );
  }
}

export default JumbotronComponent;
