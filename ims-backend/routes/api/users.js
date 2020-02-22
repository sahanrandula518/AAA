/*
    SAHAN

 */

//include nessesary packages
const express = require('express');
const router = express.Router();
const config = require('config');

//import the database model
const User = require('../../models/user1');

//get all users
router.get('/', async (req, res, next) => {
    try {
        let userlist = await User.getUserList();
        res.json(userlist);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
});

//create user
router.post('/', async(req, res, next) => {
    const { name, department_id, status } = req.body;

    const user_data = {
      name,
      department_id,
      status
    };

    try {
      let result = await User.create(user_data);
      if (result) {
        const payload = {
          user : {
            name: user_data.name,
            department_id: user_data.department_id,
            status:user_data.status
          }
        }
        res.json('user created');
      } 
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
});

//get specific user
router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
      let user = await User.getUser(id);
      res.json(user);
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
});

//delete user
router.delete('/:id', async(req, res, next) => {
  const { id } = req.params;
  try {
    let user = await User.delete(id);
    res.json(user);
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;