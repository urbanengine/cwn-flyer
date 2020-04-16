import React, { Component } from 'react';
import Head from 'next/head';
import Moment from 'react-moment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkshopCard extends Component {
    constructor( props ) {
        super( props );

        library.add( fab, fas );

        // start time for time slot
        const startTime = this.props.workshop.start_time;
        const endTime = this.props.workshop.end_time;
        const millisecondsToEventEnd = new Date( endTime ).getTime() - new Date().getTime();
        const totalMillisecondsInEvent = new Date( endTime ).getTime() - new Date( startTime ).getTime();
        const progress = Math.min( 1, Math.max( 0, 1 - ( millisecondsToEventEnd / totalMillisecondsInEvent ) ) );

        this.state = {
            ended: false,
            progress: progress
        };
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

    componentDidMount() {
        const workshop = this.props.workshop;

        // Update progress bar every 60 seconds
        this.interval = setInterval( this.tick.bind( this ), 60000 );

        // Update when the event ends
        var millisecondsToEventEnd = new Date( workshop.end_time ).getTime() - new Date().getTime();
        if ( millisecondsToEventEnd > 0 ) {
            setTimeout( function() {
            this.setState( {
                ended: true
            } );
            }.bind( this ), millisecondsToEventEnd );
        }
        else {
            this.setState( {
                ended: true
            } );
        }
    }

    tick() {
        const startTime = this.props.workshop.start_time;
        const endTime = this.props.workshop.end_time;
        const millisecondsToEventEnd = new Date( endTime ).getTime() - new Date().getTime();
        const totalMillisecondsInEvent = new Date( endTime ).getTime() - new Date( startTime ).getTime();
        const progress = Math.min( 1, Math.max( 0, 1 - ( millisecondsToEventEnd / totalMillisecondsInEvent ) ) );
        this.setState( {
            progress: progress
        } );
    }

    renderVirtualMeetupSection = (meetupUrl) => {
        let meetupType = meetupUrl.includes('zoom') ? 'zoom' : meetupUrl.includes('teams') ? 'teams' : 'meet';

        return (
        <a href={meetupUrl} target='_blank'>
            <div className={`workshop-url ${meetupType}`}>
                <img src={`/static/images/${meetupType}.png`} />
                <div>Click to join the Meeting</div>
            </div>
        </a>);
    }

    render() {
        const workshop = this.props.workshop;

        var cardWorkshopCss = 'card workshop';
        if ( this.state.ended ) {
            cardWorkshopCss += ' workshop-ended';
        }

        if ( workshop.isCancelled ) {
            cardWorkshopCss += ' workshop-canceled';
        }

        var progressBarStyle = {
            width: `${Math.ceil( this.state.progress * 100 )}%`
        };

        return (
            <div className={cardWorkshopCss}>
                <Head>
                    <link rel='preload' as="style" href='/static/css/workshopCard.css' key='workshopCard:css' />
                </Head>
                <div className='progress'>
                    <div className='progress-bar' role='progress' style={progressBarStyle} aria-valuemin='0' area-valuemax='100'></div>
                </div>
                <div className='card-block'>
                    <div className='workshop-icon'>
                        <FontAwesomeIcon icon={workshop.icon} size='4x' />
                    </div>
                    <h3 className='card-title workshop-title'>{workshop.title}</h3>
                    <span className='group-title'>
                        <a href='#'>{workshop.group}</a>
                    </span>
                    <span className='workshop-category'>{workshop.category}</span>
                    <br />
                    <span className='workshop-time'>
                    <Moment format='h:mm' tz='America/Chicago'>
                        { workshop.start_time }
                    </Moment>
                    -
                    <Moment format='h:mm' tz='America/Chicago'>
                        { workshop.end_time }
                    </Moment>
                    </span>
                    <span className='workshop-location'>{workshop.room}</span>
                    <p className='card-text workshop-description'>
                        {workshop.description}
                    </p>
                    {workshop.virtual_meetup_url &&
                        this.renderVirtualMeetupSection(workshop.virtual_meetup_url) }
                </div>
            </div>
        )
    };
}

export default WorkshopCard;
