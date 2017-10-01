const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'http://www.openhuntsville.com/api/v1/cwn_flyer';
//const API = 'https://jsonplaceholder.typicode.com';

/* Serve up events. */
router.get('/', (req, res) => {
  axios.get(`${API}`)
  .then(posts => {
    res.status(200).json(posts.data);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});

module.exports = router;