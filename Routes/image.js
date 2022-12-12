const express = require("express");
const generateImage = require("../Controller/image");

const router = express.Router();

router.post("/generateimage", generateImage);
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Api working",
    api: "Post request -> /generateimage",
  });
});

module.exports = router;
