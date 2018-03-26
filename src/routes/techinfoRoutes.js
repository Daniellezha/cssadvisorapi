
var express = require('express');
var sql = require('../db');
var uuid = require('node-uuid')


const techinforoutes = (app) => {

    app.route('/techinfo/:keywords')
        .get((req, res) => {
            //middleware
            var keywords = req.params.keywords;
            console.log(`${keywords}`)
            var query = "SELECT * FROM [TechLink] WHERE [Keywords] like '%" + keywords + "%' ";
            console.log(`${query}`)
            // query to the database
            executeQuery(res, query);
        })

        .post((req, res) => {
            var id = uuid.v4();
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            console.log(`Request type: ${req.body.keywords}`)
            console.log(`${id}`)
            var query = "INSERT INTO [TechLink] (Id,Suggestion,Keywords) VALUES ('" + id + "','" + req.body.Suggestion + "','" + req.body.keywords + "')";
            // var query = 'INSERT INTO [TeamInfo] (Id,TeamName,Keywords) VALUES (id,'+  'est' +','+'test' + ')';
            console.log(`${query}`)
            executeQuery(res, query);

        })
        .delete((req, res) => {
            //middleware
            var Keywords = req.params.keywords;
            console.log(`${Keywords}`)
            var query = "DELETE FROM [TechLink] WHERE [Keywords] like '%" + Keywords + "%' ";
            console.log(`${query}`) 
            // query to the database
            executeQuery(res, query);
        });;

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
}

module.exports = techinforoutes;
//export default teaminforoutes;