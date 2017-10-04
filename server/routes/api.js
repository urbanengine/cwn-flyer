const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const baseUrl = 'http://www.openhuntsville.com/api/v1/';

function getCurrentId() {
    return axios.get(`${baseUrl}/all_cwn_events`)
    .then(posts => {
      var now = Date.now();
      var events = posts.data;
      events.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });

      var futureEvents = [];
      events.forEach(function (event) {
        var eventDate = new Date(event.date);
        eventDate.setHours(eventDate.getHours() + 5);
        if (eventDate > now) {
          futureEvents.push(event);
        }
      })

      if (futureEvents.length > 0)
        return futureEvents[0].name.split('#')[1];
      else
        return '';
    });
}

function getNextId() {
  return axios.get(`${baseUrl}/all_cwn_events`)
  .then(posts => {
    var now = Date.now();
    var events = posts.data;
    events.sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });

    var futureEvents = [];
    events.forEach(function (event) {
      var eventDate = new Date(event.date);
      eventDate.setHours(eventDate.getHours() + 5);
      if (eventDate > now) {
        futureEvents.push(event);
      }
    })

    if (futureEvents.length > 1)
      return futureEvents[1].name.split('#')[1];
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