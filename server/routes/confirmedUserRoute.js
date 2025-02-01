const express = require('express');
const { confirmUserCtrl } = require('../controllers/confirmUsers.js');
const router = express.Router();

// register route :
router.route('/confirme').post(confirmUserCtrl);


module.exports = router;