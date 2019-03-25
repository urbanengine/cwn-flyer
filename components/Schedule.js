import React, { Component } from 'react';
import Event from "./Event";
import Consumer from './Provider';

class Schedule extends Component {
    constructor( props ) {
        super( props );
    }

    // isEmpty( value ) {
    //     return ( value === null ) || ( value === undefined ) || ( Array.isArray( value ) && value.length === 0 );
    // }

    render() {
        const errorMessageStyle = {
            textAlign: 'center',
            margin: '3rem auto',
            width: '80%'
        };
        
        // I need to somehow use the data from the context in this condition
        //const showErrorMessage = this.isEmpty( context.cwn ) || ( !this.isEmpty( context.cwn ) && ( context.cwn.workshops === undefined || context.cwn.workshops.length == 0 ) );

        return (
            <Consumer>
                {(context) => (
                    // This should only be shown if showErrorMessage above returns true
                    <h3 style={errorMessageStyle} className="error-message">{context.message}</h3>
                )}

                {/* Now show data for each event */}
            </Consumer>
        );
    }
}

export default Schedule;
