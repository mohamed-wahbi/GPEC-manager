const express = require('express');
const { registerCtel} = require('../controllers/authUserCtrl.js');
const router = express.Router();

// register route :
router.route('/register').post(registerCtel);



module.exports = router;