const express = require('express');
const { registerCtel, loginCtrl } = require('../controllers/authUserCtrl.js');
const router = express.Router();

// register route :
router.route('/register').post(registerCtel);

//Login route :
router.route('/login').post(loginCtrl)

//user ingo get :

module.exports = router;