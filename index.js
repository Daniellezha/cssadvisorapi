import express from 'express';
import teaminforoutes from './src/routes/teaminfoRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


//Bodyparser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser);

teaminforoutes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on ${PORT}`));

