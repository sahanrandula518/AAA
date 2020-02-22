const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');

// const response = require('../../config/response');
const User = require('../../models/User');

//@route  GET api/user
//@dec    Create a user
//@access public
router.post(
  '/',
  [
    check('email', 'Email is required')
      .not()
      .isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password is required')
      .not()
      .isEmpty(),
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('position', 'Position is required')
      .not()
      .isEmpty()
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password, name, position } = req.body;

    const salt = await bcrypt.genSalt(10);
    encryptedPassword = await bcrypt.hash(password, salt);

    const user_data = {
      email,
      password: encryptedPassword,
      name,
      position
    };

    try {
      let result = await User.create(user_data);
      if (result) {
        const payload = {
          user: {
            email: user_data.email
          }
        };

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

//@route  GET api/user
//@dec    Get user list
//@access public
router.get('/', async (req, res, next) => {
  try {
    let userlist = await User.getUserList();

    res.json(userlist);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route  GET api/user/:id
//@dec    Get a user by id
//@access public
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await User.getUser(id);

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
