const express = require('express');
const router = express.Router();
const api = require('../../controllers/dice.js');
const { check } = require('express-validator');

router.post('/getvrffee', [
  check('gasAmount', 'gasAmount is required').not().isEmpty(),
], api.getVRFFee);

module.exports = router;