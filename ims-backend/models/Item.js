const db = require('../config/db');


const Item = {
  
  createItem: item => {
    return new Promise((resolve, reject) => {
      console.log(item_code, item_type_id, item_model_id,  serial_no,  ram,  hdd,  operating_system_id,  license_status,  product_key,  purchased_date,  warranty_expire_date,  vendor_id,  battery_serial_number,  charger_ct_number,  user_id, Invoice_number, status);
      const query =
        'INSERT INTO items ( item_code, item_type_id, item_model_id,  serial_no,  ram,  hdd,  operating_system_id,  license_status,  product_key,  purchased_date,  warranty_expire_date,  vendor_id,  battery_serial_number,  charger_ct_number,  user_id, Invoice_number, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      db.query(
        query,
        [
          item.item_code,
          item.item_type_id,
          item.item_model_id,
          item.serial_no,
          item.ram,
          item.hdd,
          item.operating_system_id,
          item.license_status,
          item.product_key,
          item.purchased_date,
          item.warranty_expire_date,
          item.vendor_id,
          item.battery_serial_number,
          item.charger_ct_number,
          item.user_id,
          item.Invoice_number,
          item.status
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },

  getItemList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT  * FROM items';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else {

        return resolve(results);
        }
      });
    });
  },
  getItem: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM items WHERE item_code = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
  },
  deleteItem: id => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM items WHERE item_code = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
         return reject(err);
        }
        results = {
          msg: 'Successfully deleted'
        };
        return resolve(results);
      });
    });
  },
  existCheck: id => {
    return new Promise((resolve, reject) => {
      const query =
        'SELECT EXISTS(SELECT * FROM inventory_my_erec.items WHERE item_code = ?);';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        } else {
      
        return resolve(results[0]);
        }
      });
    });
  }
};

module.exports = Item;
