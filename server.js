const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get("*", (request, response) => {
            return handler(request, response);
        });

        server.get("/:airportCode", (request, response) => {
            const actualPage = "/" + reqyestairportCode,
                queryParams = { airportCode: request.params.airportCode };

            app.render(request, response, actualPage, queryParams);
        });

        server.listen(3000, error => {
            if (error) throw error;

            console.log("> Ready on http://localhost:3000");
        });
    })
    .catch(exception => {
        console.error(exception.stack);
        process.exit(1);
    });