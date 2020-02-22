const db = require('../config/db');

const History = {

  getHistoryList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM history1';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else{

        return resolve(results);
        }
      });
    });
  },

  create: history1 => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO history1 (item_name,item_code,reson,discription,conducted_by,date, ) VALUES ( ?,?,?,?,?,?)';
      db.query(
        query,
        [
            history1.item_name,
            history1.item_code,
            history1.reson,
            history1.discription,
            history.conducted_by,
            history1.date
        ],
        (err, results) => {
          if (err) {
            return reject(err);
          } else{

           return resolve(results);
          }
        })
    });
  },
/*
  getHistoryList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM history';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  }, */

  getHistory: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM history1 WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent history bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  },
/*
  deleteHistory: id => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM history WHERE id = ?';
        db.query(query, [id], (err, results) => {
          if (err) {
            reject(err);
          }
          results = {
            msg: 'Successfully deleted'
          };
          return resolve(results);
        });
      });
  }
  */
};

module.exports = History;
