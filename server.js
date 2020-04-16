const compression = require( 'compression' );
const express = require( "express" );
const next = require( "next" );
const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handler = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        const server = express();
        server.use( compression() );

        const supportedCities = [
            {
                airportCode: "hsv",
                city: "Huntsville",
                id: 2,
                sponsor: {
                    name: "CommentSold",
                    url: "https://commentsold.com"
                },
                venue: "Huntsville West"
            },
            {
                airportCode: "bhm",
                city: "Birmingham",
                id: 54,
                sponsor: {
                    name: "Innovation Depot",
                    url: "https://innovationdepot.org"
                },
                venue: "Innovation Depot"
            }
        ];

        // Show Huntsville's schedule on the home page
        server.get("/", ( request, response ) => {
            let city = {};
            const match = supportedCities.filter( function( cityInfo ) {
                if ( cityInfo.airportCode === "hsv" ) {
                    city = cityInfo;
                    return cityInfo;
                }
            } );

            if ( match !== undefined && match.length !== 0 ) {
                // We want to render the Huntsville schedule by default
                app.render( request, response, "/city", { ...request.query, ...request.params, city } );
            } else {
                // user visited a city we don't yet support
                response.statusCode = 404;
                app.render( request, response, "/_error", { } );
            }
        } );

        // Show us the schedule for the city given a specific airport code
        server.get("/:airportCode", ( request, response ) => {
            let city = {};
            const match = supportedCities.filter( function( cityInfo ) {
                if ( cityInfo.airportCode === request.params.airportCode ) {
                    city = cityInfo;
                    return cityInfo;
                }
            });

            if ( match !== undefined && match.length !== 0 ) {
                // user visited a city we support
                app.render( request, response, "/city", { ...request.query, ...request.params, city } );
            } else {
                // user visited a city we don't yet support
                response.statusCode = 404;
                app.render( request, response, "/_error", { } );
            }
        } );

        // Handle all other requests
        server.get( "*", ( request, response ) => {
            return handler( request, response );
        } );

        server.listen( port, error => {
            if ( error ) throw error;

            console.log( `> Ready on http://localhost:${port}` );
        } );
    } )
    .catch( exception => {
        console.error( exception.stack );
        process.exit( 1 );
    } );
