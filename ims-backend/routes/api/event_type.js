const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');


//const response = require('../ ../config/response');
const EventType = require('../../models/EventType');


//@route GET api/department
//@dec Get department list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let event_typelist = await EventType.getEventTypeList();

        res.json(event_typelist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/department/:id
//@dec Get a department by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let event_type = await EventType.getEventType(id);

        res.json(event_type);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    //create event_type

    router.post('/', async(req, res, next) => {
        const { event_type,  status } = req.body;
    
        const event_type_data = {
            event_type,
            status
        };
    
        try {
          let result = await EventType.create(event_type_data);
          if (result) {
            const payload = {
                event_type : {
                event_type: event_type.event_type,
                status:event_type.status
              }
            }
            res.json('event_type created');
          } 
        } catch (error) {
          console.log(error.message);
          res.status(500).send('Server error');
        }
    });

//delete event_type 
    router.delete('/:id', async(req, res, next) => {
        const { id } = req.params;
        try {
          let event_type = await EventType.delete(id);
          res.json(event_type);
        } catch (error) {
          console.log(err.message);
          res.status(500).send('Server error');
        }
      });

    module.exports = router; 