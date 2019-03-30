import React from 'react';
import App, { Container } from 'next/app';
import FlyerContext from '../components/FlyerContext';

class Flyer extends App {
    state = {
        message: '',
        cwn: {}
    }

    updateSchedule = ( message, cwn ) => {
        this.setState( {
            message: message,
            cwn: cwn
        } );
    }

	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
                <FlyerContext.Provider value={{ message: this.state.message, cwn: this.state.cwn }}>
				    <Component {...pageProps} />
                </FlyerContext.Provider>
			</Container>
		);
	}
}

export default Flyer;
