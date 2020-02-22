/*
    SAHAN

 */

//include nessesary packages
const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const config = require('config');

//import the database model
const History = require('../../models/history1');

//get all history1
router.get('/', async (req, res, next) => {
    try {
        let history1list = await History.getHistoryList();
        res.json(history1list);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
});

//create history
/*
router.post('/', async(req, res, next) => {
    const { item_name, item_code,reson,discription,conducted_by, date } = req.body;

    const history1_data = {
      item_name,
      item_code,
      reson,
      discription,
      conducted_by,
      date
    };

    try {
      let result = await History.create(history1_data);
      if (result) {
        const payload = {
          history1 : {
            item_name: history1_data.item_name,
            item_code: history1_data.item_code,
            reson:history1_data.reson,
            discription:history1_data.discription,
            conducted_by:history1_data.conducted_by,
            date :history1_data.date
          }
        }
        res.json('history1 created');
      } 
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
});

*/

//get specific history
router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
      let history1 = await History.getHistory1(id);
      res.json(history1);
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
});

//delete history

/*
router.delete('/:id', async(req, res, next) => {
  const { id } = req.params;
  try {
    let history1 = await History.delete(id);
    res.json(history1);
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

*/

module.exports = router;