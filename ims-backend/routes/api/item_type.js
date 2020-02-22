const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
 const Item_Type = require('../../models/Item_Type');


//@route GET api/item_type
//@dec Get item_type list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let item_typelist = await Item_Type.getItem_TypeList();

        res.json(item_typelist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/item_type/:id
//@dec Get a item_type by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let item_type = await Item_Type.getItem_Type(id);

        res.json(item_type);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    router.post('/', async(req, res, next) => {
        const { item_type, status } = req.body;
    
        const item_type_data = {
          item_type,
          status
        };
    
        try {
          let result = await Item_Type.create(item_type_data);
          if (result) {
            const payload = {
              item_type : {
                item_type: item_type.item_type,
                status:item_type.status
              }
            }
            res.json('item_type created');
          } 
        } catch (error) {
          console.log(error.message);
          res.status(500).send('Server error');
        }
    });

    //delete item_type
    router.delete('/:id', async(req, res, next) => {
      const { id } = req.params;
      try {
        let item_type = await Item_Type.delete(id);
        res.json(item_type);
      } catch (error) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
    });
   

    module.exports = router; 