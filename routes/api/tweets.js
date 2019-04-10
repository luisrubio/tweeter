const express = require("express");
const router = express.Router();

// @route     GET api/tweets/test
// @desc      Test route
// @access    Public
router.get("/test", (req, res) => {
  res.json({ msg: "success" });
});

module.exports = router;
