const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(process.env.DATABASE_URL, dbupdateobject);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.listen(3000, () => {
    console.log('listening...');
})

// test
