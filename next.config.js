const webpack = require( 'webpack' );
const withCSS = require('@zeit/next-css');

module.exports = withCSS( {
    /* config options go below */

    optimization: {
        minimize: true //Update this to true or false
    }
} );