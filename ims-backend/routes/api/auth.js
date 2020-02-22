const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
   res.send('Auth route')
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
