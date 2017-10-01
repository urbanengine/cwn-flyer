const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
  });

// Get all events
router.get('/events', (req, res) => {
  axios.get(`http://www.openhuntsville.com/api/v1/cwn_flyer`)
    .then(events => {
      res.status(200).json(events.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;