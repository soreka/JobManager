const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username, ',', password);
    res.send({ username, password });
  } catch (error) {
    res.status(500).send('No avalibale User found');
  }
});

module.exports = router;
