const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static('public'))



mongoose.connect(
    'mongodb://localhost:27017/meancrud',
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
