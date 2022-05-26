// const { MongoClient } = require('mongodb');
// const Db = process.env.ATLAS_URI;

// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// // module.exports = {
// //   connectToServer: function (callback) {
// //     client.connect(function (err, db) {
// //       // Verify we got a good "db" object
// //       if (db) {
// //         _db = db.db('employees');
// //         console.log('Successfully connected to MongoDB.');
// //       }
// //       return callback(err);
// //     });
// //   },

// //   getDb: function () {
// //     return _db;
// //   },
// // };

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const uri =
//     'mongodb+srv://grouproject:together@cluster0.e2mht.mongodb.net/?retryWrites=true&w=majority';

//   const client = new MongoClient(uri);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);
