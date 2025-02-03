const express = require('express');
const { confirmUserCtrl } = require('../controllers/confirmUsers.js');
const router = express.Router();

// register route :
router.route('/confirme').post(confirmUserCtrl);

// bech n5asou lista ll employer confirmer ml admin w les chef de depart w lista mta les chef depart confirmer ml admin


module.exports = router;