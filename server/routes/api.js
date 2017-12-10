const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const baseUrl = 'http://www.openhuntsville.com/api/v1/';

function getCurrentId() {
    return axios.get(`${baseUrl}/thisweeks_cwn_event`)
    .then(event => {

      if (event != undefined && event.id != undefined)
        return event.id;
      else
        return '';
    });
}

function getNextId() {
  return axios.get(`${baseUrl}/nextweeks_cwn_event`)
  .then(event => {
    if (event != undefined && event.id != undefined)
      return event.id;
    else
      return '';
  });
}

router.get('/cwnEvents/current', (req, res) => {
  getCurrentId().then(currentId => {
    axios.get(`${baseUrl}/cwn_flyer/` + currentId)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  });
});

router.get('/cwnEvents/next', (req, res) => {
  getNextId().then(currentId => {
    axios.get(`${baseUrl}/cwn_flyer/` + currentId)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  });
});

router.get('/cwnEvents/:id', (req, res) => {
  axios.get(`${baseUrl}/cwn_flyer/` + req.params.id)
  .then(posts => {
    res.status(200).json(posts.data);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});

module.exports = router;