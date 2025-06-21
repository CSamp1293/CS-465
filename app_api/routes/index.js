const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

// Import controllers
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');
const roomsController = require('../controllers/rooms');

// Middleware to authenticate JWT
function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    console.log("Auth Header Required but NOT PRESENT!");
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("Null Bearer Token");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      return res.status(401).json("Token Validation Error!");
    }
    req.auth = verified;
    next();
  });
}

// -------------------- Auth Routes --------------------
router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

// -------------------- Trips Routes --------------------
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip)
  .delete(auth, tripsController.tripsDeleteTrip);

// -------------------- Meals Routes --------------------
router.route('/meals').get(mealsController.mealList);
router.route('/meals/:mealCode').get(mealsController.mealsFindCode);

// -------------------- News Routes --------------------
router.route('/news').get(newsController.newsList);
router.route('/news/:newsCode').get(newsController.newsFindCode);

// -------------------- Rooms Routes --------------------
router.route('/rooms').get(roomsController.roomList);
router.route('/rooms/:roomCode').get(roomsController.roomsFindCode);

// ------------------------------------------------------

module.exports = router;