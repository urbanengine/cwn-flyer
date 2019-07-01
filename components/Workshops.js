import React, { Component } from 'react';
import FlyerContext from './FlyerContext';
import Moment from "react-moment";

class Workshops extends Component {

    render() {
        const startTime = this.props.startTime;
        
        return (
            <FlyerContext.Consumer>
                {(context) => {
                    return (
                        <div className="card-deck">

                        </div>
                    )
                } }
            </FlyerContext.Consumer>
        )
    };
}

export default Workshops;
