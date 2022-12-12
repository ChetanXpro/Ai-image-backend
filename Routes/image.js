const express = require("express");
const generateImage = require("../Controller/image");

const router = express.Router();

router.post("/generateimage", generateImage);

module.exports = router;
