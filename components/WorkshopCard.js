import React, { Component } from 'react';
import Head from "next/head";
import FlyerContext from './FlyerContext';
import Moment from "react-moment";

class WorkshopCard extends Component {

    render() {
        // start time for time slot
        const workshop = this.props.workshop;
        const iconClass = "fas fa-" + workshop.icon + " fa-4x";
        
        return (
            <div>
                { /*console.log( JSON.stringify( workshop ) ) */}
                <Head>
                    <link rel="stylesheet" href="/static/workshopCard.css" key="workshopCard:css" />
                </Head>
                <div className="card workshop">
                    <div className="progress">
                        <div className="progress-bar" role="progress" aria-valuemin="0" area-valuemax="100"></div>
                    </div>
                    <div className="card-block">
                        <div className="workshop-icon">
                            <i className={iconClass}></i>
                        </div>
                        <h3 className="card-title workshop-title">{workshop.title}</h3>
                        <span className="group-title">
                            <a href="#">{workshop.group}</a>
                        </span>
                        <span className="workshop-category">{workshop.category}</span>
                        <br />
                        <span className="workshop-time">
                            {/* Add Moment js code here */}
                        </span>
                        <span className="workshop-location">{workshop.room}</span>
                        <p className="card-text workshop-description">
                            {workshop.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    };
}

export default WorkshopCard;
