// note_routes.js
var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {

  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {
      '_id': new ObjectID(id)
    };
    db
      .collection('artists')
      .findOne(details, (err, item) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send(item);
        }
      });
  });

  app.post('/notes', (req, res) => {
    const note = {
      text: req.body.body,
      title: req.body.title
    };
    db
      .collection('artists')
      .insert(note, (err, result) => {
        if (err) {
          res.send({'error': 'An error has occurred'});
        } else {
          res.send(result.ops[0]);
        }
      });
  });
};