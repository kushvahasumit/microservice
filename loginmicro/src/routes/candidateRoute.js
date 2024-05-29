const express = require("express");
const router = express.Router();

const authorized = require("../controller/candidte");
const jwtAuth = require("../middleware/jwtAuth");


router.post("/addCandidate",jwtAuth, authorized.addCandidate);
router.get("/getAllCandidate",jwtAuth, authorized.getAllCandidate);

module.exports = router;
