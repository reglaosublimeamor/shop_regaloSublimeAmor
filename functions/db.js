'use strict'

const admin = require('firebase-admin');

var serviceAccount = require("./regaloSublimeAmor-f8d3eec438f5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

module.exports = db
