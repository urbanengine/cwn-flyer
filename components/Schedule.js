import React, { Component } from 'react';
import FlyerContext from './FlyerContext';

const isEmpty = ( value ) => {
    return ( value === null ) || ( value === undefined ) || ( Array.isArray( value ) && value.length === 0 );
}

class Schedule extends Component {

    render() {
        const errorMessageStyle = {
            textAlign: 'center',
            margin: '3rem auto',
            width: '80%'
        };

        return (
            <FlyerContext.Consumer>
                {(context) => {
                    const cwn = context.state.cwn;
                    console.log( `schedule: ${ JSON.stringify( context.state )}` );
                
                    const showErrorMessage = isEmpty( cwn ) || ( !isEmpty( cwn ) && ( isEmpty( cwn.workshops ) || isEmpty( cwn.workshops.length ) ) ) ? true: false;
                    
                    return (
                        // This should only be shown if showErrorMessage above returns true
                        showErrorMessage && <h3 style={errorMessageStyle} className="error-message">{context.state.message}</h3>
                    )
                } }

                {/* Now show data for each event */}
            </FlyerContext.Consumer>
        );
    }
}

export default Schedule;
