const express = require('express')
const mongoose = require('mongoose')

const app = express()

///Middlewares

///Routes
app.get('/', (req, res) => {
    res.send('Welcome to Chart')
});
//const app = mongoose()
//DB comnnection
mongoose.connect('mongodb://localhost/origa', { useNewUrlParser: true }, { useUnifiedTopology: true })

///Listening to the server

app.listen(8080, () => console.log('\n Started'))