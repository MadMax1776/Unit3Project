const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');

app.use(express.json());
app.use(express.static('public'))

app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}))

const sessionController = require('./controllers/session.js');
app.use('/session', sessionController)

const wonderController = require('./controllers/wonders.js');
app.use('/wonder', wonderController);

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

mongoose.connect(
    'mongodb://localhost:27017/wonder',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.listen(3000, () => {
    console.log('listening...');
})

// test
