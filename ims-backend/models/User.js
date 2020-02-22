const db = require('../config/db');

const User = {
  create: user => {
    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO app_user (email, password, name, position) VALUES ( ?,?,?,?)';
      db.query(
        query,
        [user.email, user.password, user.name, user.position],
        (err, results) => {
          if (err) {
            return reject(err);
          }

          return resolve(results);
        }
      );
    });
  },

  getUserList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM user';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  getUser: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM user WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        }
        // if we return just results it will still gv us the relevent user bt in `[ {} ]`
        return resolve(results[0]);
      });
    });
  }
};

module.exports = User;
