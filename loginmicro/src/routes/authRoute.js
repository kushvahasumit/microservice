const express = require('express');
const router = express.Router();
const authorized = require('../controller/auth');
const jwtAuth = require('../middleware/jwtAuth');

router.post('/register',authorized.register);
router.post('/login',authorized.login);
router.post('/protected',jwtAuth,authorized.protected);

module.exports = router;