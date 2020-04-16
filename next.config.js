const webpack = require( 'webpack' );
const withCSS = require('@zeit/next-css');

module.exports = withCSS( {
    webpack( config, options ) {
        /* config options go below */

        config.plugins = config.plugins.filter(
            ( plugin ) => ( plugin.constructor.name !== 'UglifyJsPlugin' )
        );

        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin()
        );

        return config;
    }
} );