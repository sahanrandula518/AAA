const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');

//const response = require('../ ../config/response');
const Vendor = require('../../models/Vendor');


//@route GET api/vendor
//@dec Get vendor list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let vendorlist = await Vendor.getVendorList();

        res.json(vendorlist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/vendor/:id
//@dec Get a vendor by id
//@access public
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let vendor = await Vendor.getVendor(id);

        res.json(vendor);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    //create vendor

    
router.post('/', async(req, res, next) => {
    const { vendor_name,registered_date, status } = req.body;

    const vendor_data = {
      vendor_name,
      registered_date,
      status
    };

    try {
      let result = await Vendor.create(vendor_data);
      if (result) {
        const payload = {
            vendor : {
                vendor_name:  vendor_data.vendor_name,
                registered_date:  vendor_data.registered_date,
                status:vendor_data.status
          }
        }
        res.json('vendor created');
      } 
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error');
    }
});


//delete vendor
router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
      let  vendor_name = await Vendor.delete(id);
      res.json(vendor_name);
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  });

    module.exports = router; 