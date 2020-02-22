const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const Item = require('../../models/Item');

//@route  POST api/item
//@dec    Create an item
//@access public
router.post(
  '/',
  /*
  [
    check('item_code', 'item_code is requied')
      .not()
      .isEmpty(),
    check('item_type_id', 'item_type_id is requied')
      .not()
      .isEmpty(),
    check('item_model_id', 'item_model_id is requied')
      .not()
      .isEmpty(),
    check('serial_no', 'serial_no is requied')
      .not()
      .isEmpty(),
    check('ram', 'ram is requied')
      .not()
      .isEmpty(),
    check('hdd', 'hdd is requied')
      .not()
      .isEmpty(),
    check('operating_system_id', 'operating_system_id is requied')
      .not()
      .isEmpty(),
    check('license_status', 'license_status is requied')
      .not()
      .isEmpty(),
    check('product_key', 'product_key is requied')
      .not()
      .isEmpty(),
    check('purchased_date', 'purchased_date is requied')
      .not()
      .isEmpty(),
    check('warranty_expire_date', 'warranty_expire_date is requied')
      .not()
      .isEmpty(),
    check('vendor_id', 'vendor_id is requied')
      .not()
      .isEmpty(),
    check('battery_serial_number', 'battery_serial_number is requied')
      .not()
      .isEmpty(),
    check('charger_ct_number', 'charger_ct_number is requied')
      .not()
      .isEmpty(),
    check('user_id', 'user_id is requied')
      .not()
      .isEmpty(),
    check('Invoice_number', 'Invoice_number is requied')
      .not()
      .isEmpty(),
    check('Status', 'Status is requied')
      .not()
      .isEmpty()
  ],
  */
  async (req, res, next) => {
  // const errors = validationResult(req);
   // if (!errors.isEmpty()) {
   //   return res.status(400).json({ errors: errors.array() });
    //}

    const item_data = {
      item_code,
      item_type_id,
      item_model_id,
      serial_no,
      ram,
      hdd,
      operating_system_id,
      license_status,
      product_key,
      purchased_date,
      warranty_expire_date,
      vendor_id,
      battery_serial_number,
      charger_ct_number,
      user_id,
      Invoice_number,
      status
    } = req.body;

    //published and waranty expire date should be change
   {/*
    const item = {
      item_code,
      item_type_id,
      item_model_id,
      serial_no,
      ram,
      hdd,
      operating_system_id,
      license_status,
      product_key,
      purchased_date: moment().format('YYYY-MM-DD'),
      warranty_expire_date: moment().format('YYYY-MM-DD'),
      vendor_id,
      battery_serial_number,
      charger_ct_number,
      user_id,
      Invoice_number,
      status
     }
     */
    };
    try {
      let result = await Item.createItem(item_data);
      if (result) {
        const payload = {
          item : {
           item_code : item_data.item_code,
            item_type_id : item_data.item_type_id,
            item_model_id : item_data.item_model_id,
            serial_no: item_data.serial_no,
            ram : item_data.ram,
            hdd : item_data.hdd,
            operating_system_id : item_data.operating_system_id,
            license_status : item_data.license_status,
            product_key : item_data.product_key,
            purchased_date : item_data.purchased_date,
            warranty_expire_date : item_data.warranty_expire_date,
            vendor_id : item_data.vendor_id,
            battery_serial_number : item_data.battery_serial_number,
            charger_ct_number : item_data.charger_ct_number,
            user_id : item_data.user_id,
            Invoice_number : item_data.Invoice_number,
            status : item_data.status
          }
        }
      }
      res.json('item created');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

//@route  GET api/item
//@dec    Get item list
//@access public
router.get('/', async (req, res, next) => {
  try {
    let itemList = await Item.getItemList();

    res.json(itemList);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route  GET api/item/:id
//@dec    Get item by id
//@access public
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    let item = await Item.getItem(id);

    res.json(item);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Sever error');
  }
});

//@route  GET api/item/:id
//@dec    Delete an item
//@access public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    let result = await Item.deleteItem(id);

    res.json(result);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
