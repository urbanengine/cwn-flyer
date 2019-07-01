import React, { Component } from 'react';
import Moment from "react-moment";
import Workshops from './Workshops';

class TimeSlot extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        const startTime = this.props.startTime;

        const errorMessageStyle = {
            textAlign: 'center',
            margin: '3rem auto',
            width: '80%'
        };

        /*
@media (max-width:543px) {
  .time-slot-bracket {
    position:-webkit-sticky;
    position:sticky;
    top:0;
    z-index:1000;
    background:#EBE6DB;
  }
  .time-slot-title {
    font-weight:bold;
    margin-left:20px;
    font-size:1.2em;
  }
}
@media (min-width: 544px) {
  .time-slot {
    position:relative;
    margin-left:40px;
  }
  .time-slot-bracket {
    border-left:1px solid rgba(0,0,0,0.7);
    border-top:1px solid rgba(0,0,0,0.7);
    border-bottom:1px solid rgba(0,0,0,0.7);
    width:10px;
    position:absolute;
    height:calc(100% - 16px);
    left:-20px;
  }
  .time-slot-title {
    display:block;
    -ms-transform: rotate(-90deg); /* IE 9 */
    /*
    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
    /*
    transform: rotate(-90deg);
    position: absolute;
    top: 28px;
    width: 80px;
    left: -55px;
    text-align: right;
  }
}
        */

        return (
            <div className="time-slot">
                <div className="time-slot-bracket">
                    <div className="time-slot-title">
                        <Moment format="h:mm" tz="America/Chicago">{startTime}</Moment>
                    </div>
                </div>
                <Workshops startTime={startTime} />
            </div>
        );
    }
}

export default TimeSlot;
