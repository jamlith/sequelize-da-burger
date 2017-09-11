/*
 *  (eat-da-burger):
 *      ORM.js - the object relational module
 *
 *-------------------------------------->8------------------------------------*/
var path = require('path')
  , mysql = require('mysql')
  , cxs = require(path.join(__dirname, './connection'));


var ORM = {
    selectAll: function(cb) {
        var query = 'SELECT * FROM `burgers`;';
        cxs.query(query, (err, res, flds) => {
            if (!err) {
                return cb(res);
            } else {
                throw Error(err);
            }
        });
    },
    insertOne: function(name, cb) {
        // Create a new
        var query = "INSERT INTO `hr0vdec8yom4q8ik`.`burgers` (`burger_name`) VALUES (?);";
        cxs.query(query, [ name ], (err, res, flds) => {
            if (! err) {
                return cb(res.insertId);
            } else {
                throw Error(err);
            }
        });
    },
    updateOne: function(id, cb) {
        // Mark the record with ID=? as devoured
        var query = "UPDATE `hr0vdec8yom4q8ik`.`burgers` SET `is_devoured`=1 WHERE `id`=?";
        cxs.query(query, [ id ], (err, res, flds) => {
            if (!err && res.affectedRows) {
                return cb(true);
            } else {
                throw Error(err);
            }
        });
    },
    regurgitateBurgers: function(cb) {

        var query = "UPDATE `hr0vdec8yom4q8ik`.`burgers` SET `is_devoured`=0 WHERE `is_devoured`=1";
        cxs.query(query, (err, res, flds) => {
            if (!err) {
                return cb(res.affectedRows);
            }
        });
    }
};

module.exports = ORM;
