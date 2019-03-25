import React, { Component } from 'react';

const Context = React.createContext();

class Provider extends Component {
    constructor( props ) {
        super( props );

        this.state.message = props.message;
        this.state.cwn = props.cwn;
    }

    state = {
        message: '',
        cwn: {}
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;
export const Consumer = Context.Consumer;