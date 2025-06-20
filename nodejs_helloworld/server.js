import express from 'express';
import bodyparser from 'body-parser';

// Routes:
import studentRoutes from './routes/studentRoutes.js';
const app = express();
const Port = process.env.PORT;
import './db.js';

import dotenv from 'dotenv';
dotenv.config();
console.log('Environment Variables:', process.env.PORT, process.env.MONGO_URL);

app.use(bodyparser.json());

// passport.authenticate('local', { session: false })

app.get('/start',   (req, res) => {
    console.log('Received a GET request');
    res.send('Hello World!');
});

app.use('/student',  studentRoutes);


app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);

});