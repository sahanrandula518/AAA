const db = require('../config/db');

const Department = {

  getDepartmentList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else {

        return resolve(results);
        }
      });
    });
  },

  create: department => {

    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO department (department, status) VALUES ( ?,?)';
      db.query(
        query,
        [department.department, department.status],
        (err, results) => {
          if (err) {
            return reject(err);
          } else{

          return resolve(results);
          }
        }
      );
    });
  },

  /*
  getDepartmentList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  */

  getDepartment: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM department WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        } else {
        // if we return just results it will still gv us the relevent department bt in `[ {} ]`
        return resolve(results[0]);
        }
      });
    });
  },

  delete: id => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM department   WHERE id = ?';
      db.query(query, [id], (err, results) => {
          if (err) {
              return reject(err);
          } else {
              return resolve(results[0]);
          }            
      })
    });
  }
};

module.exports = Department;
