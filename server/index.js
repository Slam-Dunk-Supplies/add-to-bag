/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const db = require('../database/index.js');

const app = express();
const PORT = 3004;

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/add_to_bag', (req, res) => {
  const { id } = req.query;
  console.log(`The request id is ${id}.`);
  db.Item.findOne({ id: [id] }).then((result) => {
    if (result) {
      res.send(result);
    } else {
      res.send(404);
    }
  }).catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
