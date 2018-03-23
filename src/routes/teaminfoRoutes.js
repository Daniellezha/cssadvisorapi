
import sql from '../db';
import uuid from 'node-uuid';



const teaminforoutes = (app) => {

    app.route('/teaminfo')
        .get((req, res) => {
            //middleware
            var query = 'select * from TeamInfo';
            // query to the database
            executeQuery(res, query);
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
        })

        .post((req, res) => {
            var id = uuid.v4();
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            console.log(`Request type: ${req.body.TeamName}`)
            console.log(`${id}`)
            var query = "INSERT INTO [TeamInfo] (Id,TeamName,Keywords) VALUES (+'" + id + "','" + req.body.TeamName + "','" + req.body.Keywords + "')";
            // var query = 'INSERT INTO [TeamInfo] (Id,TeamName,Keywords) VALUES (id,'+  'est' +','+'test' + ')';
            console.log(`${query}`)
            executeQuery(res, query);

        });

   /* app.route('/teaminfo/:id')
        .get((req, res) => {
            //middleware
            var id = req.params.id;
            var query = "SELECT * FROM [TeamInfo] WHERE [id] ='" + id + "'";
            console.log(`${query}`)
            // query to the database
            executeQuery(res, query);
        });*/


    app.route('/teaminfo/:keywords')
        
        .get((req, res) => {
            //middleware
            var keywords = req.params.keywords;
            console.log(`${keywords}`)
            var query = "SELECT * FROM [TeamInfo] WHERE [Keywords] like '%" + keywords + "%' ";
            console.log(`${query}`)
            // query to the database
            executeQuery(res, query);
        });

    app.route('/teaminfo/:TeamName/:Keywords')
        .put((req, res) => {
            //middleware
            var TeamName = req.params.TeamName;
            var Keywords = req.params.Keywords;
            var query = "UPDATE [TeamInfo] SET Keywords = '" + Keywords + "'WHERE [TeamName] like '%" + TeamName + "%' ";
            // query to the database
            executeQuery(res, query);
        })

        .delete((req, res) => {
            //middleware
            var TeamName = req.params.TeamName;
            var Keywords = req.params.Keywords;
            console.log(`${TeamName}`)
            var query = "DELETE FROM [TeamInfo] WHERE [TeamName] = '" + TeamName+"'";
            console.log(`${query}`) 
            // query to the database
            executeQuery(res, query);
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
}

export default teaminforoutes;