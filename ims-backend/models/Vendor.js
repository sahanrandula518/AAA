const db = require('../config/db');

const Vendor = {

  getVendorList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM vendor';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else {

        return resolve(results);
        }
      });
    });
  },

  create: vendor => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO vendor (vendor_name, registered_date ,status) VALUES ( ?,?,?)';
      db.query(
        query,
        [vendor.vendor_name,vendor.registered_date,vendor.status],
        (err, results) => {
          if (err) {
            return reject(err);
          }

          return resolve(results);
        }
      );
    });
  },
/*
  getVendorList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM vendor';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },
  */

  getVendor: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM vendor WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent vendor bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  },

  delete: id => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM vendor WHERE id = ?';
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

module.exports = Vendor;
