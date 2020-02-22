const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');


//const response = require('../ ../config/response');
const Item_Model = require('../../models/Item_Model');


//@route GET api/item_model
//@dec Get item_model list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let item_modellist = await Item_Model.getItem_ModelList();

        res.json(item_modellist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/item_model/:id
//@dec Get a item_model by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let item_model = await Item_Model.getItem_Model(id);

        res.json(item_model);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    //create item_model
    router.post('/', async(req, res, next) => {
        const { item_model, status } = req.body;
    
        const item_model_data = {
          item_model,
          status
        };
    
        try {
          let result = await Item_Model.create(item_model_data);
          if (result) {
            const payload = {
              item_model : {
                item_model: item_model.item_model,
                status:item_model.status
              }
            }
            res.json('item_model created');
          } 
        } catch (error) {
          console.log(error.message);
          res.status(500).send(error.message);
        }
    });

   //delete item_model
router.delete('/:id', async(req, res, next) => {
  const { id } = req.params;
  try {
    let item_model = await Item_Model.delete(id);
    res.json(item_model);
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
}); 

    module.exports = router; 