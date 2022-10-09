const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrips);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;