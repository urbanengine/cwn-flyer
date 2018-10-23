const express = require( 'express' ),
      router = express.Router();

// declare axios for making http requests
const axios = require( 'axios' ),
      baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://www.openhuntsville.com/api/v1/';

function getCurrentId() {
  return axios.get( `${baseUrl}/thisweeks_cwn_event`, { headers: { 'Authorization': process.env.APIKEY } } )
    .then( response => {
      var event = response.data;
      if ( event != undefined && event.cwn != undefined ) {
        return event.cwn;
      }
      else
        return '';
    } );
}

function getNextId() {
  return axios.get( `${baseUrl}nextweeks_cwn_event`, { headers: { 'Authorization': process.env.APIKEY } } )
  .then(response => {
    var event = response.data;
    if ( event != undefined && event.cwn != undefined )
      return event.cwn;
    else
      return '';
  } );
}

router.get( '/bhm/cwnEvents/current', ( request, response ) => {
  axios.get( `${baseUrl}/bhm/cwn_flyer/`, { headers: { 'Authorization': process.env.APIKEY } } )
  .then( posts => {
    response.status( 200 ).json( posts.data );
  } )
  .catch( error => {
    response.status( 500 ).send( error )
  } );
} );

router.get( '/cwnEvents/current', ( request, response ) => {
  getCurrentId().then( currentId => {
    console.log('id', currentId);

    axios.get( `${baseUrl}/cwn_flyer/` + currentId, { headers: { 'Authorization': process.env.APIKEY } } )
    .then( posts => {
      response.status( 200 ).json( posts.data );
    } )
    .catch( error => {
      response.status( 500 ).send( error )
    } );
  } );
} );

router.get('/cwnEvents/next', ( request, response ) => {
  getNextId().then(currentId => {
    axios.get( `${baseUrl}/cwn_flyer/` + currentId, { headers: { 'Authorization': process.env.APIKEY } } )
    .then( posts => {
      response.status( 200 ).json( posts.data );
    } )
    .catch( error => {
      response.status( 500 ).send( error )
    } );
  } );
} );

router.get( '/cwnEvents/:id', ( request, response ) => {
  axios.get( `${baseUrl}/cwn_flyer/` + req.params.id, { headers: { 'Authorization': process.env.APIKEY } } )
  .then( posts => {
    response.status( 200 ).json( posts.data );
  } )
  .catch( error => {
    response.status( 500 ).send( error )
  } );
} );

module.exports = router;