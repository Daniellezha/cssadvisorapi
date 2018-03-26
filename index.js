var express = require('express');
var teaminforoutes = require('./src/routes/teaminfoRoutes'); 
var techinforoutes = require('./src/routes/techinforoutes'); 
var bodyParser = require('body-parser'); 

const app = express();
var PORT = process.env.PORT || 3000;


//Bodyparser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser);

teaminforoutes(app);
techinforoutes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on ${PORT}`));

