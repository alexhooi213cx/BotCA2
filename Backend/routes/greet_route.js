const express = require("express");
const greetManager = require('../managers/greet_manager');
const router = express.Router();
router.get('/data', (req, res, next) => {
  return greetManager        
      .greeting()
      .then((response) => res.json(response))
      .catch(next);
});
  module.exports = router;