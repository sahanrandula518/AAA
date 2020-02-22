/*
    SAHAN

 */

const db = require('../config/db');

const user1 = {

    getUserList: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT u.id, u.name, d.department, u.status FROM user u, department d WHERE u.department_id = d.id';
            db.query(query, (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            })
        });
    },

    create: user => {
console.log(user);

        //console.log("dddddddddddddd",user);

        return new Promise((resolve, reject) => {
            
            const query = 'INSERT INTO user (name, department_id, status) VALUES( ?,?,?)';
           // console.log(user.name, user.department_id,user.status);
            db.query(query, [user.name, user.department_id,user.status], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results);
                }
            })
        });
    },

    getUser: id => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT u.id, u.name, d.department, u.status FROM user u, department d where u.department_id = d.id and u.id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(results[0]);
                }            
            })
        });
    },

    delete: id => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM user WHERE id = ?';
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

module.exports = user1;