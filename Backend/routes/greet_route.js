const express = require("express");
const greetManager = require("../managers/db_manager");
const router = express.Router();
router.get('/1', (req, res, next) => {
  return greetManager     
     
      .greeting()
      .then((response) => res.json(response))
      .catch(next);
});

router.get('/2', (req, res, next) => {
  return greetManager     
     
      .greeting2()
      .then((response) => res.json(response))
      .catch(next);
});

router.get('/3', (req, res, next) => {
  return greetManager     
     
      .greeting3()
      .then((response) => res.json(response))
      .catch(next);
});

router.get('/4', (req, res, next) => {
  return greetManager     
     
      .greeting4()
      .then((response) => res.json(response))
      .catch(next);
});
  module.exports = router;