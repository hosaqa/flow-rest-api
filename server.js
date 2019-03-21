// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
  if (err) 
    return console.log(err)
  require('./app/routes')(app, database.db('flow'));
  app.listen(port, () => {
    console.log('We are live on ' + port);
    //console.log(database.db('hsqdb').collection('notes'))
  });
})

// const MongoClient = require(‘mongodb’).MongoClient; const uri =
// "mongodb+srv://hosaqa:hosaqa@flow-d6mfk.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {   const collection =
// client.db("test").collection("devices");   // perform actions on the
// collection object   client.close(); });