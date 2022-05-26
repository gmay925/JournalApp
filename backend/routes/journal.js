const express = require('express');
const dbo = require('../db/conn');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/journal/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection('records').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// router.get('/list', async (req, res) => {
//   try {
//     res.status(200).json({
//       data: journal,
//     });
//   } catch (err) {
//     res.status(400).json({
//       message: 'Error occured',
//       err,
//     });
//   }
// });
