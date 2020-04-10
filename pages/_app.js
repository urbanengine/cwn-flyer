import React from 'react';
import App, { Container } from 'next/app';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class Flyer extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default Flyer;