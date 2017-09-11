/*
 *  (Eat-Da-Burger):
 *       connection.js - connect to MySQL, pass it on
 *
 *-------------------------------------->8------------------------------------*/

 var mysql = require('mysql');

//  var creds = {
//      host: "localhost",
//      user: "james",
//      password: "james",
//      database: "burgers_db",
//      stringifyObjects: true
//  };
 var creds = {
     host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
     user: "givj98e77xcypqaw",
     password: "pba0j70rtzbq6pmx",
     database: "hr0vdec8yom4q8ik",
     stringifyObjects: true
 }

 var cxs = mysql.createConnection(creds);
 cxs.connect();

 module.exports = cxs;

