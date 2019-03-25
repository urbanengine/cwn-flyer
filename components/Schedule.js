import React, { Component } from 'react';
import Event from "./Event";
import Consumer from './Provider';

const isEmpty = ( value ) => {
    return ( value === null ) || ( value === undefined ) || ( Array.isArray( value ) && value.length === 0 );
}

class Schedule extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const errorMessageStyle = {
            textAlign: 'center',
            margin: '3rem auto',
            width: '80%'
        };

        return (
            <Consumer>
                {(context) => {
                    var cwn = context.state.cwn;
                    console( context.state );
                
                    const showErrorMessage = isEmpty( cwn ) || ( !isEmpty( cwn ) && ( isEmpty( cwn.workshops ) || isEmpty( cwn.workshops.length ) ) ) ? true: false;

                    console.log( `showErrorMessage: ${showErrorMessage}` );
                    
                    return (
                        // This should only be shown if showErrorMessage above returns true
                        showErrorMessage && <h3 style={errorMessageStyle} className="error-message">{context.state.message}</h3>
                    )
                } }

                {/* Now show data for each event */}
            </Consumer>
        );
    }
}

export default Schedule;
