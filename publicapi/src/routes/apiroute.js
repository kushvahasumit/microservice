const express = require('express');

const apiAuth = require('../middleware/apiAuth');
const authorized = require('../controller/profile');
const router = express.Router();

router.post('/profile',apiAuth,authorized.profile);
router.get("/candidate", apiAuth, authorized.candidate);


module.exports = router;
