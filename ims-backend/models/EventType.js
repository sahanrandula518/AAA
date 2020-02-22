const db = require('../config/db');

const EventType = {

  getEventTypeList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM event_type';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        } else{

        return resolve(results);
        }
      });
    });
  },

  create: event_type => {

    return new Promise((resolve, reject) => {
      const query =
        'INSERT INTO event_type (event_type, status) VALUES ( ?,?)';
      db.query(
        query,
        [event_type.event_type, event_type.status],
        (err, results) => {
          if (err) {
            return reject(err);
          } else {

          return resolve(results);
          }
        }
      );
    });
  },

  /*
  getEventTypeList: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM event_type';
      db.query(query, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    });
  },

  */

  getEventType: id => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM event_type WHERE id = ?';
      db.query(query, [id], (err, results) => {
        if (err) {
          return reject(err);
        } else {
        // if we return just results it will still gv us the relevent eventtype bt in `[ {} ]`
        return resolve(results[0]);
        }
      });
    });
  },

  delete: id => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM event_type WHERE id = ?';
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

module.exports = EventType;
