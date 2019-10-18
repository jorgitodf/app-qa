const express = require('express');
const router = express.Router();
const passaport = require('./../../passaport');

router.get('/', require('./user-get'));
router.post('/', require('./user-post'));
router.post('/login', passaport.authenticate('local'), require('./login'));

module.exports = router;