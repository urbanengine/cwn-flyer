const express = require( "express" );
const next = require( "next" );
const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
const handler = app.getRequestHandler();
const Error = require( "next/error" );

app.prepare()
    .then(() => {
        const server = express();

        server.get("/:airportCode", ( request, response ) => {
            const supportedCities = [
                {
                    city: "Huntsville",
                    airportCode: "hsv",
                    id: 2
                },
                {
                    city: "Birmingham",
                    airportCode: "bhm",
                    id: 3
                }
            ];

            var match = supportedCities.filter( function( city ) {
                if ( city.airportCode === request.params.airportCode ) {
                    return city;
                }
            });

            if ( match !== undefined && match.length !== 0 ) {
                // user visited a city we support
                app.render( request, response, "/city", { ...request.query, ...request.params } );
            } else {
                // user visited a city we don't yet support
                response.statusCode = 404;
                app.render( request, response, "/_error", { } );
            }
        } );

        server.get( "/api/schedule/coworkingnight", ( request, response ) => {
            // construct the url for the endpoint that will give us the schedule
            const endpoint = `${process.env.hostname}/api/v2/flyer/group/${groupId}`;
            
            const response = await fetch( endpoint );
            
            // return the results back to the client
            return await response.json();
        } );

        server.get( "*", ( request, response ) => {
            return handler( request, response );
        } );

        server.listen( 3000, error => {
            if ( error ) throw error;

            console.log( "> Ready on http://localhost:3000" );
        } );
    } )
    .catch( exception => {
        console.error( exception.stack );
        process.exit( 1 );
    } );
