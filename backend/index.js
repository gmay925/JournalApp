const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');

const app = express();

app.use('/api', router);

mongoose
  .connect(
    'mongodb+srv://grouproject:together@cluster0.e2mht.mongodb.net/datajournal?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(8080);
    console.log('Database is connected to local host 8080');
  })
  .catch((err) => console.log(err));

module.exports = app;
