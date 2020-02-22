const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');


//const response = require('../ ../config/response');
const Department = require('../../models/Department');


//@route GET api/department
//@dec Get department list
//@access public
router.get('/', async (req, res, next) => {
    try {
        let departmentlist = await Department.getDepartmentList();

        res.json(departmentlist);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500).send('Server error');
    }
});

//@route GET api/department/:id
//@dec Get a department by id
//@access public

/*
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let department = await Department.getDepartment(id);

        res.json(department);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    });

    */

    //create department
    router.post('/', async(req, res, next) => {
        const { department, status } = req.body;
    
        const department_data = {
          department,
          status
        };
    
        try {
          let result = await Department.create(department_data);
          if (result) {
            const payload = {
              department : {
                department: department.department,
                status:department.status
              }
            }
            res.json('department created');
          } 
        } catch (error) {
          console.log(error.message);
          res.status(500).send('Server error');
        }
    });

    //get specific department
    router.get('/:id', async(req, res, next) => {
      const { id } = req.params;
      try {
        let department = await Department.getDepartment(id);
        res.json(department);
      } catch (error) {
        console.log(err.message);
        res.status(500).send('Server error');
      }
  });

//delete department
  router.delete('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
      let department = await Department.delete(id);
      res.json(department);
    } catch (error) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  });


    module.exports = router; 