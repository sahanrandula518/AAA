const db = require('../config/db');

const Operating_System = {

  getOperating_SystemList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM operating_system';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else {

        return resolve(results);
        }
      });
    });
  },

  create: operating_system => {


    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO operating_system(operating_system, bit_version, status) VALUES ( ?,?,?)';
      db.query(
        query,
        [operating_system.operating_system,operating_system.bit_version,operating_system.status],
        (err, results) => {
          if (err) {
            return reject(err);
          }else {

          return resolve(results);
          }
        }
      );
    });
  },

 

  getOperatingSystem: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM operating_system WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent operatingsystem bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  },

  delete: id => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM operating_system WHERE id = ?';
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

module.exports = Operating_System;
