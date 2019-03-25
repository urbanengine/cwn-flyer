import React, { Component } from 'react';
import Event from "./Event";

class ErrorMessage extends Component {
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
            <Context.Consumer>
                {(context) => (
                    <h3 style={errorMessageStyle} className="error-message">{props.message}</h3>
                )}
            </Context.Consumer>
        )
    }
}

export default ErrorMessage;