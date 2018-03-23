// db.js 
var express = require('express');
var sql = require('mssql');
var dbConfig = {
    user: 'serveradmin',
    password: 'Password1!',
    server: 'mscssguideserver.database.windows.net',
    database: 'mscssguidedb',
    options: {
        encrypt: true
    }
};
var connection = sql.connect(dbConfig, function (err) {
    if (err)
        throw err;
});

var request = new sql.Request();
//Function to connect to database and execute query
var executeQuery = function (resDoc, query) {
    // create Request object
    var request = new sql.Request();
    // query to the database
    request.query(query, function (err, res) {
        if (err) {
            console.log("Error while querying database :- " + err);
            resDoc.send(err);
        }
        else {
            resDoc.send(res);
        }
    });
}

module.exports = sql; 